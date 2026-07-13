import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/weight")({
  head: () => toolHead("calculators", "weight"),
  component: Page,
});

const G: Record<string, number> = { mg: 0.001, g: 1, kg: 1000, t: 1_000_000, oz: 28.3495, lb: 453.592, st: 6350.29 };

function Page() {
  const [v, setV] = useState("1");
  const [from, setFrom] = useState("kg");
  const [to, setTo] = useState("lb");
  const out = (+v * G[from]) / G[to];
  return (
    <ToolShell categorySlug="calculators" toolSlug="weight"
      intro="Convert between metric and imperial weight units."
      howTo={["Enter a value.", "Pick source and target units."]}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div><Label>Value</Label><Input type="number" value={v} onChange={(e) => setV(e.target.value)} /></div>
        <div><Label>From</Label><Select value={from} onChange={(e) => setFrom(e.target.value)}>{Object.keys(G).map((k) => <option key={k}>{k}</option>)}</Select></div>
        <div><Label>To</Label><Select value={to} onChange={(e) => setTo(e.target.value)}>{Object.keys(G).map((k) => <option key={k}>{k}</option>)}</Select></div>
      </div>
      <p className="mt-6 text-2xl font-bold">{out.toLocaleString(undefined, { maximumFractionDigits: 6 })} {to}</p>
    </ToolShell>
  );
}