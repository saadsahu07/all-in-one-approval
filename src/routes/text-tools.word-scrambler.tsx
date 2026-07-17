import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/word-scrambler")({
  head: () => toolHead("text-tools", "word-scrambler"),
  component: Page,
});

function scrambleWord(w: string) {
  const arr = w.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

function Page() {
  const [t, setT] = useState("");
  const [out, setOut] = useState("");
  return (
    <ToolShell categorySlug="text-tools" toolSlug="word-scrambler"
      intro="Randomly shuffle the letters of every word in your text — perfect for puzzles, games, and typoglycemia experiments."
      howTo={["Paste text.", "Click Scramble.", "Copy the scrambled result."]}>
      <Textarea rows={5} value={t} onChange={(e) => setT(e.target.value)} placeholder="The quick brown fox jumps over the lazy dog" />
      <div className="mt-3 flex gap-2">
        <Button onClick={() => setOut(t.split(/(\s+)/).map((p) => (/\s/.test(p) ? p : scrambleWord(p))).join(""))}>Scramble</Button>
        <CopyButton text={out} />
      </div>
      {out && <Textarea rows={5} className="mt-3" value={out} readOnly />}
    </ToolShell>
  );
}