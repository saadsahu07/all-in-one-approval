/**
 * Reusable UI shell for lightweight AI text-generation tools.
 *
 * Each tool declares its input fields + a `taskId` (registered in
 * `src/lib/content-tasks.functions.ts`) and the shell handles state,
 * submission, error display, and rendering the AI output as a copyable
 * list (splitting on '---' or numbered items).
 */
import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { generateContent } from "@/lib/content-tasks.functions";
import { ToolShell, CopyButton } from "@/components/tool-shell";
import { Button, Input, Label, Select, Textarea } from "@/components/ui-primitives";

export type Field =
  | { name: string; label: string; kind: "input"; placeholder?: string; required?: boolean }
  | { name: string; label: string; kind: "textarea"; placeholder?: string; rows?: number; required?: boolean }
  | { name: string; label: string; kind: "select"; options: { value: string; label: string }[] };

export interface ContentGenToolProps {
  categorySlug: string;
  toolSlug: string;
  taskId: string;
  buttonLabel: string;
  intro: string;
  howTo: string[];
  fields: Field[];
  /** How to split the raw AI text into items. Default: split on '---' lines. */
  splitMode?: "separator" | "numbered" | "hashtags" | "raw";
  note?: string;
}

export function ContentGenTool(props: ContentGenToolProps) {
  const run = useServerFn(generateContent);
  const initial = useMemo(() => {
    const o: Record<string, string> = {};
    for (const f of props.fields) {
      o[f.name] = f.kind === "select" ? f.options[0]?.value ?? "" : "";
    }
    return o;
  }, [props.fields]);
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const mainField = props.fields.find((f) => (f.kind === "input" || f.kind === "textarea") && f.required)?.name
    ?? props.fields[0]?.name;
  const mainValue = mainField ? values[mainField] ?? "" : "";

  const items = useMemo(() => {
    if (!raw) return [] as string[];
    const mode = props.splitMode ?? "separator";
    if (mode === "raw") return [raw.trim()];
    if (mode === "hashtags") {
      return raw
        .split(/\s+/)
        .map((h) => h.trim())
        .filter((h) => h.startsWith("#") && h.length > 1);
    }
    if (mode === "numbered") {
      return raw
        .split("\n")
        .map((l) => l.replace(/^\s*\d+[.)\-\s]+/, "").replace(/^["'\s]+|["'\s]+$/g, "").trim())
        .filter((l) => l.length > 0);
    }
    // "separator" — split on lines that are just '---'
    return raw
      .split(/\n---+\n/)
      .map((chunk) => chunk.trim())
      .filter((c) => c.length > 0);
  }, [raw, props.splitMode]);

  const submit = async () => {
    setLoading(true);
    setError("");
    setRaw("");
    try {
      const result = await run({ data: { taskId: props.taskId, values } });
      if (result.error) setError(result.error);
      else setRaw(result.text);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const setValue = (name: string, v: string) => setValues((prev) => ({ ...prev, [name]: v }));

  return (
    <ToolShell
      categorySlug={props.categorySlug}
      toolSlug={props.toolSlug}
      intro={props.intro}
      howTo={props.howTo}
      note={props.note}
    >
      <div className="space-y-4">
        {props.fields.map((f) => (
          <div key={f.name}>
            <Label htmlFor={`cg-${f.name}`}>{f.label}</Label>
            {f.kind === "textarea" ? (
              <Textarea
                id={`cg-${f.name}`}
                rows={f.rows ?? 3}
                placeholder={f.placeholder}
                value={values[f.name] ?? ""}
                onChange={(e) => setValue(f.name, e.target.value)}
              />
            ) : f.kind === "select" ? (
              <Select
                id={`cg-${f.name}`}
                value={values[f.name] ?? ""}
                onChange={(e) => setValue(f.name, e.target.value)}
              >
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </Select>
            ) : (
              <Input
                id={`cg-${f.name}`}
                placeholder={f.placeholder}
                value={values[f.name] ?? ""}
                onChange={(e) => setValue(f.name, e.target.value)}
              />
            )}
          </div>
        ))}
        <Button onClick={submit} disabled={loading || !mainValue.trim()}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Generating…" : props.buttonLabel}
        </Button>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {items.length > 0 && (
          <div className="space-y-2">
            {props.splitMode === "hashtags" && (
              <div className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <p className="text-sm break-words">{items.join(" ")}</p>
                <CopyButton text={items.join(" ")} label="Copy all" />
              </div>
            )}
            {props.splitMode !== "hashtags" && items.map((t, i) => (
              <div
                key={`${i}-${t.slice(0, 20)}`}
                className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3"
              >
                <span className="text-sm whitespace-pre-wrap">
                  <span className="mr-2 font-semibold text-muted-foreground">{i + 1}.</span>
                  {t}
                </span>
                <CopyButton text={t} label="Copy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolShell>
  );
}