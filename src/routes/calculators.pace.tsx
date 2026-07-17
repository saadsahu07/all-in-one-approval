import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/pace")({
  head: () => toolHead("calculators", "pace"),
  component: Page,
});

function fmt(min: number) {
  if (!isFinite(min) || min <= 0) return "—";
  const m = Math.floor(min), s = Math.round((min - m) * 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function Page() {
  const [dist, setDist] = useState("5");
  const [h, setH] = useState("0");
  const [m, setM] = useState("25");
  const [s, setS] = useState("0");
  const totalMin = +h * 60 + +m + +s / 60;
  const pace = totalMin / +dist;
  const ok = +dist > 0 && totalMin > 0;
  return (
    <ToolShell categorySlug="calculators" toolSlug="pace"
      intro="Calculate your running pace per unit distance from total distance and time."
      howTo={["Enter distance and finish time.", "Read the pace live below."]}>
      <div className="grid gap-3 sm:grid-cols-4 max-w-2xl">
        <div><Label>Distance (km or mi)</Label><Input type="number" step="0.1" value={dist} onChange={(e) => setDist(e.target.value)} /></div>
        <div><Label>Hours</Label><Input type="number" value={h} onChange={(e) => setH(e.target.value)} /></div>
        <div><Label>Minutes</Label><Input type="number" value={m} onChange={(e) => setM(e.target.value)} /></div>
        <div><Label>Seconds</Label><Input type="number" value={s} onChange={(e) => setS(e.target.value)} /></div>
      </div>
      {ok && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 max-w-md">
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Pace</p><p className="text-2xl font-bold">{fmt(pace)} <span className="text-sm font-normal text-muted-foreground">min/unit</span></p></div>
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Speed</p><p className="text-2xl font-bold">{(60 / pace).toFixed(2)} <span className="text-sm font-normal text-muted-foreground">unit/h</span></p></div>
        </div>
      )}
    </ToolShell>
  );
}