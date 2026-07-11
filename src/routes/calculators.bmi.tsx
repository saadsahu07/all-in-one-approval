import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input, Label, Select } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/bmi")({
  head: () => toolHead("calculators", "bmi"),
  component: Page,
});

function Page() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  let bmi = 0;
  if (h && w) {
    if (unit === "metric") bmi = +w / ((+h / 100) ** 2);
    else bmi = (+w / (+h * +h)) * 703;
  }
  const cat = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  return (
    <ToolShell categorySlug="calculators" toolSlug="bmi"
      intro="Get your Body Mass Index with a category classification."
      howTo={["Pick units.", "Enter height and weight.", "See your BMI value and range."]}
      note="BMI is a general guide only. It doesn't account for muscle mass, age, or body composition. Consult a healthcare provider for medical advice.">
      <div className="grid gap-4 sm:grid-cols-3">
        <div><Label>Units</Label><Select value={unit} onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}><option value="metric">Metric (cm, kg)</option><option value="imperial">Imperial (in, lb)</option></Select></div>
        <div><Label>Height ({unit === "metric" ? "cm" : "in"})</Label><Input type="number" value={h} onChange={(e) => setH(e.target.value)} /></div>
        <div><Label>Weight ({unit === "metric" ? "kg" : "lb"})</Label><Input type="number" value={w} onChange={(e) => setW(e.target.value)} /></div>
      </div>
      {bmi > 0 && (
        <div className="mt-6 rounded-lg border border-border bg-secondary p-6">
          <p className="text-3xl font-bold">{bmi.toFixed(1)}</p>
          <p className="mt-1 text-sm text-muted-foreground">{cat}</p>
        </div>
      )}
    </ToolShell>
  );
}