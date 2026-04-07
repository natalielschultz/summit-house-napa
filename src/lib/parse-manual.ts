import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export interface ManualSection {
  id: string;
  title: string;
  markdown: string;
  html: string;
}

const MANUAL_PATH = path.join(process.cwd(), "src/content/house-manual.md");

function readManualFile(): string {
  return fs.readFileSync(MANUAL_PATH, "utf-8");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Parse the markdown file into sections split on ## headings.
 * Supports two formats:
 *   ## Title {#custom-id}
 *   ## Title              (auto-generates ID from title)
 */
export async function getManualSections(): Promise<ManualSection[]> {
  const raw = readManualFile();
  const sectionRegex = /^## (.+)$/gm;
  const sections: ManualSection[] = [];

  const matches = [...raw.matchAll(sectionRegex)];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const rawTitle = match[1].trim();

    // Extract custom ID if present: ## Title {#custom-id}
    const idMatch = rawTitle.match(/^(.+?)\s*\{#(.+?)\}$/);
    const title = idMatch ? idMatch[1].trim() : rawTitle;
    const id = idMatch ? idMatch[2] : slugify(title);

    const start = match.index! + match[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : raw.length;
    const markdown = raw.slice(start, end).trim();

    const result = await remark().use(html, { sanitize: false }).process(markdown);
    sections.push({ id, title, markdown, html: String(result) });
  }

  return sections;
}

/**
 * Get the full manual as plain text for the chat system prompt.
 */
export function getManualAsText(): string {
  const raw = readManualFile();
  return raw.replace(/ \{#.+?\}/g, "");
}
