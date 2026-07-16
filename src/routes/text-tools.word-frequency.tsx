import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/word-frequency")({
  head: () => toolHead("text-tools", "word-frequency"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const rows = useMemo(() => {
    const words = text.toLowerCase().match(/[\p{L}\p{N}']+/gu) ?? [];
    const map = new Map<string, number>();
    for (const w of words) map.set(w, (map.get(w) ?? 0) + 1);
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, 100);
  }, [text]);
  const total = rows.reduce((s, r) => s + r[1], 0);
  const max = rows[0]?.[1] ?? 1;

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="word-frequency"
      intro="Paste any text and see how often each word appears, sorted from most to least frequent. Great for keyword research and content review."
      howTo={[
        "Paste your text.",
        "The top 100 words appear ranked by frequency.",
        "Use the counts to spot repetition and keyword density.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={8} placeholder="Paste text…" value={text} onChange={(e) => setText(e.target.value)} />
        {rows.length > 0 && (
          <div className="space-y-2 rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">{total} words counted, {rows.length} unique shown.</p>
            <div className="space-y-1">
              {rows.map(([w, n]) => (
                <div key={w} className="flex items-center gap-2 text-sm">
                  <span className="w-32 truncate font-mono">{w}</span>
                  <div className="h-2 flex-1 rounded bg-secondary overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${(n / max) * 100}%` }} />
                  </div>
                  <span className="w-10 text-right tabular-nums text-muted-foreground">{n}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolShell>
  );
}
