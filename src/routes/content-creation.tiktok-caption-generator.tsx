import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/tiktok-caption-generator")({
  head: () => toolHead("content-creation", "tiktok-caption-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="tiktok-caption-generator"
      taskId="tiktok-caption"
      buttonLabel="Generate Captions"
      intro="Write 5 punchy TikTok captions with hooks and hashtags. Every caption under 150 characters — no mobile truncation, no filler."
      howTo={[
        "Enter your video topic in one line.",
        "Click Generate — 5 short captions with hashtags appear.",
        "Copy the caption whose hook matches your first frame.",
      ]}
      splitMode="separator"
      fields={[
        { name: "topic", label: "Video topic", kind: "textarea", rows: 3, placeholder: "e.g. How I learned Spanish in 3 months", required: true },
      ]}
    />
  );
}