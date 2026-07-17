import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/calorie")({
  head: () => toolHead("calculators", "calorie"),
  component: Page,
});

function Page() {
  const [sex, setSex] = useState<"m" | "f">("m");
  const [age, setAge] = useState("30");
  const [h, setH] = useState("175");
  const [w, setW] = useState("70");
  const [act, setAct] = useState("1.55");
  // Mifflin-St Jeor
  const bmr = sex === "m"
    ? 10 * +w + 6.25 * +h - 5 * +age + 5
    : 10 * +w + 6.25 * +h - 5 * +age - 161;
  const tdee = bmr * +act;
  const ok = +age > 0 && +h > 0 && +w > 0;
  return (
    <ToolShell categorySlug="calculators" toolSlug="calorie"
      intro="Estimate daily calorie needs (TDEE) using the Mifflin-St Jeor equation."
      note="For general guidance only — not medical advice."
      howTo={["Enter age, height (cm), weight (kg), and activity level.", "Read BMR and TDEE below."]}>
      <div className="grid gap-3 sm:grid-cols-3 max-w-2xl">
        <div><Label>Sex</Label>
          <select value={sex} onChange={(e) => setSex(e.target.value as "m" | "f")} className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
            <option value="m">Male</option><option value="f">Female</option>
          </select>
        </div>
        <div><Label>Age</Label><Input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></div>
        <div><Label>Height (cm)</Label><Input type="number" value={h} onChange={(e) => setH(e.target.value)} /></div>
        <div><Label>Weight (kg)</Label><Input type="number" value={w} onChange={(e) => setW(e.target.value)} /></div>
        <div className="sm:col-span-2"><Label>Activity</Label>
          <select value={act} onChange={(e) => setAct(e.target.value)} className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm">
            <option value="1.2">Sedentary</option>
            <option value="1.375">Light (1-3 days/wk)</option>
            <option value="1.55">Moderate (3-5 days/wk)</option>
            <option value="1.725">Very active (6-7 days/wk)</option>
            <option value="1.9">Athlete</option>
          </select>
        </div>
      </div>
      {ok && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 max-w-md">
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">BMR</p><p className="text-2xl font-bold">{Math.round(bmr)} <span className="text-sm font-normal text-muted-foreground">kcal/day</span></p></div>
          <div className="rounded-md border border-border p-3"><p className="text-xs text-muted-foreground">TDEE</p><p className="text-2xl font-bold">{Math.round(tdee)} <span className="text-sm font-normal text-muted-foreground">kcal/day</span></p></div>
        </div>
      )}
    </ToolShell>
  );
}