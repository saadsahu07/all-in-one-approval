import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ImageConverter } from "@/components/image-converter";

export const Route = createFileRoute("/image-tools/jpg-to-png")({
  head: () => toolHead("image-tools", "jpg-to-png"),
  component: () => (
    <ImageConverter
      toolSlug="jpg-to-png"
      from="jpg"
      to="png"
      intro="Convert JPG images to PNG format. PNG is lossless, so no further quality is lost, and it supports transparency for future edits."
    />
  ),
});