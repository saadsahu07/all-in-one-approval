import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/blog-title-generator")({
  head: () => toolHead("content-creation", "blog-title-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="blog-title-generator"
      taskId="blog-title"
      buttonLabel="Generate Titles"
      intro="Generate 10 SEO-friendly, click-worthy blog titles. Every title under 65 characters, primary keyword front-loaded."
      howTo={[
        "Enter your blog topic (specific beats vague).",
        "Optionally add your primary keyword for SEO.",
        "Click Generate and copy the strongest title into your CMS.",
      ]}
      splitMode="numbered"
      fields={[
        { name: "topic", label: "Blog topic", kind: "textarea", rows: 3, placeholder: "e.g. How to price freelance web design", required: true },
        { name: "keyword", label: "Primary keyword (optional)", kind: "input", placeholder: "e.g. freelance pricing" },
      ]}
    />
  );
}