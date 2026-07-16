import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/email-subject-line-generator")({
  head: () => toolHead("content-creation", "email-subject-line-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="email-subject-line-generator"
      taskId="email-subject"
      buttonLabel="Generate Subject Lines"
      intro="Generate 10 high open-rate email subject lines under 60 characters. Curiosity, benefit, question, urgency — no spam triggers."
      howTo={[
        "Enter your email topic in one line.",
        "Optionally add your audience for sharper subjects.",
        "Click Generate and split-test the top two on your list.",
      ]}
      splitMode="numbered"
      fields={[
        { name: "topic", label: "Email topic", kind: "textarea", rows: 3, placeholder: "e.g. New pricing for existing customers", required: true },
        { name: "audience", label: "Audience (optional)", kind: "input", placeholder: "e.g. existing customers, first-time buyers, founders" },
      ]}
    />
  );
}