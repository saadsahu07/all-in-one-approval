import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/meta-description-generator")({
  head: () => toolHead("content-creation", "meta-description-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="meta-description-generator"
      taskId="meta-description"
      buttonLabel="Generate Descriptions"
      intro="Write 5 SEO meta descriptions (140-160 characters) for any page title. Boost click-through rate from Google search results."
      howTo={[
        "Enter your page title exactly as it appears in the browser tab.",
        "Optionally add your primary keyword and a one-sentence content summary.",
        "Click Generate and paste the winner into your CMS meta field.",
      ]}
      splitMode="numbered"
      fields={[
        { name: "title", label: "Page title", kind: "input", placeholder: "e.g. Free CSS Minifier — Compress CSS Online", required: true },
        { name: "keyword", label: "Primary keyword (optional)", kind: "input", placeholder: "e.g. css minifier" },
        { name: "content", label: "Content summary (optional)", kind: "textarea", rows: 2, placeholder: "e.g. Removes whitespace, comments, and redundant code from CSS." },
      ]}
    />
  );
}