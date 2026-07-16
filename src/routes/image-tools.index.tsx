import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import ogCover from "@/assets/og-cover.jpg";
const OG = `https://toolshive.tools${ogCover}`;

export const Route = createFileRoute("/image-tools/")({
  head: () => ({
    meta: [
      { title: "Free Image Tools — Compress, Resize, Convert | ToolsHive" },
      { name: "description", content: "10 free image tools: compressor, resizer, JPG/PNG converters, cropper, AI background remover, watermark, and QR codes." },
      { property: "og:title", content: "Free Image Tools | ToolsHive" },
      { property: "og:description", content: "Compress, resize, convert, crop, and edit images free in your browser." },
      { property: "og:url", content: "https://toolshive.tools/image-tools" },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "https://toolshive.tools/image-tools" }],
  }),
  component: () => <CategoryPage slug="image-tools" />,
});