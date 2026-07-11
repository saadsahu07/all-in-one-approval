import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/json-formatter")({
  head: () => toolHead("developer-tools", "json-formatter"),
  component: Page,
});

function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const format = (indent: number) => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, indent));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };
  return (
    <ToolShell categorySlug="developer-tools" toolSlug="json-formatter"
      intro="Paste JSON to pretty-print it with proper indentation."
      howTo={["Paste your JSON.", "Pick 2 or 4 space indent.", "Copy the formatted output."]}>
      <Textarea rows={8} value={input} onChange={(e) => setInput(e.target.value)} placeholder='{"hello":"world"}' />
      <div className="mt-3 flex flex-wrap gap-2">
        <Button onClick={() => format(2)}>Format (2 spaces)</Button>
        <Button variant="outline" onClick={() => format(4)}>Format (4 spaces)</Button>
        <Button variant="outline" onClick={() => { try { setOutput(JSON.stringify(JSON.parse(input))); setError(""); } catch (e) { setError((e as Error).message); } }}>Minify</Button>
      </div>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
      {output && (
        <div className="mt-4">
          <Textarea rows={10} value={output} readOnly />
          <div className="mt-2"><CopyButton text={output} /></div>
        </div>
      )}
    </ToolShell>
  );
}