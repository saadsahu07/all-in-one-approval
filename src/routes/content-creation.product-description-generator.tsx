import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/product-description-generator")({
  head: () => toolHead("content-creation", "product-description-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="product-description-generator"
      taskId="product-description"
      buttonLabel="Generate Description"
      intro="Write a conversion-focused product description with headline, benefits, and bullet list. Under 200 words — ready for Shopify, Etsy, or Amazon."
      howTo={[
        "Enter your product name.",
        "List 3-6 key features (materials, size, use case).",
        "Optionally add your target audience and click Generate.",
      ]}
      splitMode="raw"
      fields={[
        { name: "product", label: "Product name", kind: "input", placeholder: "e.g. Insulated 12oz Coffee Tumbler", required: true },
        { name: "features", label: "Key features (optional)", kind: "textarea", rows: 3, placeholder: "e.g. Double-walled stainless steel, keeps drinks hot 12 hours / cold 24 hours, fits car cup holders" },
        { name: "audience", label: "Audience (optional)", kind: "input", placeholder: "e.g. remote workers, commuters, outdoor lovers" },
      ]}
    />
  );
}