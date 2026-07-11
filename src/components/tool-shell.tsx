import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { ChevronRight, Copy, Check, BookOpen } from "lucide-react";
import { allTools, getCategory } from "@/lib/tools";
import { postsMeta } from "@/lib/blog-meta";
import { Button } from "@/components/ui-primitives";

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
  const related = (category?.tools ?? allTools.slice(0, 4)).filter((t) => t.slug !== toolSlug).slice(0, 4);
  const blogPost = tool ? postsMeta.find((p) => p.toolPath === tool.path) : undefined;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link to={category.path as "/"} className="hover:text-foreground">{category.name}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-foreground">{tool?.name ?? toolSlug}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{tool?.name ?? toolSlug}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{intro}</p>

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

      <div className="mt-8">{children}</div>

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

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">Related tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
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