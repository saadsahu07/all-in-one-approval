import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/youtube-shorts-script-generator")({
  head: () => toolHead("content-creation", "youtube-shorts-script-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="youtube-shorts-script-generator"
      taskId="youtube-shorts-script"
      buttonLabel="Generate Script"
      intro="Turn any topic into a complete 30-45 second YouTube Shorts script with hook, body, payoff, and CTA — ready to film."
      howTo={[
        "Enter your video topic in one line.",
        "Click Generate — the full script appears with labeled sections.",
        "Time the hook out loud — if over 3 seconds, cut a word before filming.",
      ]}
      splitMode="raw"
      fields={[
        { name: "topic", label: "Video topic", kind: "textarea", rows: 3, placeholder: "e.g. 3 iPhone settings you should turn off right now", required: true },
      ]}
    />
  );
}