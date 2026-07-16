import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/whitespace-remover")({
  head: () => toolHead("text-tools", "whitespace-remover"),
  component: Page,
});

function Page() {
  const [text, setText] = useState("");
  const [collapseSpaces, setCollapseSpaces] = useState(true);
  const [trimLines, setTrimLines] = useState(true);
  const [removeBlanks, setRemoveBlanks] = useState(true);
  const output = useMemo(() => {
    let lines = text.split("\n");
    if (trimLines) lines = lines.map((l) => l.trim());
    if (collapseSpaces) lines = lines.map((l) => l.replace(/[ \t]+/g, " "));
    if (removeBlanks) lines = lines.filter((l) => l.length > 0);
    return lines.join("\n");
  }, [text, collapseSpaces, trimLines, removeBlanks]);
  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="whitespace-remover"
      intro="Collapse runs of spaces and tabs, trim every line, and optionally drop blank lines from any text."
      howTo={[
        "Paste your text.",
        "Toggle the cleanups you want.",
        "Copy the cleaned result.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={8} placeholder="Paste text…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" checked={collapseSpaces} onChange={(e) => setCollapseSpaces(e.target.checked)} /> Collapse repeated spaces</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={trimLines} onChange={(e) => setTrimLines(e.target.checked)} /> Trim each line</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={removeBlanks} onChange={(e) => setRemoveBlanks(e.target.checked)} /> Remove blank lines</label>
        </div>
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
