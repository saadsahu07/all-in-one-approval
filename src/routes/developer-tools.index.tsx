import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/developer-tools/")({
  head: () => ({
    meta: [
      { title: "Free Developer Tools — JSON, Base64, Minifiers | ToolHarbor" },
      { name: "description", content: "10 free developer tools: JSON formatter and validator, Base64 and URL encoders, HTML/CSS/JS minifiers, and a password generator." },
      { property: "og:title", content: "Free Developer Tools | ToolHarbor" },
      { property: "og:description", content: "Format JSON, encode Base64 and URLs, minify code, and generate passwords." },
    ],
  }),
  component: () => <CategoryPage slug="developer-tools" />,
});