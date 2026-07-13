import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search as SearchIcon } from "lucide-react";
import { allTools, categories } from "@/lib/tools";
import { Input } from "@/components/ui-primitives";

const schema = z.object({ q: fallback(z.string(), "").default("") });

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(schema),
  head: () => ({
    meta: [
      { title: "Search tools — ToolsHive" },
      { name: "description", content: "Search 50 free online tools for text, images, PDFs, developers, and calculators." },
      { property: "og:title", content: "Search tools — ToolsHive" },
      { property: "og:description", content: "Search 50 free online tools for text, images, PDFs, developers, and calculators." },
      { property: "og:url", content: "https://all-in-one-approval.lovable.app/search" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/search" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const query = q.trim().toLowerCase();
  const matches = query
    ? allTools.filter((t) =>
        t.name.toLowerCase().includes(query) ||
        t.short.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query) ||
        t.slug.includes(query),
      )
    : allTools;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-serif text-3xl font-bold sm:text-4xl">Search tools</h1>
      <p className="mt-2 text-muted-foreground">Find any of the 50 tools by name, keyword, or category.</p>

      <div className="relative mt-6">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoFocus
          value={q}
          onChange={(e) => navigate({ search: { q: e.target.value }, replace: true })}
          placeholder="Try 'pdf', 'json', 'bmi', 'compress'…"
          className="pl-9"
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        {query ? `${matches.length} result${matches.length === 1 ? "" : "s"} for "${q}"` : `Showing all ${matches.length} tools`}
      </p>

      {matches.length === 0 ? (
        <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
          <p className="font-medium">No tools match that search.</p>
          <p className="mt-1 text-sm text-muted-foreground">Try a shorter or different keyword.</p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {matches.map((t) => {
            const cat = categories.find((c) => c.slug === t.category);
            return (
              <li key={t.path}>
                <Link
                  to={t.path as "/"}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium">{t.name}</span>
                    <span className="block truncate text-sm text-muted-foreground">{t.short}</span>
                    <span className="mt-1 inline-block text-xs uppercase tracking-wide text-accent">{cat?.name}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}