import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import ogCover from "@/assets/og-cover.jpg";
const OG = `https://toolshive.tools${ogCover}`;

export const Route = createFileRoute("/content-creation/")({
  head: () => ({
    meta: [
      { title: "Free Content Creation Tools — AI for Creators | ToolsHive" },
      { name: "description", content: "AI-powered content creation tools for creators and marketers. Generate SEO-optimized YouTube tags and more — free, no signup." },
      { property: "og:title", content: "Free Content Creation Tools | ToolsHive" },
      { property: "og:description", content: "AI tools to plan, script, and optimize your content — free and instant." },
      { property: "og:url", content: "https://toolshive.tools/content-creation" },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "https://toolshive.tools/content-creation" }],
  }),
  component: () => <CategoryPage slug="content-creation" />,
});