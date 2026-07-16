import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/slogan-generator")({
  head: () => toolHead("content-creation", "slogan-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="slogan-generator"
      taskId="slogan-generator"
      buttonLabel="Generate Slogans"
      intro="Generate 10 short, memorable slogans for any brand or product. Under 8 words each — no generic 'quality you can trust' filler."
      howTo={[
        "Enter your brand name.",
        "Add a one-line description of what the brand does.",
        "Pick a tone and click Generate — test the top 3 with real people.",
      ]}
      splitMode="numbered"
      fields={[
        { name: "brand", label: "Brand name", kind: "input", placeholder: "e.g. Northwind Coffee", required: true },
        { name: "description", label: "What it does (optional)", kind: "textarea", rows: 2, placeholder: "e.g. Small-batch coffee roasted weekly, shipped nationwide" },
        { name: "tone", label: "Tone", kind: "select", options: [
          { value: "modern", label: "Modern" },
          { value: "playful", label: "Playful" },
          { value: "professional", label: "Professional" },
          { value: "bold", label: "Bold" },
        ] },
      ]}
    />
  );
}