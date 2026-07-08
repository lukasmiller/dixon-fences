import fs from "fs";
import path from "path";
import CmsPageShell from "./components/cms-page-shell";

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!match) {
    return { title: "Dixon Fences", body: markdown.trim() };
  }

  const [, frontmatter, body] = match;
  const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);

  return {
    title: titleMatch?.[1]?.trim() || "Dixon Fences",
    body: body.trim(),
  };
}

export default function Home() {
  const contentPath = path.join(process.cwd(), "content", "home.md");
  const markdown = fs.readFileSync(contentPath, "utf8");
  const { title, body } = parseFrontmatter(markdown);

  return (
    <CmsPageShell title={title} subtitle="Trusted fencing installation, repairs, and custom projects for homes and businesses." body={body} currentPath="/">
      <div className="extra_wrapper">
        <p className="text-lg leading-8 text-zinc-700">This content is managed through Decap CMS and rendered using the HTML template shell.</p>
      </div>
    </CmsPageShell>
  );
}
