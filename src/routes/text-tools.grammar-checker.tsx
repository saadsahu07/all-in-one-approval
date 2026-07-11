import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { checkGrammar } from "@/lib/ai.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/grammar-checker")({
  head: () => toolHead("text-tools", "grammar-checker"),
  component: GrammarChecker,
});

function GrammarChecker() {
  const run = useServerFn(checkGrammar);
  const [text, setText] = useState("");
  const [corrected, setCorrected] = useState("");
  const [changes, setChanges] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");
    setCorrected("");
    setChanges("");
    try {
      const result = await run({ data: { text } });
      if (result.error) {
        setError(result.error);
      } else {
        const [fixed, ...rest] = result.text.split("\n---\n");
        setCorrected((fixed ?? "").trim());
        setChanges(rest.join("\n---\n").trim());
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="grammar-checker"
      intro="Paste your writing and get a corrected version plus a list of every fix made — grammar, spelling, and punctuation."
      howTo={[
        "Paste your text into the box below.",
        "Click Check Grammar and wait a few seconds.",
        "Review the corrected text and the list of changes, then copy the result.",
      ]}
      note="This tool sends your text to an AI service for checking. Avoid pasting sensitive personal information."
    >
      <div className="space-y-4">
        <Textarea rows={10} placeholder="Paste text to check…" value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={submit} disabled={loading || !text.trim()}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Checking…" : "Check Grammar"}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {corrected && (
          <div className="space-y-3">
            <Textarea rows={8} readOnly value={corrected} />
            <CopyButton text={corrected} label="Copy corrected text" />
            {changes && (
              <div className="rounded-md border border-border bg-secondary px-4 py-3 text-sm">
                <p className="font-semibold">Changes made</p>
                <pre className="mt-2 whitespace-pre-wrap font-sans text-secondary-foreground">{changes}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </ToolShell>
  );
}