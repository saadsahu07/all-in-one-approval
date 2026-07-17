import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/shuffle-lines")({
  head: () => toolHead("text-tools", "shuffle-lines"),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  const shuffle = () => {
    const lines = t.split("\n");
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    setT(lines.join("\n"));
  };
  return (
    <ToolShell categorySlug="text-tools" toolSlug="shuffle-lines"
      intro="Randomly reorder the lines of any list — great for randomizing questions, quotes, or draw orders."
      howTo={["Paste a list, one item per line.", "Click Shuffle.", "Copy the shuffled result."]}>
      <Textarea rows={10} value={t} onChange={(e) => setT(e.target.value)} placeholder={"Alice\nBob\nCharlie"} />
      <div className="mt-3 flex gap-2">
        <Button onClick={shuffle} disabled={!t.trim()}>Shuffle</Button>
        <CopyButton text={t} />
      </div>
    </ToolShell>
  );
}