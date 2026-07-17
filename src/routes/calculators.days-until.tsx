import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/days-until")({
  head: () => toolHead("calculators", "days-until"),
  component: Page,
});

function Page() {
  const [d, setD] = useState("");
  let days = NaN, weeks = 0, months = 0;
  if (d) {
    const t = new Date(d + "T00:00:00").getTime();
    const now = new Date(); now.setHours(0, 0, 0, 0);
    days = Math.round((t - now.getTime()) / 86400000);
    weeks = Math.round(days / 7);
    months = Math.round(days / 30.44);
  }
  return (
    <ToolShell categorySlug="calculators" toolSlug="days-until"
      intro="Count how many days from today until any future date (or how many days since a past date)."
      howTo={["Pick a target date.", "Read the countdown live."]}>
      <div className="max-w-xs"><Label>Target date</Label><Input type="date" value={d} onChange={(e) => setD(e.target.value)} /></div>
      {!isNaN(days) && (
        <div className="mt-4 grid gap-3 sm:grid-cols-3 max-w-xl">
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Days</p><p className="text-2xl font-bold">{days}</p></div>
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Weeks</p><p className="text-2xl font-bold">{weeks}</p></div>
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">Months</p><p className="text-2xl font-bold">{months}</p></div>
        </div>
      )}
    </ToolShell>
  );
}