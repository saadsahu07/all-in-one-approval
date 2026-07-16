import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/number-base-converter")({
  head: () => toolHead("developer-tools", "number-base-converter"),
  component: Page,
});

const BASES: { label: string; base: 2 | 8 | 10 | 16 }[] = [
  { label: "Binary (2)", base: 2 },
  { label: "Octal (8)", base: 8 },
  { label: "Decimal (10)", base: 10 },
  { label: "Hex (16)", base: 16 },
];

function Page() {
  const [values, setValues] = useState<Record<number, string>>({ 2: "1010", 8: "12", 10: "10", 16: "a" });
  const [error, setError] = useState<string | null>(null);

  const update = (base: number, raw: string) => {
    setError(null);
    if (raw.trim() === "") { setValues({ 2: "", 8: "", 10: "", 16: "" }); return; }
    try {
      const cleaned = raw.trim().replace(/^0[bBoOxX]/, "");
      const n = parseInt(cleaned, base);
      if (!Number.isFinite(n) || isNaN(n) || n < 0) throw new Error("Invalid number for base " + base);
      setValues({
        2: n.toString(2),
        8: n.toString(8),
        10: n.toString(10),
        16: n.toString(16),
      });
    } catch (e) {
      setError((e as Error).message);
      setValues((prev) => ({ ...prev, [base]: raw }));
    }
  };

  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="number-base-converter"
      intro="Convert any integer between binary, octal, decimal, and hexadecimal — edit any field and the rest update."
      howTo={["Type a value into any base's field.", "Every other base updates instantly.", "Copy the representation you need."]}
    >
      <div className="space-y-3">
        {BASES.map(({ label, base }) => (
          <div key={base}>
            <Label>{label}</Label>
            <div className="mt-1 flex gap-2">
              <Input value={values[base] ?? ""} onChange={(e) => update(base, e.target.value)} className="font-mono" />
              <CopyButton text={values[base] ?? ""} />
            </div>
          </div>
        ))}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </ToolShell>
  );
}
