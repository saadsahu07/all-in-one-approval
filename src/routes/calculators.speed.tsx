import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/speed")({
  head: () => toolHead("calculators", "speed"),
  component: Page,
});

const F: Record<string, number> = { "m/s": 1, "km/h": 1000 / 3600, mph: 1609.344 / 3600, knots: 1852 / 3600 };

function Page() {
  const [v, setV] = useState("100");
  const [from, setFrom] = useState("km/h");
  const [to, setTo] = useState("mph");
  const out = (+v * F[from]) / F[to];
  return (
    <ToolShell categorySlug="calculators" toolSlug="speed"
      intro="Convert between km/h, mph, m/s, and knots."
      howTo={["Enter a speed.", "Pick source and target units."]}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Value</Label><Input type="number" value={v} onChange={(e) => setV(e.target.value)} /></div>
        <div><Label>From</Label>
          <Select value={from} onChange={(e) => setFrom(e.target.value)}>{Object.keys(F).map((u) => <option key={u}>{u}</option>)}</Select>
        </div>
        <div><Label>To</Label>
          <Select value={to} onChange={(e) => setTo(e.target.value)}>{Object.keys(F).map((u) => <option key={u}>{u}</option>)}</Select>
        </div>
      </div>
      <p className="mt-6 text-2xl font-bold text-primary">{out.toLocaleString(undefined, { maximumFractionDigits: 4 })} {to}</p>
    </ToolShell>
  );
}