import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/tweet-generator")({
  head: () => toolHead("content-creation", "tweet-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="tweet-generator"
      taskId="tweet-generator"
      buttonLabel="Generate Tweets"
      intro="Generate 5 shareable tweets under 280 characters from any topic. Varied formats: hook, hot take, question, mini-list, story."
      howTo={[
        "Enter your tweet topic (specific insights beat vague ones).",
        "Pick a style — engaging, professional, witty, or bold.",
        "Click Generate and copy the winner into X, Threads, or Bluesky.",
      ]}
      splitMode="separator"
      fields={[
        { name: "topic", label: "Tweet topic", kind: "textarea", rows: 3, placeholder: "e.g. Why most freelancers underprice their consulting", required: true },
        { name: "style", label: "Style", kind: "select", options: [
          { value: "engaging", label: "Engaging" },
          { value: "professional", label: "Professional" },
          { value: "witty", label: "Witty" },
          { value: "bold", label: "Bold" },
        ] },
      ]}
    />
  );
}