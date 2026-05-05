import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/i18n/routing";

export type BlogBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  translationKey: string;
  relatedTopic?: string;
  body: BlogBlock[];
  excerpt: string;
}

interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags?: string;
  translationKey?: string;
  relatedTopic?: string;
}

const contentRoot = path.join(process.cwd(), "src", "content", "blog");

function parseFrontmatter(source: string): { frontmatter: BlogFrontmatter; body: string } {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Blog post is missing frontmatter.");
  }

  const frontmatter = match[1].split("\n").reduce<Record<string, string>>((acc, line) => {
    const separator = line.indexOf(":");
    if (separator === -1) return acc;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^"|"$/g, "");
    acc[key] = value;
    return acc;
  }, {});

  if (!frontmatter.title || !frontmatter.description || !frontmatter.date) {
    throw new Error("Blog post frontmatter requires title, description, and date.");
  }

  return {
    frontmatter: frontmatter as unknown as BlogFrontmatter,
    body: match[2],
  };
}

function parseMarkdownBody(body: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "paragraph", text: paragraph.join(" ").trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    blocks.push({ type: "list", items: list });
    list = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 3, text: line.slice(4).trim() });
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 2, text: line.slice(3).trim() });
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2).trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function readPost(locale: Locale, filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(contentRoot, locale, filename), "utf8");
  const { frontmatter, body } = parseFrontmatter(source);
  const blocks = parseMarkdownBody(body);
  const firstParagraph = blocks.find((block) => block.type === "paragraph");

  return {
    slug,
    locale,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    updated: frontmatter.updated,
    tags: frontmatter.tags
      ? frontmatter.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [],
    translationKey: frontmatter.translationKey ?? slug,
    relatedTopic: frontmatter.relatedTopic,
    body: blocks,
    excerpt: firstParagraph?.text ?? frontmatter.description,
  };
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  const localeDir = path.join(contentRoot, locale);
  return fs
    .readdirSync(localeDir)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => readPost(locale, filename))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(locale: Locale, slug: string) {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getBlogPostTranslations(translationKey: string) {
  return (["en", "es"] as const).reduce<Partial<Record<Locale, BlogPost>>>((acc, locale) => {
    const post = getBlogPosts(locale).find((item) => item.translationKey === translationKey);
    if (post) acc[locale] = post;
    return acc;
  }, {});
}

export function getBlogStaticParams() {
  return (["en", "es"] as const).flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({ locale, slug: post.slug }))
  );
}
