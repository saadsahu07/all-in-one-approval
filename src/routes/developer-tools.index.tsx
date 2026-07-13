import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import ogCover from "@/assets/og-cover.jpg";
const OG = `https://all-in-one-approval.lovable.app${ogCover}`;

export const Route = createFileRoute("/developer-tools/")({
  head: () => ({
    meta: [
      { title: "Free Developer Tools — JSON, Base64, Minifiers | ToolsHive" },
      { name: "description", content: "10 free developer tools: JSON formatter and validator, Base64 and URL encoders, HTML/CSS/JS minifiers, and a password generator." },
      { property: "og:title", content: "Free Developer Tools | ToolsHive" },
      { property: "og:description", content: "Format JSON, encode Base64 and URLs, minify code, and generate passwords." },
      { property: "og:url", content: "https://all-in-one-approval.lovable.app/developer-tools" },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/developer-tools" }],
  }),
  component: () => <CategoryPage slug="developer-tools" />,
});