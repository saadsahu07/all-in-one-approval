import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/text-tools/")({
  head: () => ({
    meta: [
      { title: "Free Text Tools — Summarizer, Counter & More | ToolHarbor" },
      { name: "description", content: "10 free text tools: AI summarizer, grammar checker, paraphraser, word counter, case converter, and more." },
      { property: "og:title", content: "Free Text Tools | ToolHarbor" },
      { property: "og:description", content: "10 free text tools: AI summarizer, grammar checker, paraphraser, word counter, and more." },
    ],
  }),
  component: () => <CategoryPage slug="text-tools" />,
});