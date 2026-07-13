import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/length")({
  head: () => toolHead("calculators", "length"),
  component: Page,
});

const M: Record<string, number> = { mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 };

function Page() {
  const [v, setV] = useState("1");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("ft");
  const out = (+v * M[from]) / M[to];
  return (
    <ToolShell categorySlug="calculators" toolSlug="length"
      intro="Convert lengths between mm, cm, m, km, inches, feet, yards, and miles."
      howTo={["Enter a value.", "Pick source and target units."]}>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-3">
        <div><Label>Value</Label><Input type="number" value={v} onChange={(e) => setV(e.target.value)} /></div>
        <div><Label>From</Label><Select value={from} onChange={(e) => setFrom(e.target.value)}>{Object.keys(M).map((k) => <option key={k}>{k}</option>)}</Select></div>
        <div><Label>To</Label><Select value={to} onChange={(e) => setTo(e.target.value)}>{Object.keys(M).map((k) => <option key={k}>{k}</option>)}</Select></div>
      </div>
      <p className="mt-6 text-2xl font-bold">{out.toLocaleString(undefined, { maximumFractionDigits: 6 })} {to}</p>
    </ToolShell>
  );
}