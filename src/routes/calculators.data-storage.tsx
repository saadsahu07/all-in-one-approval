import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/data-storage")({
  head: () => toolHead("calculators", "data-storage"),
  component: Page,
});

const B: Record<string, number> = { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4, PB: 1024 ** 5 };

function Page() {
  const [v, setV] = useState("1");
  const [from, setFrom] = useState("GB");
  const [to, setTo] = useState("MB");
  const out = (+v * B[from]) / B[to];
  return (
    <ToolShell categorySlug="calculators" toolSlug="data-storage"
      intro="Convert between bytes, KB, MB, GB, TB, and PB (binary, 1024-based)."
      howTo={["Enter a size.", "Pick source and target units."]}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Value</Label><Input type="number" value={v} onChange={(e) => setV(e.target.value)} /></div>
        <div><Label>From</Label>
          <Select value={from} onChange={(e) => setFrom(e.target.value)}>{Object.keys(B).map((u) => <option key={u}>{u}</option>)}</Select>
        </div>
        <div><Label>To</Label>
          <Select value={to} onChange={(e) => setTo(e.target.value)}>{Object.keys(B).map((u) => <option key={u}>{u}</option>)}</Select>
        </div>
      </div>
      <p className="mt-6 text-2xl font-bold text-primary">{out.toLocaleString(undefined, { maximumFractionDigits: 6 })} {to}</p>
    </ToolShell>
  );
}