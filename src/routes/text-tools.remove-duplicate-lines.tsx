import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/remove-duplicate-lines")({
  head: () => ({
    meta: [
      { title: "Remove Duplicate Lines Online — Free Tool | ToolHive" },
      { name: "description", content: "Paste a list and remove duplicate lines instantly, with options for case sensitivity and trimming. Free online deduplication tool." },
      { property: "og:title", content: "Remove Duplicate Lines | ToolHive" },
      { property: "og:description", content: "Delete repeated lines from any list or text instantly." },
    ],
  }),
  component: RemoveDuplicates,
});

function RemoveDuplicates() {
  const [text, setText] = useState("");
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [removed, setRemoved] = useState<number | null>(null);

  const run = () => {
    const lines = text.split("\n");
    const seen = new Set<string>();
    const kept: string[] = [];
    for (const line of lines) {
      const key = ignoreCase ? line.trim().toLowerCase() : line.trim();
      if (!seen.has(key)) {
        seen.add(key);
        kept.push(line);
      }
    }
    setRemoved(lines.length - kept.length);
    setText(kept.join("\n"));
  };

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="remove-duplicate-lines"
      intro="Clean up lists, logs, and exports by removing repeated lines. Optionally ignore letter case when comparing."
      howTo={[
        "Paste your list — one item per line.",
        "Tick 'Ignore case' if 'Apple' and 'apple' should count as duplicates.",
        "Click Remove Duplicates and copy the cleaned list.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={10} placeholder={"apple\nbanana\napple\ncherry"} value={text} onChange={(e) => { setText(e.target.value); setRemoved(null); }} />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} className="h-4 w-4 accent-[var(--accent)]" />
          Ignore case when comparing
        </label>
        <div className="flex flex-wrap gap-2">
          <Button onClick={run} disabled={!text}>Remove Duplicates</Button>
          <CopyButton text={text} />
        </div>
        {removed !== null && (
          <p className="text-sm text-muted-foreground">{removed} duplicate line{removed === 1 ? "" : "s"} removed.</p>
        )}
      </div>
    </ToolShell>
  );
}