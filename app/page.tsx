import fs from "fs";
import Link from "next/link";
import path from "path";

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
  const paragraphs = body.split(/\n\s*\n/).filter(Boolean);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link href="/about" className="rounded-full bg-amber-700 px-4 py-2 text-white hover:bg-amber-800">
            About Us
          </Link>
          <Link href="/services" className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-700 hover:border-amber-700 hover:text-amber-700">
            Services
          </Link>
          <Link href="/projects" className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-700 hover:border-amber-700 hover:text-amber-700">
            Projects
          </Link>
          <Link href="/faq" className="rounded-full border border-zinc-300 px-4 py-2 text-zinc-700 hover:border-amber-700 hover:text-amber-700">
            FAQ
          </Link>
        </nav>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Decap CMS content
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Trusted fencing installation, repairs, and custom projects for homes and businesses.
          </p>
        </div>

        <article className="space-y-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </main>
  );
}
