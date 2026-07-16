import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/instagram-caption-generator")({
  head: () => toolHead("content-creation", "instagram-caption-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="instagram-caption-generator"
      taskId="instagram-caption"
      buttonLabel="Generate Captions"
      intro="Write 5 scroll-stopping Instagram captions from any topic. Pick a tone and copy the winner straight into the Instagram composer."
      howTo={[
        "Enter your post topic (e.g. '5 iPhone shortcuts that save an hour a week').",
        "Pick a tone — friendly, professional, witty, inspirational, or bold.",
        "Click Generate and copy your favorite caption plus its hashtags.",
      ]}
      splitMode="separator"
      fields={[
        { name: "topic", label: "Post topic", kind: "textarea", rows: 3, placeholder: "e.g. 5 iPhone shortcuts that save an hour a week", required: true },
        { name: "tone", label: "Tone", kind: "select", options: [
          { value: "friendly", label: "Friendly" },
          { value: "professional", label: "Professional" },
          { value: "witty", label: "Witty" },
          { value: "inspirational", label: "Inspirational" },
          { value: "bold", label: "Bold" },
        ] },
      ]}
    />
  );
}