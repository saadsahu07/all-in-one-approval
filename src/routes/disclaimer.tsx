import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [
    { title: "Disclaimer — ToolHive" },
    { name: "description", content: "General disclaimer about the accuracy and use of ToolHive tools and content." },
    { property: "og:title", content: "Disclaimer — ToolHive" },
    { property: "og:description", content: "General disclaimer about the accuracy and use of ToolHive tools and content." },
    { property: "og:url", content: "https://all-in-one-approval.lovable.app/disclaimer" },
  ],
  links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 text-muted-foreground">
      <h1 className="font-serif text-4xl font-bold text-foreground">Disclaimer</h1>
      <p className="mt-4">The information and tools on ToolHive are provided for general informational and productivity purposes only. While we make every effort to ensure accuracy, we make no warranties of any kind, express or implied, about the completeness, accuracy, or reliability of any output.</p>
      <p className="mt-4">Tools such as the BMI calculator, EMI calculator, currency converter, grammar checker, and AI summarizer produce estimates or automated results and should not be relied on for medical, legal, financial, or professional decisions. Always consult a qualified professional for advice specific to your situation.</p>
      <p className="mt-4">Any action you take based on information from this site is strictly at your own risk. ToolHive is not liable for any losses or damages arising from your use of the tools.</p>
    </article>
  );
}