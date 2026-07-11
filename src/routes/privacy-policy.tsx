import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — ToolHive" },
    { name: "description", content: "How ToolHive handles data, cookies, analytics, and advertising." },
  ]}),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 text-muted-foreground">
      <h1 className="font-serif text-4xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className="mt-8 text-2xl font-bold text-foreground">Overview</h2>
      <p className="mt-2">ToolHive respects your privacy. Most of our tools run entirely in your browser and do not upload your files or text to any server.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Data we process</h2>
      <p className="mt-2">For AI-powered tools (summarizer, grammar checker, paraphraser, background remover), the text or image you submit is transmitted to a secure AI provider solely to generate a result. We do not retain your inputs after processing.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Cookies and analytics</h2>
      <p className="mt-2">We may use privacy-friendly analytics to understand aggregate usage. We do not use cookies to personally identify visitors.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Advertising</h2>
      <p className="mt-2">If we display ads, third-party vendors including Google may use cookies to serve ads based on prior visits to this or other sites. You can opt out of personalized advertising by visiting Google's Ads Settings.</p>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Contact</h2>
      <p className="mt-2">Questions about this policy? Email empiremasteryai@gmail.com.</p>
    </article>
  );
}