import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/image-tools/")({
  head: () => ({
    meta: [
      { title: "Free Image Tools — Compress, Resize, Convert | ToolHive" },
      { name: "description", content: "10 free image tools: compressor, resizer, JPG/PNG converters, cropper, AI background remover, watermark, and QR codes." },
      { property: "og:title", content: "Free Image Tools | ToolHive" },
      { property: "og:description", content: "Compress, resize, convert, crop, and edit images free in your browser." },
    ],
  }),
  component: () => <CategoryPage slug="image-tools" />,
});