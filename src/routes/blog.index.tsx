import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { postsMeta as posts } from "@/lib/blog-meta";

const SITE = "https://all-in-one-approval.lovable.app";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: zodValidator(searchSchema),
  head: () => {
    const title = "ToolsHive Blog — Make Money Online, Productivity & Tech Guides";
    const description =
      "Micro-guides on making money online, freelancing, productivity, tech tips, and career growth — the blog side of ToolsHive's free tools + blog site.";
    const url = `${SITE}/blog`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "online tools, blog, guides, text tools, image tools, PDF tools, developer tools, calculators" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "ToolsHive" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "ToolsHive Blog",
            description,
            url,
            publisher: { "@type": "Organization", name: "ToolsHive" },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${SITE}/blog/${p.slug}`,
              articleSection: p.category,
              description: p.excerpt,
            })),
          }),
        },
      ],
    };
  },
  component: BlogIndex,
});

const ALL_CATEGORIES = Array.from(new Set(posts.map((p) => p.category)));
const PAGE_SIZE = 8;

function BlogIndex() {
  const { q, category } = Route.useSearch();
  const navigate = useNavigate({ from: "/blog/" });
  const query = q.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      posts.filter((p) => {
        if (category && p.category !== category) return false;
        if (!query) return true;
        return (
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.slug.toLowerCase().includes(query)
        );
      }),
    [query, category],
  );

  const [visible, setVisible] = useState(PAGE_SIZE);
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, category]);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (visible >= filtered.length) return;
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible((v) => Math.min(v + PAGE_SIZE, filtered.length));
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, filtered.length]);

  const shown = filtered.slice(0, visible);

  const setQ = (value: string) => navigate({ search: { q: value, category } });
  const setCategory = (value: string) => navigate({ search: { q, category: value } });
  const clearAll = () => navigate({ search: { q: "", category: "" } });
  const hasFilters = Boolean(query || category);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">The ToolsHive Blog</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Short, practical guides on making money online, productivity, tech tips, and careers — the blog side of our free tools + blog site.
        </p>
      </header>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search posts by title, keyword, or tool…"
            className="h-11 w-full rounded-md border border-input bg-background pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setCategory("")}
            className={
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors " +
              (category === ""
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground")
            }
          >
            All ({posts.length})
          </button>
          {ALL_CATEGORIES.map((c) => {
            const count = posts.filter((p) => p.category === c).length;
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(active ? "" : c)}
                className={
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors " +
                  (active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground")
                }
              >
                {c} ({count})
              </button>
            );
          })}
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="ml-auto text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Clear filters
            </button>
          )}
        </div>

        <p className="text-sm text-muted-foreground">
          {filtered.length === 0
            ? `No guides`
            : `Showing ${Math.min(visible, filtered.length)} of ${filtered.length} guide${filtered.length === 1 ? "" : "s"}`}
        </p>
      </div>

      {filtered.length === 0 && (
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <p className="text-lg font-medium">No guides match your filters.</p>
          <p className="mt-2 text-sm text-muted-foreground">Try a different keyword or clear the category filter.</p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Reset
          </button>
        </div>
      )}

      {filtered.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {shown.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary/50"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-primary">{p.category}</p>
                <h2 className="mt-1 font-serif text-lg font-semibold group-hover:text-primary">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-3 text-xs text-muted-foreground">{p.readingMinutes} min read</p>
              </Link>
            ))}
          </div>
          {visible < filtered.length ? (
            <div ref={sentinelRef} className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, filtered.length))}
                className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground"
              >
                Load more ({filtered.length - visible} left)
              </button>
            </div>
          ) : (
            filtered.length > PAGE_SIZE && (
              <p className="mt-8 text-center text-sm text-muted-foreground">You've reached the end.</p>
            )
          )}
        </>
      )}
    </div>
  );
}