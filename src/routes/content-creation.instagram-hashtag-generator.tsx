import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/instagram-hashtag-generator")({
  head: () => toolHead("content-creation", "instagram-hashtag-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="instagram-hashtag-generator"
      taskId="instagram-hashtag"
      buttonLabel="Generate Hashtags"
      intro="Get 30 relevant Instagram hashtags mixing broad, medium, and niche reach. Rotate sets across posts for real discoverability."
      howTo={[
        "Enter your topic or niche (e.g. 'sourdough baking').",
        "Click Generate Hashtags — a mix of broad, medium, and niche tags appears.",
        "Copy the whole set and paste into your caption or first comment.",
      ]}
      splitMode="hashtags"
      fields={[
        { name: "topic", label: "Topic or niche", kind: "input", placeholder: "e.g. sourdough baking", required: true },
      ]}
    />
  );
}