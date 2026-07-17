import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/json-to-csv")({
  head: () => toolHead("developer-tools", "json-to-csv"),
  component: Page,
});

function esc(v: unknown): string {
  const s = v == null ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function Page() {
  const [t, setT] = useState('[{"name":"Alice","age":30},{"name":"Bob","age":25}]');
  let out = "", err = "";
  try {
    const arr = JSON.parse(t);
    if (!Array.isArray(arr) || arr.length === 0) throw new Error("Expected a non-empty array.");
    const keys = Array.from(new Set(arr.flatMap((o) => Object.keys(o ?? {}))));
    out = [keys.join(","), ...arr.map((row) => keys.map((k) => esc((row as Record<string, unknown>)?.[k])).join(","))].join("\n");
  } catch (e) { err = e instanceof Error ? e.message : "Invalid JSON"; }
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="json-to-csv"
      intro="Convert a JSON array of objects into a valid CSV string — quotes and commas are auto-escaped."
      howTo={["Paste a JSON array of objects.", "Copy the CSV output."]}>
      <Textarea rows={8} value={t} onChange={(e) => setT(e.target.value)} className="font-mono text-sm" />
      {err && <p className="mt-2 text-sm text-destructive">{err}</p>}
      <Textarea rows={10} value={out} readOnly className="mt-3 font-mono text-sm" />
      <div className="mt-2"><CopyButton text={out} /></div>
    </ToolShell>
  );
}