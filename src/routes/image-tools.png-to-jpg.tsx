import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ImageConverter } from "@/components/image-converter";

export const Route = createFileRoute("/image-tools/png-to-jpg")({
  head: () => toolHead("image-tools", "png-to-jpg"),
  component: () => (
    <ImageConverter
      toolSlug="png-to-jpg"
      from="png"
      to="jpeg"
      intro="Convert PNG images to JPG for much smaller file sizes. Transparent areas are filled with white, since JPG does not support transparency."
    />
  ),
});