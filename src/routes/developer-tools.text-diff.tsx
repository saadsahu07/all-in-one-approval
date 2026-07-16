import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/text-diff")({
  head: () => toolHead("developer-tools", "text-diff"),
  component: Page,
});

type Row = { kind: "same" | "add" | "del"; text: string };

function diff(a: string[], b: string[]): Row[] {
  const n = a.length, m = b.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const out: Row[] = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { out.push({ kind: "same", text: a[i] }); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { out.push({ kind: "del", text: a[i] }); i++; }
    else { out.push({ kind: "add", text: b[j] }); j++; }
  }
  while (i < n) out.push({ kind: "del", text: a[i++] });
  while (j < m) out.push({ kind: "add", text: b[j++] });
  return out;
}

function Page() {
  const [left, setLeft] = useState("The quick brown fox\njumps over\nthe lazy dog");
  const [right, setRight] = useState("The quick brown fox\nleaps over\nthe lazy dog\nquickly");
  const rows = useMemo(() => diff(left.split("\n"), right.split("\n")), [left, right]);
  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="text-diff"
      intro="Compare two blocks of text line by line and see added, removed, and unchanged lines highlighted."
      howTo={["Paste the original on the left.", "Paste the new version on the right.", "Review the highlighted diff."]}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label>Original</Label>
            <Textarea rows={8} value={left} onChange={(e) => setLeft(e.target.value)} className="mt-1 font-mono text-sm" />
          </div>
          <div>
            <Label>Changed</Label>
            <Textarea rows={8} value={right} onChange={(e) => setRight(e.target.value)} className="mt-1 font-mono text-sm" />
          </div>
        </div>
        <div className="overflow-hidden rounded-md border border-border bg-card font-mono text-xs">
          {rows.map((r, i) => (
            <div
              key={i}
              className={
                r.kind === "add"
                  ? "bg-primary/10 px-3 py-1 text-foreground"
                  : r.kind === "del"
                  ? "bg-destructive/10 px-3 py-1 text-foreground line-through"
                  : "px-3 py-1 text-muted-foreground"
              }
            >
              <span className="mr-2 select-none opacity-60">{r.kind === "add" ? "+" : r.kind === "del" ? "-" : " "}</span>
              {r.text || "\u00A0"}
            </div>
          ))}
        </div>
      </div>
    </ToolShell>
  );
}
