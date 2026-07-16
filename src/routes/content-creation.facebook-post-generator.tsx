import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/facebook-post-generator")({
  head: () => toolHead("content-creation", "facebook-post-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="facebook-post-generator"
      taskId="facebook-post"
      buttonLabel="Generate Posts"
      intro="Write 5 engaging Facebook posts under 400 characters with a conversational hook and one clear CTA."
      howTo={[
        "Enter your post topic in one line.",
        "Pick a tone — friendly, professional, witty, or bold.",
        "Click Generate and copy the post whose CTA matches your goal.",
      ]}
      splitMode="separator"
      fields={[
        { name: "topic", label: "Post topic", kind: "textarea", rows: 3, placeholder: "e.g. Our new bakery opens next Saturday", required: true },
        { name: "tone", label: "Tone", kind: "select", options: [
          { value: "friendly", label: "Friendly" },
          { value: "professional", label: "Professional" },
          { value: "witty", label: "Witty" },
          { value: "bold", label: "Bold" },
        ] },
      ]}
    />
  );
}