import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact ToolHarbor" },
    { name: "description", content: "Get in touch with the ToolHarbor team for support, feedback, or partnership inquiries." },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">Contact us</h1>
      <p className="mt-4 text-muted-foreground">We'd love to hear from you. For support, feedback, bug reports, or partnership inquiries, please reach out using the email below and we'll respond as soon as we can.</p>
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
        <p className="mt-1 font-mono text-lg">hello@toolharbor.app</p>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">We aim to reply within 2 business days.</p>
    </article>
  );
}