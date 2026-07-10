import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/text-sorter")({
  head: () => ({
    meta: [
      { title: "Text Sorter — Sort Lines A-Z, Z-A, by Length | ToolHarbor" },
      { name: "description", content: "Sort lines of text alphabetically, in reverse, by length, or shuffle them randomly. Free online line sorter." },
      { property: "og:title", content: "Text Sorter | ToolHarbor" },
      { property: "og:description", content: "Sort lines alphabetically, reversed, by length, or randomly." },
    ],
  }),
  component: TextSorter,
});

function TextSorter() {
  const [text, setText] = useState("");

  const apply = (fn: (lines: string[]) => string[]) => {
    setText(fn(text.split("\n")).join("\n"));
  };

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="text-sorter"
      intro="Sort any list of lines — alphabetically, reverse-alphabetically, by line length, or in random order."
      howTo={[
        "Paste your list — one item per line.",
        "Click a sort button to reorder the lines in place.",
        "Copy the sorted list when done.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={10} placeholder={"banana\napple\ncherry"} value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" disabled={!text} onClick={() => apply((l) => [...l].sort((a, b) => a.localeCompare(b)))}>A → Z</Button>
          <Button variant="secondary" disabled={!text} onClick={() => apply((l) => [...l].sort((a, b) => b.localeCompare(a)))}>Z → A</Button>
          <Button variant="secondary" disabled={!text} onClick={() => apply((l) => [...l].sort((a, b) => a.length - b.length))}>Shortest first</Button>
          <Button variant="secondary" disabled={!text} onClick={() => apply((l) => [...l].sort((a, b) => b.length - a.length))}>Longest first</Button>
          <Button variant="secondary" disabled={!text} onClick={() => apply((l) => [...l].sort(() => Math.random() - 0.5))}>Shuffle</Button>
          <CopyButton text={text} />
        </div>
      </div>
    </ToolShell>
  );
}