import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/pdf-tools/")({
  head: () => ({
    meta: [
      { title: "Free PDF Tools — Merge, Split, Convert | ToolHive" },
      { name: "description", content: "10 free PDF tools: merge, split, compress, rotate, add page numbers, and convert between PDF, Word, and JPG — all in your browser." },
      { property: "og:title", content: "Free PDF Tools | ToolHive" },
      { property: "og:description", content: "Merge, split, compress, rotate, and convert PDF files free in your browser." },
    ],
  }),
  component: () => <CategoryPage slug="pdf-tools" />,
});