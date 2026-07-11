import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Blog — Guides for Every ToolHarbor Tool" },
    { name: "description", content: "In-depth guides, tips, and use cases for our free online text, image, PDF, developer, and calculator tools." },
    { property: "og:title", content: "ToolHarbor Blog" },
    { property: "og:description", content: "Long-form guides for 25+ free online tools." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: BlogIndex,
});

function BlogIndex() {
  const byCategory = posts.reduce<Record<string, typeof posts>>((acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {});
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">The ToolHarbor Blog</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Deep-dive guides for our most popular tools — how they work, when to use them, and how to get the best results.
        </p>
      </header>
      {Object.entries(byCategory).map(([cat, items]) => (
        <section key={cat} className="mb-12">
          <h2 className="mb-4 font-serif text-2xl font-bold">{cat}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary/50"
              >
                <h3 className="font-serif text-lg font-semibold group-hover:text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-3 text-xs text-muted-foreground">{p.readingMinutes} min read</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}