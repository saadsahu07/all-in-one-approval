import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { Input } from "@/components/ui-primitives";

export const Route = createFileRoute("/text-tools/palindrome-checker")({
  head: () => toolHead("text-tools", "palindrome-checker"),
  component: Page,
});

function Page() {
  const [t, setT] = useState("");
  const clean = t.toLowerCase().replace(/[^a-z0-9]/g, "");
  const isPal = clean.length > 0 && clean === clean.split("").reverse().join("");
  return (
    <ToolShell categorySlug="text-tools" toolSlug="palindrome-checker"
      intro="Check if any word, phrase, or number reads the same forward and backward. Punctuation and spaces are ignored."
      howTo={["Type or paste text.", "See the result instantly below."]}>
      <Input value={t} onChange={(e) => setT(e.target.value)} placeholder="e.g. A man a plan a canal Panama" />
      {t && (
        <p className={"mt-4 text-lg font-semibold " + (isPal ? "text-emerald-500" : "text-destructive")}>
          {isPal ? "✓ Yes — it's a palindrome" : "✗ Not a palindrome"}
        </p>
      )}
    </ToolShell>
  );
}