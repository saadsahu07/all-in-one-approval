import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useMemo, useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Input, Label, Select, Button, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/developer-tools/lorem-ipsum-generator")({
  head: () => toolHead("developer-tools", "lorem-ipsum-generator"),
  component: Page,
});

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(" ");

function pick(seed: () => number) {
  return WORDS[Math.floor(seed() * WORDS.length)];
}
function makeSentence(seed: () => number) {
  const len = 6 + Math.floor(seed() * 10);
  const words = Array.from({ length: len }, () => pick(seed));
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}
function makeParagraph(seed: () => number, startsClassic = false) {
  const count = 4 + Math.floor(seed() * 4);
  const arr = Array.from({ length: count }, () => makeSentence(seed));
  if (startsClassic) arr[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return arr.join(" ");
}

function Page() {
  const [unit, setUnit] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [count, setCount] = useState(3);
  const [classic, setClassic] = useState(true);
  const [tick, setTick] = useState(0);

  const output = useMemo(() => {
    let s = tick + 1;
    const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const n = Math.max(1, Math.min(50, count));
    if (unit === "words") {
      const w = Array.from({ length: n }, () => pick(rand));
      w[0] = w[0][0].toUpperCase() + w[0].slice(1);
      return w.join(" ") + ".";
    }
    if (unit === "sentences") return Array.from({ length: n }, () => makeSentence(rand)).join(" ");
    return Array.from({ length: n }, (_, i) => makeParagraph(rand, classic && i === 0)).join("\n\n");
  }, [unit, count, classic, tick]);

  return (
    <ToolShell
      categorySlug="developer-tools"
      toolSlug="lorem-ipsum-generator"
      intro="Generate Lorem Ipsum placeholder text by paragraphs, sentences, or word count."
      howTo={["Choose paragraphs, sentences, or words.", "Enter how many you need.", "Copy the generated text."]}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <Label>Unit</Label>
            <Select value={unit} onChange={(e) => setUnit(e.target.value as typeof unit)} className="mt-1">
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </Select>
          </div>
          <div>
            <Label>Count</Label>
            <Input type="number" min={1} max={50} value={count} onChange={(e) => setCount(+e.target.value)} className="mt-1" />
          </div>
          <div className="flex items-end">
            <Button onClick={() => setTick((t) => t + 1)} className="w-full">Regenerate</Button>
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" checked={classic} onChange={(e) => setClassic(e.target.checked)} />
          Start with the classic "Lorem ipsum dolor sit amet…"
        </label>
        <Textarea rows={12} readOnly value={output} className="whitespace-pre-wrap text-sm" />
        <CopyButton text={output} />
      </div>
    </ToolShell>
  );
}
