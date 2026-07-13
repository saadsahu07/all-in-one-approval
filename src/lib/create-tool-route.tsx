import { createFileRoute } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { toolHead } from "@/lib/tool-head";
import { ToolShell } from "@/components/tool-shell";

/**
 * Boilerplate helper for a tool page route. Each tool file used to repeat
 * `createFileRoute + toolHead + ToolShell` — this collapses them into one
 * call. Body is passed as `render` and receives no props; use hooks inside.
 */
export function createToolRoute<P extends keyof import("@tanstack/react-router").FileRoutesByPath>(opts: {
  path: P;
  categorySlug: string;
  toolSlug: string;
  intro: string;
  howTo: string[];
  note?: string;
  render: ComponentType;
}) {
  const { path, categorySlug, toolSlug, intro, howTo, note, render: Render } = opts;
  const Wrapped = () => (
    <ToolShell categorySlug={categorySlug} toolSlug={toolSlug} intro={intro} howTo={howTo} note={note}>
      <Render />
    </ToolShell>
  );
  return createFileRoute(path)({
    head: () => toolHead(categorySlug, toolSlug),
    component: Wrapped,
  });
}