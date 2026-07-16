import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/time")({
  head: () => toolHead("calculators", "time"),
  component: Page,
});

const S: Record<string, number> = { seconds: 1, minutes: 60, hours: 3600, days: 86400, weeks: 604800 };

function Page() {
  const [v, setV] = useState("60");
  const [from, setFrom] = useState("minutes");
  const [to, setTo] = useState("hours");
  const out = (+v * S[from]) / S[to];
  return (
    <ToolShell categorySlug="calculators" toolSlug="time"
      intro="Convert between seconds, minutes, hours, days, and weeks."
      howTo={["Enter a duration.", "Pick source and target units."]}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Value</Label><Input type="number" value={v} onChange={(e) => setV(e.target.value)} /></div>
        <div><Label>From</Label>
          <Select value={from} onChange={(e) => setFrom(e.target.value)}>{Object.keys(S).map((u) => <option key={u}>{u}</option>)}</Select>
        </div>
        <div><Label>To</Label>
          <Select value={to} onChange={(e) => setTo(e.target.value)}>{Object.keys(S).map((u) => <option key={u}>{u}</option>)}</Select>
        </div>
      </div>
      <p className="mt-6 text-2xl font-bold text-primary">{out.toLocaleString(undefined, { maximumFractionDigits: 6 })} {to}</p>
    </ToolShell>
  );
}