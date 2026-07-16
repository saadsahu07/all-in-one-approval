import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/add-line-numbers")({
  head: () => toolHead("text-tools", "add-line-numbers"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const [start, setStart] = useState(1);
  const [sep, setSep] = useState(". ");
  const output = useMemo(() => {
    const lines = text.split("\n");
    const pad = String(lines.length + start - 1).length;
    return lines.map((l, i) => `${String(i + start).padStart(pad, " ")}${sep}${l}`).join("\n");
  }, [text, start, sep]);
  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="add-line-numbers"
      intro="Prefix every line with a padded line number. Useful for numbered lists, code snippets, or reviewing text."
      howTo={[
        "Paste your text.",
        "Set the starting number and separator.",
        "Copy the numbered output.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={8} placeholder="Paste any text…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap gap-3">
          <div className="w-32"><Label>Start at</Label><Input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} /></div>
          <div className="w-40"><Label>Separator</Label><Input value={sep} onChange={(e) => setSep(e.target.value)} /></div>
        </div>
        {output && (
          <div className="space-y-3">
            <Textarea rows={10} readOnly value={output} className="font-mono" />
            <CopyButton text={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}
