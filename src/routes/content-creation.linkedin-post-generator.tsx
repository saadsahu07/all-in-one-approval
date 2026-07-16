import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/linkedin-post-generator")({
  head: () => toolHead("content-creation", "linkedin-post-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="linkedin-post-generator"
      taskId="linkedin-post"
      buttonLabel="Generate Posts"
      intro="Write 3 LinkedIn posts with strong hooks that survive the 3-line preview cut. Short paragraphs, one clear ask, max 3 hashtags."
      howTo={[
        "Enter your topic — specific insight beats vague category.",
        "Pick an angle — insight, story, contrarian, or lesson.",
        "Click Generate and rewrite 2-3 words in each so it sounds like you.",
      ]}
      splitMode="separator"
      fields={[
        { name: "topic", label: "Topic", kind: "textarea", rows: 3, placeholder: "e.g. Why most startups pick the wrong first hire", required: true },
        { name: "angle", label: "Angle", kind: "select", options: [
          { value: "insight", label: "Insight" },
          { value: "story", label: "Story" },
          { value: "contrarian", label: "Contrarian" },
          { value: "lesson", label: "Lesson" },
        ] },
      ]}
    />
  );
}