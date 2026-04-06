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

/**
 * Parse the markdown file into sections split on ## headings.
 * Expects format: ## Title {#id}
 */
export async function getManualSections(): Promise<ManualSection[]> {
  const raw = readManualFile();
  const sectionRegex = /^## (.+?) \{#(.+?)\}$/gm;
  const sections: ManualSection[] = [];

  const matches = [...raw.matchAll(sectionRegex)];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const title = match[1];
    const id = match[2];
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
  // Strip the {#id} markers and return clean markdown
  return raw.replace(/ \{#.+?\}/g, "");
}
