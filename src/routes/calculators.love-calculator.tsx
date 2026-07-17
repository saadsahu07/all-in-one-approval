import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/love-calculator")({
  head: () => toolHead("calculators", "love-calculator"),
  component: Page,
});

function score(a: string, b: string): number {
  const key = (a.trim().toLowerCase() + "+" + b.trim().toLowerCase()).replace(/\s/g, "");
  if (!a.trim() || !b.trim()) return 0;
  let h = 0;
  for (let i = 0; i < key.length; i++) h = ((h << 5) - h + key.charCodeAt(i)) | 0;
  return Math.abs(h) % 101;
}

function Page() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const s = score(a, b);
  const has = a.trim() && b.trim();
  return (
    <ToolShell categorySlug="calculators" toolSlug="love-calculator"
      intro="A fun compatibility score between two names — deterministic and totally unscientific."
      note="Just for laughs — this tool is entertainment, not relationship advice."
      howTo={["Enter two names.", "Read the compatibility score."]}>
      <div className="grid gap-3 sm:grid-cols-2 max-w-md">
        <div><Label>Name 1</Label><Input value={a} onChange={(e) => setA(e.target.value)} placeholder="Alice" /></div>
        <div><Label>Name 2</Label><Input value={b} onChange={(e) => setB(e.target.value)} placeholder="Bob" /></div>
      </div>
      {has && (
        <div className="mt-4 rounded-md border border-border p-4 max-w-md">
          <p className="text-xs text-muted-foreground">Compatibility</p>
          <p className="text-4xl font-bold">{s}%</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {s > 80 ? "💕 Made for each other!" : s > 60 ? "❤️ Great match" : s > 40 ? "🙂 Some potential" : s > 20 ? "🤔 Just friends?" : "😅 Try again"}
          </p>
        </div>
      )}
    </ToolShell>
  );
}