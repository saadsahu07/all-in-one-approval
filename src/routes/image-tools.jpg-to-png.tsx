import { createFileRoute } from "@tanstack/react-router";
import { ImageConverter } from "@/components/image-converter";

export const Route = createFileRoute("/image-tools/jpg-to-png")({
  head: () => ({
    meta: [
      { title: "JPG to PNG Converter — Free Online | ToolHive" },
      { name: "description", content: "Convert JPG photos to lossless PNG format in your browser. Free, fast, and private — no upload required." },
      { property: "og:title", content: "JPG to PNG Converter | ToolHive" },
      { property: "og:description", content: "Convert JPG photos to PNG format, free and private." },
    ],
  }),
  component: () => (
    <ImageConverter
      toolSlug="jpg-to-png"
      from="jpg"
      to="png"
      intro="Convert JPG images to PNG format. PNG is lossless, so no further quality is lost, and it supports transparency for future edits."
    />
  ),
});