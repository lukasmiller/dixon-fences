import { use } from "react";
import { notFound } from "next/navigation";
import CmsPageShell from "../components/cms-page-shell";
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

  return (
    <CmsPageShell title={page.title} subtitle={page.subtitle} body={page.body} currentPath={`/${slug}`}>
      <div className="extra_wrapper">
        <p className="text-lg leading-8 text-zinc-700">This section is driven by Decap CMS content.</p>
      </div>
    </CmsPageShell>
  );
}
