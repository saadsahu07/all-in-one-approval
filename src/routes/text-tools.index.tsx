import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import ogCover from "@/assets/og-cover.jpg";
const OG = `https://all-in-one-approval.lovable.app${ogCover}`;

export const Route = createFileRoute("/text-tools/")({
  head: () => ({
    meta: [
      { title: "Free Text Tools — Summarizer, Counter & More | ToolsHive" },
      { name: "description", content: "10 free text tools: AI summarizer, grammar checker, paraphraser, word counter, case converter, and more." },
      { property: "og:title", content: "Free Text Tools | ToolsHive" },
      { property: "og:description", content: "10 free text tools: AI summarizer, grammar checker, paraphraser, word counter, and more." },
      { property: "og:url", content: "https://all-in-one-approval.lovable.app/text-tools" },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/text-tools" }],
  }),
  component: () => <CategoryPage slug="text-tools" />,
});