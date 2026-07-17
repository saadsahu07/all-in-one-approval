import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/roman-numerals")({
  head: () => toolHead("calculators", "roman-numerals"),
  component: Page,
});

const MAP: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];
function toRoman(n: number): string {
  if (n < 1 || n > 3999 || !Number.isInteger(n)) return "";
  let out = "";
  for (const [v, s] of MAP) while (n >= v) { out += s; n -= v; }
  return out;
}
function fromRoman(s: string): number | null {
  const src = s.toUpperCase();
  if (!/^[MDCLXVI]+$/.test(src)) return null;
  let n = 0, i = 0;
  for (const [v, sym] of MAP) while (src.startsWith(sym, i)) { n += v; i += sym.length; }
  return i === src.length && toRoman(n) === src ? n : null;
}

function Page() {
  const [num, setNum] = useState("2024");
  const [rom, setRom] = useState("MMXXIV");
  const r = toRoman(+num), d = fromRoman(rom);
  return (
    <ToolShell categorySlug="calculators" toolSlug="roman-numerals"
      intro="Convert numbers to Roman numerals and back — supports 1 to 3999."
      howTo={["Type a number (1-3999) or a Roman numeral.", "Copy the converted result."]}>
      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
        <div>
          <Label>Number → Roman</Label>
          <Input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
          <div className="mt-2 flex items-center gap-2"><p className="font-mono text-lg">{r || "—"}</p><CopyButton text={r} /></div>
        </div>
        <div>
          <Label>Roman → Number</Label>
          <Input value={rom} onChange={(e) => setRom(e.target.value)} className="uppercase font-mono" />
          <p className="mt-2 text-lg">{d ?? "—"}</p>
        </div>
      </div>
    </ToolShell>
  );
}