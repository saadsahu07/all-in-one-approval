import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/ad-copy-generator")({
  head: () => toolHead("content-creation", "ad-copy-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="ad-copy-generator"
      taskId="ad-copy"
      buttonLabel="Generate Ad Copy"
      intro="Generate 5 complete ad variants — headline, primary text, and CTA button — for Facebook, Instagram, or Google Ads."
      howTo={[
        "Enter your product in one line.",
        "Add the core benefit — the most compelling thing it does.",
        "Pick the platform and click Generate — paste all 5 into Ads Manager.",
      ]}
      splitMode="separator"
      fields={[
        { name: "product", label: "Product", kind: "input", placeholder: "e.g. AI resume builder for tech job seekers", required: true },
        { name: "benefit", label: "Core benefit (optional)", kind: "input", placeholder: "e.g. Land interviews 3× faster with ATS-optimized resumes" },
        { name: "platform", label: "Platform", kind: "select", options: [
          { value: "facebook", label: "Facebook" },
          { value: "instagram", label: "Instagram" },
          { value: "google", label: "Google Ads" },
        ] },
      ]}
    />
  );
}