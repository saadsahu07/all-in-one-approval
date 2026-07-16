/**
 * `ToolShell` is the shared layout wrapping every individual tool page.
 * It renders the breadcrumbs, title, save-to-favorites button, lazy-loaded
 * SEO copy (intro / features / FAQs), JSON-LD schema, how-to steps, and
 * related-tools grid. The tool's own UI is passed in as `children` and
 * mounted inside an `ErrorBoundary` so a crash in one tool never breaks
 * the surrounding page.
 *
 * Also re-exports `CopyButton`, `downloadBlob`, and `downloadText` for
 * backwards compatibility with tool pages that imported them from here
 * before the helpers moved to `@/lib/dom-utils`.
 */
import { Link } from "@tanstack/react-router";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import { ChevronRight, Copy, Check, Star } from "lucide-react";
import { allTools, getCategory } from "@/lib/tools";
import { Button } from "@/components/ui-primitives";
import { loadToolSeo } from "@/lib/seo";
import type { ToolSeo } from "@/lib/seo/types";
import { useFavorites, trackRecent } from "@/lib/user-prefs";
import { ErrorBoundary } from "@/components/error-boundary";
import { renderMarkdown } from "@/lib/render-md";

// Canonical site origin, used to build absolute URLs for JSON-LD schema
// (search engines require absolute `url` / `item` values).
const SITE = "https://toolshive.tools";

/** Props passed by every tool route to render the shared shell. */
interface ToolShellProps {
  /** URL slug of the parent category, e.g. `"text-tools"`. */
  categorySlug: string;
  /** URL slug of the tool itself, e.g. `"word-counter"`. */
  toolSlug: string;
  /** Fallback intro paragraph shown before the lazy SEO shard loads. */
  intro: string;
  /** Ordered "how to use" steps rendered below the tool UI + emitted as
   *  `HowTo` JSON-LD for rich results in search. */
  howTo: string[];
  /** The tool's interactive UI. Wrapped in an `ErrorBoundary`. */
  children: ReactNode;
  /** Optional disclaimer / usage note rendered below the tool. */
  note?: string;
}

export function ToolShell({ categorySlug, toolSlug, intro, howTo, children, note }: ToolShellProps) {
  const category = getCategory(categorySlug);
  const tool = useMemo(
    () => category?.tools.find((t) => t.slug === toolSlug),
    [category, toolSlug],
  );
  const { isFavorite, toggle } = useFavorites();
  // Track this tool as most-recently-used for the homepage's "Recent" rail.
  useEffect(() => {
    if (tool?.path) trackRecent(tool.path);
  }, [tool?.path]);
  const [seo, setSeo] = useState<ToolSeo | undefined>(undefined);
  // Lazy-load the rich SEO shard for this tool (features, FAQs, extra
  // intro paragraph). Falls back silently if the shard is missing.
  useEffect(() => {
    let cancelled = false;
    if (tool?.path) {
      loadToolSeo(tool.path)
        .then((s) => { if (!cancelled) setSeo(s); })
        .catch((err) => { console.error("Failed to load tool SEO", err); });
    }
    return () => { cancelled = true; };
  }, [tool?.path]);
  const related = useMemo(
    () => (category?.tools ?? allTools.slice(0, 4)).filter((t) => t.slug !== toolSlug).slice(0, 4),
    [category, toolSlug],
  );
  const toolUrl = tool ? `${SITE}${tool.path}` : undefined;
  const displayIntro = seo?.intro?.[0] ?? intro;
  const jsonLd = useMemo(() => (tool && category
    ? [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: tool.name,
          description: seo?.metaDescription ?? intro,
          url: toolUrl,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any (web browser)",
          browserRequirements: "Requires JavaScript. Requires HTML5.",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          publisher: { "@type": "Organization", name: "ToolsHive", url: SITE },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: category.name, item: `${SITE}${category.path}` },
            { "@type": "ListItem", position: 3, name: tool.name, item: toolUrl },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: `How to use the ${tool.name}`,
          step: howTo.map((s, i) => ({ "@type": "HowToStep", position: i + 1, text: s })),
        },
        ...(seo?.faqs?.length
          ? [
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: seo.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ]
          : []),
      ]
    : null), [tool, category, seo, intro, howTo, toolUrl]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <nav className="mb-6 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-muted-foreground">
        <Link to="/" className="whitespace-nowrap hover:text-foreground">Home</Link>
        <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        {category && (
          <>
            <Link to={category.path as "/"} className="whitespace-nowrap hover:text-foreground">{category.name}</Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          </>
        )}
        <span className="text-foreground">{tool?.name ?? toolSlug}</span>
      </nav>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <h1 className="min-w-0 flex-1 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{tool?.name ?? toolSlug}</h1>
        {tool && (
          <button
            type="button"
            onClick={() => toggle(tool.path)}
            aria-label={isFavorite(tool.path) ? "Remove from favorites" : "Add to favorites"}
            className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Star className={`h-3.5 w-3.5 ${isFavorite(tool.path) ? "fill-accent text-accent" : ""}`} />
            {isFavorite(tool.path) ? "Saved" : "Save"}
          </button>
        )}
      </div>
      <p className="mt-3 max-w-2xl text-muted-foreground">{displayIntro}</p>
      {seo?.intro?.[1] && (
        <p className="mt-3 max-w-2xl text-muted-foreground">{seo.intro[1]}</p>
      )}

      {seo?.features && seo.features.length > 0 && (
        <ul className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
          {seo.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <ErrorBoundary boundary={`tool:${categorySlug}/${toolSlug}`} resetKey={tool?.path}>
          {children}
        </ErrorBoundary>
      </div>

      {note && (
        <p className="mt-6 rounded-md border border-border bg-secondary px-4 py-3 text-sm text-secondary-foreground">
          {note}
        </p>
      )}

      <section className="mt-12">
        <h2 className="text-xl font-bold">How to use this tool</h2>
        <ol className="mt-4 space-y-3">
          {howTo.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {seo?.guide && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">How to use — the full guide</h2>
          <div className="mt-2">{renderMarkdown(seo.guide)}</div>
        </section>
      )}

      {seo?.faqs && seo.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card">
            {seo.faqs.map((f, i) => (
              <details key={i} className="group px-4 py-3">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-foreground">
                  <span>{f.q}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">Related tools</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {related.map((t) => (
              <Link
                key={t.path}
                to={t.path as "/"}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-accent"
              >
                <t.icon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="outline"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      disabled={!text}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : label}
    </Button>
  );
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadText(text: string, filename: string) {
  downloadBlob(new Blob([text], { type: "text/plain" }), filename);
}