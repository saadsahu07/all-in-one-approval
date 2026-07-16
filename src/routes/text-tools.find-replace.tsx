import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/find-replace")({
  head: () => toolHead("text-tools", "find-replace"),
  component: Page,
});

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Page() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [useRegex, setUseRegex] = useState(false);
  const { output, count, error } = useMemo(() => {
    if (!find) return { output: text, count: 0, error: "" };
    try {
      const flags = "g" + (caseSensitive ? "" : "i");
      const re = new RegExp(useRegex ? find : escapeRe(find), flags);
      const matches = text.match(re);
      return { output: text.replace(re, replace), count: matches?.length ?? 0, error: "" };
    } catch (e) {
      return { output: text, count: 0, error: e instanceof Error ? e.message : "Invalid pattern" };
    }
  }, [text, find, replace, caseSensitive, useRegex]);

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="find-replace"
      intro="Find every occurrence in your text and replace it, with optional case sensitivity and full regular expression support."
      howTo={[
        "Paste your text.",
        "Enter what to find and what to replace it with.",
        "Toggle case sensitivity or regex mode, then copy the result.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={8} placeholder="Paste text…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="grid gap-3 sm:grid-cols-2">
          <div><Label>Find</Label><Input value={find} onChange={(e) => setFind(e.target.value)} /></div>
          <div><Label>Replace with</Label><Input value={replace} onChange={(e) => setReplace(e.target.value)} /></div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} /> Case sensitive</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={useRegex} onChange={(e) => setUseRegex(e.target.checked)} /> Regex</label>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {find && !error && <p className="text-sm text-muted-foreground">{count} match{count === 1 ? "" : "es"} replaced.</p>}
        {output && (
          <div className="space-y-3">
            <Textarea rows={8} readOnly value={output} />
            <CopyButton text={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}
