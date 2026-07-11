import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/json-validator")({
  head: () => ({ meta: [{ title: "JSON Validator — ToolHive" }, { name: "description", content: "Check JSON syntax and see the exact error location." }] }),
  component: Page,
});

function Page() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="json-validator"
      intro="Validate JSON and get precise, human-readable error messages."
      howTo={["Paste JSON.", "Click Validate.", "Fix any reported issues."]}>
      <Textarea rows={10} value={input} onChange={(e) => setInput(e.target.value)} placeholder='{"key":"value"}' />
      <div className="mt-3">
        <Button onClick={() => {
          try { JSON.parse(input); setResult({ ok: true, msg: "Valid JSON ✓" }); }
          catch (e) { setResult({ ok: false, msg: (e as Error).message }); }
        }}>Validate</Button>
      </div>
      {result && (
        <p className={`mt-4 rounded-md border px-4 py-3 text-sm ${result.ok ? "border-accent text-accent" : "border-destructive text-destructive"}`}>
          {result.msg}
        </p>
      )}
    </ToolShell>
  );
}