import { getContent } from "@/lib/content";

export default function Home() {
  const { data, content } =
    getContent("home.md");

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">
        {data.title}
      </h1>

      <p className="mt-4 text-xl">
        {data.subtitle}
      </p>

      <p className="mt-6">
        {content}
      </p>
    </main>
  );
}