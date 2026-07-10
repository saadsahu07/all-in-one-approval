import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Textarea, Card } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/word-counter")({
  head: () => ({
    meta: [
      { title: "Word Counter — Count Words & Sentences Online | ToolHarbor" },
      { name: "description", content: "Count words, characters, sentences, paragraphs, and reading time instantly as you type. Free online word counter." },
      { property: "og:title", content: "Word Counter | ToolHarbor" },
      { property: "og:description", content: "Count words, sentences, and reading time instantly." },
    ],
  }),
  component: WordCounter,
});

function WordCounter() {
  const [text, setText] = useState("");
  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const sentences = trimmed ? (trimmed.match(/[.!?]+(?=\s|$)/g)?.length ?? (trimmed ? 1 : 0)) : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean).length : 0;
    const readMin = Math.max(1, Math.round(words / 200));
    return { words, chars: text.length, sentences, paragraphs, readMin: words ? readMin : 0 };
  }, [text]);

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="word-counter"
      intro="Type or paste text and watch the counts update live — words, characters, sentences, paragraphs, and estimated reading time."
      howTo={[
        "Paste or type your text into the box.",
        "Counts update instantly as you write.",
        "Reading time assumes an average speed of 200 words per minute.",
      ]}
    >
      <div className="space-y-5">
        <Textarea rows={10} placeholder="Start typing or paste your text…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            ["Words", stats.words],
            ["Characters", stats.chars],
            ["Sentences", stats.sentences],
            ["Paragraphs", stats.paragraphs],
            ["Read time", stats.readMin ? `${stats.readMin} min` : "—"],
          ].map(([label, value]) => (
            <Card key={label as string} className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
            </Card>
          ))}
        </div>
      </div>
    </ToolShell>
  );
}