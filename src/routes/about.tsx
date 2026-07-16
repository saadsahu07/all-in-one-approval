import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About ToolsHive — Free Online Tools" },
    { name: "description", content: "ToolsHive is a free suite of 60 online tools for text, images, PDFs, developers, calculators, and content creation." },
    { property: "og:title", content: "About ToolsHive — Free Online Tools" },
    { property: "og:description", content: "ToolsHive is a free suite of 60 online tools for text, images, PDFs, developers, calculators, and content creation." },
    { property: "og:url", content: "https://toolshive.tools/about" },
  ],
  links: [{ rel: "canonical", href: "https://toolshive.tools/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-4xl font-bold">About ToolsHive</h1>
      <p className="mt-4 text-muted-foreground">ToolsHive is a growing collection of 120+ free online tools built for students, writers, marketers, creators, and developers. Our goal is simple: give everyone fast, reliable, no-signup utilities that respect their privacy.</p>
      <h2 className="mt-8 text-2xl font-bold">Privacy first</h2>
      <p className="mt-2 text-muted-foreground">Almost every tool runs entirely inside your browser. Your files never leave your device. A small number of AI-powered tools send text or images to a secure AI gateway for processing and do not retain them.</p>
      <h2 className="mt-8 text-2xl font-bold">What we offer</h2>
      <ul className="mt-2 list-disc pl-6 text-muted-foreground">
        <li>10 text tools including AI summarizer, grammar checker, and paraphraser.</li>
        <li>10 image tools for compression, resizing, format conversion, and QR codes.</li>
        <li>10 PDF tools for merging, splitting, converting, and stamping page numbers.</li>
        <li>10 developer tools for JSON, Base64, URL encoding, and minification.</li>
        <li>10 everyday calculators and unit converters.</li>
        <li>AI-powered content creation tools including a YouTube tag generator.</li>
      </ul>
      <p className="mt-6 text-muted-foreground">Questions or feedback? Visit our contact page.</p>
    </article>
  );
}