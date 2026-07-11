import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/text-reverser")({
  head: () => ({
    meta: [
      { title: "Text Reverser — Reverse Text, Words & Lines | ToolHive" },
      { name: "description", content: "Reverse text character by character, reverse word order, or reverse the order of lines. Free online text reverser." },
      { property: "og:title", content: "Text Reverser | ToolHive" },
      { property: "og:description", content: "Reverse text, words, or lines in one click." },
    ],
  }),
  component: TextReverser,
});

function TextReverser() {
  const [text, setText] = useState("");

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="text-reverser"
      intro="Flip your text backwards — reverse every character, reverse the order of words, or reverse the order of lines."
      howTo={[
        "Type or paste text into the box.",
        "Choose how to reverse it — characters, words, or lines.",
        "Copy the reversed result.",
      ]}
    >
      <div className="space-y-4">
        <Textarea rows={8} placeholder="Type or paste text here…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" disabled={!text} onClick={() => setText([...text].reverse().join(""))}>Reverse characters</Button>
          <Button variant="secondary" disabled={!text} onClick={() => setText(text.split(/\s+/).reverse().join(" "))}>Reverse words</Button>
          <Button variant="secondary" disabled={!text} onClick={() => setText(text.split("\n").reverse().join("\n"))}>Reverse lines</Button>
          <CopyButton text={text} />
        </div>
      </div>
    </ToolShell>
  );
}