import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/csv-to-json")({
  head: () => toolHead("developer-tools", "csv-to-json"),
  component: Page,
});

function parseCsv(csv: string): string[][] {
  const rows: string[][] = [[]];
  let field = "", inQ = false;
  for (let i = 0; i < csv.length; i++) {
    const c = csv[i];
    if (inQ) {
      if (c === '"' && csv[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQ = false;
      else field += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ",") { rows[rows.length - 1].push(field); field = ""; }
      else if (c === "\n") { rows[rows.length - 1].push(field); field = ""; rows.push([]); }
      else if (c === "\r") { /* skip */ }
      else field += c;
    }
  }
  rows[rows.length - 1].push(field);
  return rows.filter((r) => r.length > 1 || r[0] !== "");
}

function Page() {
  const [t, setT] = useState("name,age\nAlice,30\nBob,25");
  let out = "";
  try {
    const rows = parseCsv(t);
    if (rows.length) {
      const [head, ...rest] = rows;
      const arr = rest.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""])));
      out = JSON.stringify(arr, null, 2);
    }
  } catch { out = ""; }
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="csv-to-json"
      intro="Convert CSV data (with header row) into a clean JSON array — RFC-4180 quoting supported."
      howTo={["Paste CSV with a header row.", "Copy the generated JSON."]}>
      <Textarea rows={8} value={t} onChange={(e) => setT(e.target.value)} className="font-mono text-sm" />
      <Textarea rows={10} value={out} readOnly className="mt-3 font-mono text-sm" />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}