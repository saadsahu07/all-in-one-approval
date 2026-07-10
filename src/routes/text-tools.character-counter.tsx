import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Textarea, Card } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/character-counter")({
  head: () => ({
    meta: [
      { title: "Character Counter — With & Without Spaces | ToolHarbor" },
      { name: "description", content: "Count characters with and without spaces, plus lines and words. Perfect for tweets, meta descriptions, and SMS. Free online." },
      { property: "og:title", content: "Character Counter | ToolHarbor" },
      { property: "og:description", content: "Count characters with and without spaces instantly." },
    ],
  }),
  component: CharacterCounter,
});

function CharacterCounter() {
  const [text, setText] = useState("");
  const stats = useMemo(() => {
    const noSpaces = text.replace(/\s/g, "").length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text ? text.split("\n").length : 0;
    return { chars: text.length, noSpaces, words, lines };
  }, [text]);

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="character-counter"
      intro="Count every character in your text — with spaces, without spaces, words, and lines. Handy for character-limited fields like meta descriptions, tweets, and ads."
      howTo={[
        "Paste or type your text into the box.",
        "All counts update instantly.",
        "Use the 'without spaces' count for strict character limits.",
      ]}
    >
      <div className="space-y-5">
        <Textarea rows={10} placeholder="Start typing or paste your text…" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Characters", stats.chars],
            ["Without spaces", stats.noSpaces],
            ["Words", stats.words],
            ["Lines", stats.lines],
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