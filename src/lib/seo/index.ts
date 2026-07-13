/**
 * Rich per-tool SEO data (intro paragraphs, feature bullets, FAQ entries)
 * is sharded by category and lazy-loaded on demand. This keeps the initial
 * JS bundle small — the full SEO catalog is ~76 KB and only one shard is
 * ever needed per page view.
 *
 * The lightweight title/description map used for SSR `head()` lives in
 * `./titles.ts` and is bundled eagerly.
 */
import type { ToolSeo } from './types';

// Category slug → dynamic import of that category's SEO shard. Vite turns
// each import() into its own chunk so unrelated categories aren't fetched.
const loaders: Record<string, () => Promise<{ seo: Record<string, ToolSeo> }>> = {
  "content-creation": () => import("./content-creation"),
  "text-tools": () => import("./text-tools"),
  "image-tools": () => import("./image-tools"),
  "pdf-tools": () => import("./pdf-tools"),
  "developer-tools": () => import("./developer-tools"),
  "calculators": () => import("./calculators"),
};

/**
 * Load the rich SEO entry for a tool path (e.g. `/text-tools/word-counter`).
 * Returns `undefined` when the category shard doesn't exist or the tool has
 * no registered SEO — callers should fall back to their static `intro` prop.
 */
export async function loadToolSeo(path: string): Promise<ToolSeo | undefined> {
  const cat = path.split("/")[1];
  const load = loaders[cat];
  if (!load) return undefined;
  const mod = await load();
  return mod.seo[path];
}
