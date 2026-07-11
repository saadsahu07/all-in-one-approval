import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { paraphraseText } from "@/lib/ai.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Textarea, Select, Label } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/paraphraser")({
  head: () => ({
    meta: [
      { title: "Free Paraphrasing Tool — Rewrite Text Online | ToolHive" },
      { name: "description", content: "Rewrite sentences and paragraphs in fresh words while keeping the meaning. Free AI paraphrasing tool with tone options." },
      { property: "og:title", content: "Free Paraphrasing Tool | ToolHive" },
      { property: "og:description", content: "Rewrite text in fresh words with AI, free." },
    ],
  }),
  component: Paraphraser,
});

function Paraphraser() {
  const run = useServerFn(paraphraseText);
  const [text, setText] = useState("");
  const [tone, setTone] = useState("standard");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setError("");
    setOutput("");
    try {
      const result = await run({ data: { text, tone } });
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
      toolSlug="paraphraser"
      intro="Rephrase any sentence or paragraph so it reads naturally in different words. Pick a tone to match your audience."
      howTo={[
        "Paste the text you want rewritten.",
        "Choose a tone — standard, formal, casual, or simple.",
        "Click Paraphrase and copy the rewritten version.",
      ]}
      note="This tool sends your text to an AI service for rewriting. Avoid pasting sensitive personal information."
    >
      <div className="space-y-4">
        <Textarea rows={10} placeholder="Paste text to paraphrase…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap items-end gap-3">
          <div className="w-44">
            <Label htmlFor="tone">Tone</Label>
            <Select id="tone" value={tone} onChange={(e) => setTone(e.target.value)}>
              <option value="standard">Standard</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="simple">Simple</option>
            </Select>
          </div>
          <Button onClick={submit} disabled={loading || !text.trim()}>
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Paraphrasing…" : "Paraphrase"}
          </Button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {output && (
          <div className="space-y-3">
            <Textarea rows={8} readOnly value={output} />
            <CopyButton text={output} label="Copy result" />
          </div>
        )}
      </div>
    </ToolShell>
  );
}