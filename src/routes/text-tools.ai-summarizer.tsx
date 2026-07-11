import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { summarizeText } from "@/lib/ai.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea, Select, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/ai-summarizer")({
  head: () => toolHead("text-tools", "ai-summarizer"),
  component: AiSummarizer,
});

function AiSummarizer() {
  const run = useServerFn(summarizeText);
  const [text, setText] = useState("");
  const [length, setLength] = useState("short");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");
    setOutput("");
    try {
      const result = await run({ data: { text, length } });
      if (result.error) setError(result.error);
      else setOutput(result.text);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="ai-summarizer"
      intro="Paste any article, essay, report, or note and get a clean, accurate summary in seconds. Choose short, medium, or long depending on how much detail you need."
      howTo={[
        "Paste or type the text you want to summarize into the box.",
        "Pick a summary length — short for a quick gist, long for detailed key points.",
        "Click Summarize and copy the result with one click.",
      ]}
      note="This tool sends your text to an AI service to generate the summary. Avoid pasting sensitive personal information."
    >
      <div className="space-y-4">
        <Textarea rows={10} placeholder="Paste your text here (up to ~20,000 characters)…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap items-end gap-3">
          <div className="w-44">
            <Label htmlFor="len">Summary length</Label>
            <Select id="len" value={length} onChange={(e) => setLength(e.target.value)}>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </Select>
          </div>
          <Button onClick={submit} disabled={loading || !text.trim()}>
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Summarizing…" : "Summarize"}
          </Button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {output && (
          <div className="space-y-3">
            <Textarea rows={8} readOnly value={output} />
            <CopyButton text={output} label="Copy summary" />
          </div>
        )}
      </div>
    </ToolShell>
  );
}