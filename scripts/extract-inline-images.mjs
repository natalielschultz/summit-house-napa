import { readFile, writeFile, mkdir, rename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const SOURCE = "/Users/natalielschultz/Desktop/SummitHouse_Gary_Interactive.html";
const DEST_HTML = join(ROOT, "public", "SummitHouse_Gary_Interactive.html");
const IMAGES_DIR = join(ROOT, "public", "images", "belvedere");
const URL_PREFIX = "/images/belvedere";

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function slugify(text) {
  const s = (text || "")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60)
    .replace(/-$/, "");
  return s;
}

async function atomicWrite(path, data) {
  const tmp = `${path}.tmp`;
  await writeFile(tmp, data);
  await rename(tmp, path);
}

async function main() {
  if (existsSync(DEST_HTML)) {
    const existing = await readFile(DEST_HTML, "utf8");
    if (!existing.includes("data:image/")) {
      console.log("Already processed — destination HTML has no inlined data URIs. Exit.");
      return;
    }
  }

  await mkdir(IMAGES_DIR, { recursive: true });

  console.log(`Reading ${SOURCE}...`);
  const html = await readFile(SOURCE, "utf8");
  const bodyStart = html.indexOf("<body>");
  const bodyEnd = html.lastIndexOf("</body>");
  if (bodyStart < 0 || bodyEnd < 0) {
    throw new Error("Could not locate <body>...</body> in source HTML");
  }
  const head = html.slice(0, bodyStart);
  const body = html.slice(bodyStart, bodyEnd);
  const tail = html.slice(bodyEnd);

  const fullImgRegex = /<img\s+[^>]*?>/gi;
  const matches = [];
  let fm;
  while ((fm = fullImgRegex.exec(body)) !== null) {
    const tag = fm[0];
    const srcMatch = tag.match(
      /src=["']data:image\/(jpeg|jpg|png);base64,([A-Za-z0-9+/=]+)["']/i
    );
    if (!srcMatch) continue;
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    matches.push({
      start: fm.index,
      end: fm.index + tag.length,
      tag,
      format: srcMatch[1].toLowerCase() === "jpg" ? "jpeg" : srcMatch[1].toLowerCase(),
      base64: srcMatch[2],
      alt: altMatch ? altMatch[1] : "",
    });
  }

  console.log(`Found ${matches.length} inlined images.\n`);

  const cache = new Map();
  const slugCounter = new Map();
  const rows = [];

  for (const m of matches) {
    const buf = Buffer.from(m.base64, "base64");
    const hash = createHash("sha256").update(buf).digest("hex");
    const origBytes = buf.length;

    if (cache.has(hash)) {
      const c = cache.get(hash);
      m.replacement = `${URL_PREFIX}/${c.filename}`;
      rows.push({
        alt: m.alt,
        filename: c.filename,
        ext: c.ext,
        origBytes,
        newBytes: c.newBytes,
        dedupeOf: c.filename,
      });
      continue;
    }

    const baseSlug = slugify(m.alt) || `image-${hash.slice(0, 8)}`;
    const count = (slugCounter.get(baseSlug) || 0) + 1;
    slugCounter.set(baseSlug, count);
    const slug = count > 1 ? `${baseSlug}-${count}` : baseSlug;

    let ext, outBuf;
    if (m.format === "jpeg") {
      ext = "jpg";
      outBuf = await sharp(buf).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    } else {
      const webpBuf = await sharp(buf).webp({ quality: 80, effort: 6 }).toBuffer();
      if (webpBuf.length < origBytes * 0.8) {
        ext = "webp";
        outBuf = webpBuf;
      } else {
        ext = "png";
        outBuf = await sharp(buf).png({ compressionLevel: 9, palette: true }).toBuffer();
      }
    }

    const filename = `${slug}.${ext}`;
    await atomicWrite(join(IMAGES_DIR, filename), outBuf);

    cache.set(hash, { filename, ext, newBytes: outBuf.length });
    m.replacement = `${URL_PREFIX}/${filename}`;
    rows.push({
      alt: m.alt,
      filename,
      ext,
      origBytes,
      newBytes: outBuf.length,
      dedupeOf: null,
    });
  }

  let newBody = body;
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    const newTag = m.tag.replace(
      /src=["']data:image\/(jpeg|jpg|png);base64,[A-Za-z0-9+/=]+["']/i,
      `src="${m.replacement}"`
    );
    newBody = newBody.slice(0, m.start) + newTag + newBody.slice(m.end);
  }

  const newHtml = head + newBody + tail;
  await atomicWrite(DEST_HTML, newHtml);

  console.log("=== Extraction Report ===\n");
  const altCol = "ALT".padEnd(35);
  console.log(`${altCol} | EXT  |    ORIG |     NEW |    RED | NOTE`);
  console.log("-".repeat(100));
  let totalOrig = 0;
  let totalNew = 0;
  for (const r of rows) {
    const ratio = r.newBytes / r.origBytes;
    const red = `${((1 - ratio) * 100).toFixed(1)}%`;
    const notes = [];
    if (r.dedupeOf) notes.push(`dedupe of ${r.dedupeOf}`);
    if (!r.dedupeOf && ratio > 0.8) notes.push("⚠ <20% reduction");
    if (!r.dedupeOf && ratio < 0.15) notes.push("⚠ >85% reduction");
    const alt = (r.alt || "(no alt)").slice(0, 33).padEnd(35);
    console.log(
      `${alt} | ${r.ext.padEnd(4)} | ${formatBytes(r.origBytes).padStart(7)} | ${formatBytes(r.newBytes).padStart(7)} | ${red.padStart(6)} | ${notes.join(", ")}`
    );
    totalOrig += r.origBytes;
    if (!r.dedupeOf) totalNew += r.newBytes;
  }
  console.log("-".repeat(100));
  console.log(
    `\nTotals: original ${formatBytes(totalOrig)} -> new ${formatBytes(totalNew)} (unique files only)`
  );
  console.log(`Unique image files: ${cache.size}`);
  console.log(`HTML written: ${DEST_HTML} (${formatBytes(Buffer.byteLength(newHtml))})`);
}

main().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
