import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { getPageContent } from "../lib/content";

export async function generateStaticParams() {
  return [
    { slug: "about" },
    { slug: "services" },
    { slug: "projects" },
    { slug: "faq" },
    { slug: "admin" },
  ];
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const page = getPageContent(slug);

  if (!page) {
    notFound();
  }

  const paragraphs = page.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link href="/" className="text-amber-700 hover:text-amber-800">
            Home
          </Link>
          <Link href="/about" className="text-amber-700 hover:text-amber-800">
            About Us
          </Link>
          <Link href="/services" className="text-amber-700 hover:text-amber-800">
            Services
          </Link>
          <Link href="/projects" className="text-amber-700 hover:text-amber-800">
            Projects
          </Link>
          <Link href="/faq" className="text-amber-700 hover:text-amber-800">
            FAQ
          </Link>
        </nav>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Dixon Fences
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.title}
          </h1>
          {page.subtitle ? (
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {page.subtitle}
            </p>
          ) : null}
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
