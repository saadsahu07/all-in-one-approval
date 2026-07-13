import { Link } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { ChevronRight, Copy, Check, BookOpen, Star } from "lucide-react";
import { allTools, getCategory } from "@/lib/tools";
import { postsMeta } from "@/lib/blog-meta";
import { Button } from "@/components/ui-primitives";
import { loadToolSeo } from "@/lib/seo";
import type { ToolSeo } from "@/lib/seo/types";
import { useFavorites, trackRecent } from "@/lib/user-prefs";
import { ErrorBoundary } from "@/components/error-boundary";

interface ToolShellProps {
  categorySlug: string;
  toolSlug: string;
  intro: string;
  howTo: string[];
  children: ReactNode;
  note?: string;
}

export function ToolShell({ categorySlug, toolSlug, intro, howTo, children, note }: ToolShellProps) {
  const category = getCategory(categorySlug);
  const tool = category?.tools.find((t) => t.slug === toolSlug);
  const { isFavorite, toggle } = useFavorites();
  useEffect(() => {
    if (tool?.path) trackRecent(tool.path);
  }, [tool?.path]);
  const [seo, setSeo] = useState<ToolSeo | undefined>(undefined);
  useEffect(() => {
    let cancelled = false;
    if (tool?.path) {
      loadToolSeo(tool.path)
        .then((s) => { if (!cancelled) setSeo(s); })
        .catch((err) => { console.error("Failed to load tool SEO", err); });
    }
    return () => { cancelled = true; };
  }, [tool?.path]);
  const related = (category?.tools ?? allTools.slice(0, 4)).filter((t) => t.slug !== toolSlug).slice(0, 4);
  const blogPost = tool ? postsMeta.find((p) => p.toolPath === tool.path) : undefined;
  const SITE = "https://all-in-one-approval.lovable.app";
  const toolUrl = tool ? `${SITE}${tool.path}` : undefined;
  const displayIntro = seo?.intro?.[0] ?? intro;
  const jsonLd = tool && category
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
    : null;

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

      {blogPost && (
        <Link
          to="/blog/$slug"
          params={{ slug: blogPost.slug }}
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <BookOpen className="h-4 w-4" />
          Read the full guide: {blogPost.title}
        </Link>
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