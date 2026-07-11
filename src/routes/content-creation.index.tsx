import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/content-creation/")({
  head: () => ({
    meta: [
      { title: "Free Content Creation Tools — AI for Creators | ToolHive" },
      { name: "description", content: "AI-powered content creation tools for creators and marketers. Generate SEO-optimized YouTube tags and more — free, no signup." },
      { property: "og:title", content: "Free Content Creation Tools | ToolHive" },
      { property: "og:description", content: "AI tools to plan, script, and optimize your content — free and instant." },
    ],
  }),
  component: () => <CategoryPage slug="content-creation" />,
});