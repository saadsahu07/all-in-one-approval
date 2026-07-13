import type { ToolSeo } from './types';

const loaders: Record<string, () => Promise<{ seo: Record<string, ToolSeo> }>> = {
  "content-creation": () => import("./content-creation"),
  "text-tools": () => import("./text-tools"),
  "image-tools": () => import("./image-tools"),
  "pdf-tools": () => import("./pdf-tools"),
  "developer-tools": () => import("./developer-tools"),
  "calculators": () => import("./calculators"),
};

export async function loadToolSeo(path: string): Promise<ToolSeo | undefined> {
  const cat = path.split("/")[1];
  const load = loaders[cat];
  if (!load) return undefined;
  const mod = await load();
  return mod.seo[path];
}
