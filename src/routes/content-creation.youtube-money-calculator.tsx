import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/content-creation/youtube-money-calculator")({
  head: () => toolHead("content-creation", "youtube-money-calculator"),
  component: YouTubeMoneyCalculator,
});

const CREATOR_SHARE = 0.55;

function fmt(n: number) {
  if (!isFinite(n) || n <= 0) return "$0";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function YouTubeMoneyCalculator() {
  const [views, setViews] = useState("100000");
  const [cpmLow, setCpmLow] = useState("2");
  const [cpmHigh, setCpmHigh] = useState("8");
  const [monetized, setMonetized] = useState("50");

  const { low, avg, high, monetizedViews } = useMemo(() => {
    const v = Math.max(0, Number(views) || 0);
    const lo = Math.max(0, Number(cpmLow) || 0);
    const hi = Math.max(lo, Number(cpmHigh) || 0);
    const rate = Math.min(100, Math.max(0, Number(monetized) || 0)) / 100;
    const mv = v * rate;
    const rev = (cpm: number) => (mv / 1000) * cpm * CREATOR_SHARE;
    const low = rev(lo);
    const high = rev(hi);
    return { low, high, avg: (low + high) / 2, monetizedViews: mv };
  }, [views, cpmLow, cpmHigh, monetized]);

  return (
    <ToolShell
      categorySlug="content-creation"
      toolSlug="youtube-money-calculator"
      intro="Estimate YouTube earnings from any view count and CPM range. Runs entirely in your browser — no signup, no API key, no data uploaded."
      howTo={[
        "Enter your monthly views (or total views for a single video).",
        "Set a CPM range that matches your niche.",
        "Adjust the monetized-playback rate to see realistic earnings after YouTube's 45% cut.",
      ]}
      note="This is an estimate. Actual revenue depends on niche, geography, ad format, and monetized playback rate."
    >
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="ymc-views">Monthly views</Label>
            <Input id="ymc-views" type="number" min={0} value={views} onChange={(e) => setViews(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="ymc-monetized">Monetized playbacks (%)</Label>
            <Input id="ymc-monetized" type="number" min={0} max={100} value={monetized} onChange={(e) => setMonetized(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="ymc-cpm-low">CPM low ($)</Label>
            <Input id="ymc-cpm-low" type="number" min={0} step="0.1" value={cpmLow} onChange={(e) => setCpmLow(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="ymc-cpm-high">CPM high ($)</Label>
            <Input id="ymc-cpm-high" type="number" min={0} step="0.1" value={cpmHigh} onChange={(e) => setCpmHigh(e.target.value)} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Low estimate</p>
            <p className="mt-1 text-2xl font-semibold">{fmt(low)}</p>
          </div>
          <div className="rounded-lg border border-primary/40 bg-primary/5 p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Average</p>
            <p className="mt-1 text-2xl font-semibold">{fmt(avg)}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">High estimate</p>
            <p className="mt-1 text-2xl font-semibold">{fmt(high)}</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Based on {monetizedViews.toLocaleString("en-US", { maximumFractionDigits: 0 })} monetized playbacks and YouTube's standard 55% creator share.
        </p>
      </div>
    </ToolShell>
  );
}