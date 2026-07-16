import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/slug-generator")({
  head: () => toolHead("developer-tools", "slug-generator"),
  component: Page,
});

function slugify(input: string) {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function Page() {
  const [text, setText] = useState("How to Make Money Online in 2026");
  const slug = useMemo(() => slugify(text), [text]);
  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="slug-generator"
      intro="Turn any title into a clean, URL-friendly slug — lowercase, hyphen-separated, safe for URLs and filesystems."
      howTo={["Paste your title or sentence.", "Read the slug below.", "Copy it into your URL."]}
    >
      <div className="space-y-4">
        <div>
          <Label>Title or text</Label>
          <Input value={text} onChange={(e) => setText(e.target.value)} className="mt-1" />
        </div>
        <div className="rounded-md border border-border bg-card p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Slug</span>
            <CopyButton text={slug} />
          </div>
          <p className="break-all font-mono text-sm text-foreground">{slug || "—"}</p>
        </div>
      </div>
    </ToolShell>
  );
}
