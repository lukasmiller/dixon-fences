import fs from "fs";
import path from "path";

export type PageContent = {
  slug: string;
  title: string;
  subtitle?: string;
  body: string;
};

const contentDirectory = path.join(process.cwd(), "content");

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!match) {
    return { title: "Dixon Fences", subtitle: "", body: markdown.trim() };
  }

  const [, frontmatter, body] = match;
  const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
  const subtitleMatch = frontmatter.match(/^subtitle:\s*(.+)$/m);

  return {
    title: titleMatch?.[1]?.trim() || "Dixon Fences",
    subtitle: subtitleMatch?.[1]?.trim() || "",
    body: body.trim(),
  };
}

export function getPageContent(slug: string): PageContent | null {
  const filePath = path.join(contentDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdown = fs.readFileSync(filePath, "utf8");
  const { title, subtitle, body } = parseFrontmatter(markdown);

  return {
    slug,
    title,
    subtitle,
    body,
  };
}
