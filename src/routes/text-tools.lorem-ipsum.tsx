import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label, Select, Textarea } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/lorem-ipsum")({
  head: () => toolHead("text-tools", "lorem-ipsum"),
  component: LoremIpsum,
});

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(" ");

function randSentence(): string {
  const len = 8 + Math.floor(Math.random() * 10);
  const words = Array.from({ length: len }, () => WORDS[Math.floor(Math.random() * WORDS.length)]);
  const s = words.join(" ");
  return s.charAt(0).toUpperCase() + s.slice(1) + ".";
}

function LoremIpsum() {
  const [count, setCount] = useState(3);
  const [unit, setUnit] = useState("paragraphs");
  const [output, setOutput] = useState("");

  const generate = () => {
    const n = Math.min(Math.max(count, 1), 100);
    if (unit === "words") {
      const words = Array.from({ length: n }, () => WORDS[Math.floor(Math.random() * WORDS.length)]);
      setOutput(words.join(" "));
    } else if (unit === "sentences") {
      setOutput(Array.from({ length: n }, randSentence).join(" "));
    } else {
      const paras = Array.from({ length: n }, () =>
        Array.from({ length: 4 + Math.floor(Math.random() * 4) }, randSentence).join(" "),
      );
      setOutput(paras.join("\n\n"));
    }
  };

  return (
    <ToolShell
      categorySlug="text-tools"
      toolSlug="lorem-ipsum"
      intro="Generate classic lorem ipsum filler text for layouts, mockups, and prototypes — by paragraph, sentence, or word."
      howTo={[
        "Choose how many paragraphs, sentences, or words you need.",
        "Click Generate.",
        "Copy the placeholder text into your design.",
      ]}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-end gap-3">
          <div className="w-28">
            <Label htmlFor="count">Amount</Label>
            <Input id="count" type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} />
          </div>
          <div className="w-44">
            <Label htmlFor="unit">Unit</Label>
            <Select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </Select>
          </div>
          <Button onClick={generate}>Generate</Button>
        </div>
        {output && (
          <div className="space-y-3">
            <Textarea rows={12} readOnly value={output} />
            <CopyButton text={output} />
          </div>
        )}
      </div>
    </ToolShell>
  );
}