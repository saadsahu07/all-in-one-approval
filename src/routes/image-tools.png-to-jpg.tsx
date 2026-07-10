import { createFileRoute } from "@tanstack/react-router";
import { ImageConverter } from "@/components/image-converter";

export const Route = createFileRoute("/image-tools/png-to-jpg")({
  head: () => ({
    meta: [
      { title: "PNG to JPG Converter — Free Online | ToolHarbor" },
      { name: "description", content: "Convert PNG images to smaller JPG files in your browser. Transparent areas become white. Free and private." },
      { property: "og:title", content: "PNG to JPG Converter | ToolHarbor" },
      { property: "og:description", content: "Convert PNG images to smaller JPG files, free and private." },
    ],
  }),
  component: () => (
    <ImageConverter
      toolSlug="png-to-jpg"
      from="png"
      to="jpeg"
      intro="Convert PNG images to JPG for much smaller file sizes. Transparent areas are filled with white, since JPG does not support transparency."
    />
  ),
});