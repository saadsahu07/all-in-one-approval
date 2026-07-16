import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/blog-outline-generator")({
  head: () => toolHead("content-creation", "blog-outline-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="blog-outline-generator"
      taskId="blog-outline"
      buttonLabel="Generate Outline"
      intro="Turn any blog title into a full H2/H3 outline with intro hook, sections, and 3 suggested FAQs. Start writing with the structural work done."
      howTo={[
        "Paste your blog post title.",
        "Optionally describe your target audience for sharper framing.",
        "Click Generate and copy the full outline into your editor.",
      ]}
      splitMode="raw"
      fields={[
        { name: "title", label: "Blog title", kind: "input", placeholder: "e.g. 7 mistakes new freelancers make when pricing their work", required: true },
        { name: "audience", label: "Target audience (optional)", kind: "input", placeholder: "e.g. first-year freelance designers" },
      ]}
    />
  );
}