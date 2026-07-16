import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Card, Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/date-difference")({
  head: () => toolHead("calculators", "date-difference"),
  component: Page,
});

function Page() {
  const today = new Date().toISOString().slice(0, 10);
  const [a, setA] = useState("2020-01-01");
  const [b, setB] = useState(today);
  const { days, weeks, months } = useMemo(() => {
    const d1 = new Date(a).getTime();
    const d2 = new Date(b).getTime();
    if (isNaN(d1) || isNaN(d2)) return { days: 0, weeks: 0, months: 0 };
    const dd = Math.abs(d2 - d1) / 86400000;
    return { days: Math.round(dd), weeks: +(dd / 7).toFixed(2), months: +(dd / 30.4375).toFixed(2) };
  }, [a, b]);
  return (
    <ToolShell categorySlug="calculators" toolSlug="date-difference"
      intro="Find how many days, weeks, or months lie between two dates."
      howTo={["Pick a start date.", "Pick an end date.", "Read the differences below."]}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><Label>Start date</Label><Input type="date" value={a} onChange={(e) => setA(e.target.value)} /></div>
        <div><Label>End date</Label><Input type="date" value={b} onChange={(e) => setB(e.target.value)} /></div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Card className="p-4 text-center"><p className="text-2xl font-bold text-primary">{days.toLocaleString()}</p><p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Days</p></Card>
        <Card className="p-4 text-center"><p className="text-2xl font-bold text-primary">{weeks}</p><p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Weeks</p></Card>
        <Card className="p-4 text-center"><p className="text-2xl font-bold text-primary">{months}</p><p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Months</p></Card>
      </div>
    </ToolShell>
  );
}