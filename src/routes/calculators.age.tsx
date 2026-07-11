import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/age")({
  head: () => ({ meta: [{ title: "Age Calculator — ToolHive" }, { name: "description", content: "Calculate your exact age in years, months, and days." }] }),
  component: Page,
});

function Page() {
  const [dob, setDob] = useState("");
  const [on, setOn] = useState(new Date().toISOString().slice(0, 10));
  let result: { y: number; m: number; d: number; days: number } | null = null;
  if (dob && on) {
    const a = new Date(dob), b = new Date(on);
    if (b >= a) {
      let y = b.getFullYear() - a.getFullYear();
      let m = b.getMonth() - a.getMonth();
      let d = b.getDate() - a.getDate();
      if (d < 0) { m -= 1; d += new Date(b.getFullYear(), b.getMonth(), 0).getDate(); }
      if (m < 0) { y -= 1; m += 12; }
      const days = Math.floor((b.getTime() - a.getTime()) / 86400000);
      result = { y, m, d, days };
    }
  }
  return (
    <ToolShell categorySlug="calculators" toolSlug="age"
      intro="Enter a birth date to see the exact age in years, months, and days."
      howTo={["Pick your date of birth.", "Optionally change the reference date.", "Read the breakdown."]}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><Label>Date of birth</Label><Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} /></div>
        <div><Label>Age on</Label><Input type="date" value={on} onChange={(e) => setOn(e.target.value)} /></div>
      </div>
      {result && (
        <div className="mt-6 rounded-lg border border-border bg-secondary p-6">
          <p className="text-2xl font-bold">{result.y} years, {result.m} months, {result.d} days</p>
          <p className="mt-2 text-sm text-muted-foreground">Total: {result.days.toLocaleString()} days</p>
        </div>
      )}
    </ToolShell>
  );
}