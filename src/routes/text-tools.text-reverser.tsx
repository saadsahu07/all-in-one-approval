import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/text-reverser")({
  head: () => toolHead("text-tools", "text-reverser"),
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