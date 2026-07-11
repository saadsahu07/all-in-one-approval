import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Service — ToolsHive" },
    { name: "description", content: "Terms governing your use of the ToolsHive website and tools." },
    { property: "og:title", content: "Terms of Service — ToolsHive" },
    { property: "og:description", content: "Terms governing your use of the ToolsHive website and tools." },
    { property: "og:url", content: "https://all-in-one-approval.lovable.app/terms" },
  ],
  links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 text-muted-foreground">
      <h1 className="font-serif text-4xl font-bold text-foreground">Terms of Service</h1>
      <p className="mt-2 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className="mt-8 text-2xl font-bold text-foreground">Acceptance</h2>
      <p className="mt-2">By using ToolsHive, you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Acceptable use</h2>
      <p className="mt-2">You may use our tools for lawful personal and commercial purposes. You must not use them to process content that is illegal, infringes on others' rights, or contains malware.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">No warranty</h2>
      <p className="mt-2">The tools are provided "as is" without warranties of any kind. We do not guarantee availability, accuracy, or fitness for a particular purpose.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Limitation of liability</h2>
      <p className="mt-2">To the fullest extent permitted by law, ToolsHive is not liable for any indirect, incidental, or consequential damages resulting from your use of the site.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Changes</h2>
      <p className="mt-2">We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.</p>
    </article>
  );
}