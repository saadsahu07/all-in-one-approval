import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import ogCover from "@/assets/og-cover.jpg";
const OG = `https://toolshive.tools${ogCover}`;

export const Route = createFileRoute("/pdf-tools/")({
  head: () => ({
    meta: [
      { title: "Free PDF Tools — Merge, Split, Convert | ToolsHive" },
      { name: "description", content: "10 free PDF tools: merge, split, compress, rotate, add page numbers, and convert between PDF, Word, and JPG — all in your browser." },
      { property: "og:title", content: "Free PDF Tools | ToolsHive" },
      { property: "og:description", content: "Merge, split, compress, rotate, and convert PDF files free in your browser." },
      { property: "og:url", content: "https://toolshive.tools/pdf-tools" },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "https://toolshive.tools/pdf-tools" }],
  }),
  component: () => <CategoryPage slug="pdf-tools" />,
});