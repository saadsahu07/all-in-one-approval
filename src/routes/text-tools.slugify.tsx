import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Textarea, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/slugify")({
  head: () => toolHead("text-tools", "slugify"),
  component: Page,
});

function slugify(input: string, sep: string) {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, sep)
    .replace(new RegExp(`^${sep}+|${sep}+$`, "g"), "");
}

function Page() {
  const [text, setText] = useState("");
  const [sep, setSep] = useState("-");
  const slug = useMemo(() => slugify(text, sep), [text, sep]);
  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="slugify"
      intro="Turn a title or phrase into a clean, URL-friendly slug — lowercased, ASCII-only, with your chosen separator."
      howTo={[
        "Type or paste your text.",
        "Pick the separator (dash or underscore).",
        "Copy the generated slug.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={4} placeholder="e.g. 10 Best Practices for Web Design!" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex items-center gap-3 text-sm">
          <Label>Separator</Label>
          <label className="flex items-center gap-1"><input type="radio" checked={sep === "-"} onChange={() => setSep("-")} /> dash (-)</label>
          <label className="flex items-center gap-1"><input type="radio" checked={sep === "_"} onChange={() => setSep("_")} /> underscore (_)</label>
        </div>
        <div>
          <Label>Slug</Label>
          <Input readOnly value={slug} className="mt-1 font-mono" />
        </div>
        <CopyButton text={slug} />
      </div>
    </ToolShell>
  );
}