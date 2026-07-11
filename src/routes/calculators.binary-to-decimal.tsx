import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/calculators/binary-to-decimal")({
  head: () => ({ meta: [{ title: "Binary ↔ Decimal Converter — ToolHive" }, { name: "description", content: "Convert binary numbers to decimal and back." }] }),
  component: Page,
});

function Page() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");
  const decFromBin = /^[01]+$/.test(bin) ? parseInt(bin, 2).toString(10) : "";
  const binFromDec = /^\d+$/.test(dec) ? (+dec).toString(2) : "";
  return (
    <ToolShell categorySlug="calculators" toolSlug="binary-to-decimal"
      intro="Convert binary numbers to decimal, and decimal numbers back to binary."
      howTo={["Type binary or decimal in the matching field.", "Copy the converted result."]}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Binary</Label>
          <Input value={bin} onChange={(e) => setBin(e.target.value)} placeholder="1010" />
          {decFromBin && <p className="mt-2 text-sm">Decimal: <span className="font-mono font-semibold">{decFromBin}</span> <CopyButton text={decFromBin} /></p>}
        </div>
        <div>
          <Label>Decimal</Label>
          <Input value={dec} onChange={(e) => setDec(e.target.value)} placeholder="10" />
          {binFromDec && <p className="mt-2 text-sm">Binary: <span className="font-mono font-semibold">{binFromDec}</span> <CopyButton text={binFromDec} /></p>}
        </div>
      </div>
    </ToolShell>
  );
}