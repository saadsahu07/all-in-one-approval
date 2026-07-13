# Refactor & Optimization Plan

Goal: reduce duplication, shrink bundle, speed up first paint, and harden SSR — without changing any user-visible feature or design.

Current shape: 73 route files, 55 tool pages, ~76 KB `tool-seo.ts`, ~14 KB `blog-meta.ts`, one 237-line home page, one 281-line header. Typecheck is clean; no runtime errors. So this is pure structural improvement.

---

## Phase 1 — Kill duplication in tool routes (low risk, high payoff)

Every tool page repeats the same skeleton: `createFileRoute` → `toolHead` → `ToolShell` → tiny body. Extract the boilerplate.

Steps:
1. Add `src/lib/create-tool-route.ts` exporting `createToolRoute({ category, slug, intro, howTo, component, note? })` that returns the `{ head, component }` object for `createFileRoute`.
2. Convert 55 tool routes to use it. Each file drops from ~30 lines to ~15.
3. Extract shared tool UI atoms into `src/components/tool-parts.tsx`: `TwoColumnIO`, `ResultBox`, `ActionRow` (used by 20+ tools).
4. Move duplicated inline helpers (`downloadBlob`, `downloadText`, `copyToClipboard`) into `src/lib/dom-utils.ts` — `tool-shell.tsx` already has them; centralize and re-export.

## Phase 2 — Split the SEO data blob

`src/lib/tool-seo.ts` is 76 KB and imported by `tool-head.ts` and `tool-shell.tsx`. Every route pulls the whole map.

Steps:
1. Shard by category: `src/lib/seo/text-tools.ts`, `.../developer-tools.ts`, etc.
2. Change `getToolSeo(path)` to `async` and dynamic-`import()` the matching shard on demand.
3. In routes, read SEO in `head()` synchronously via a small per-route inline object (title + description only); keep the rich FAQ/features shard for the component render where it can be lazy.
4. Same treatment for `blog-meta.ts` (shard per year or per category if it keeps growing).

Expected result: main bundle drops ~60 KB gzipped; each tool page loads only its own SEO chunk.

## Phase 3 — Route-tree hygiene

1. Convert flat `category.tool.tsx` files into folder form only if editor navigation suffers — otherwise leave (dot form is idiomatic in TanStack and already works). Decision: keep flat.
2. Introduce a pathless layout `src/routes/_tool.tsx` that renders `<Outlet />` and owns `<ToolShell>` chrome via context, so every tool page renders only its interactive body. Not required, but removes the `ToolShell` wrapper import from 55 files.
3. Verify every route has `errorComponent` + `notFoundComponent` (root already does; leaf tool routes currently rely on the root — acceptable, document it).

## Phase 4 — Component decomposition

1. `src/routes/index.tsx` (237 lines): split into `<HeroSection>`, `<PersonalizedSection>`, `<CategoriesSection>`, `<AllToolsSection>`, `<TrustSection>` under `src/components/home/`. Keeps the route file to routing + composition.
2. `src/components/site-chrome.tsx` (281 lines): extract `<HeaderSearch>` (input + suggestions dropdown + keyboard nav) and `<MobileNav>` into their own files. Suggestions logic moves into `useSearchSuggestions(query)` hook in `src/hooks/`.
3. `src/components/tool-shell.tsx`: split render-only sections (`<ToolBreadcrumbs>`, `<ToolHeader>`, `<ToolFaqs>`, `<RelatedTools>`) so `ToolShell` becomes a thin composition.

## Phase 5 — Rendering & performance

1. Convert the "All 55 tools" list on the home page to render only the first ~12 statically and hydrate the rest behind an intersection observer (`useInView`). Big DOM win on mobile.
2. Preload the LCP hero background/gradient via `head().links` on `/` only.
3. Convert any `<img>` in tool pages to explicit `width`/`height` to eliminate CLS; enable `loading="lazy"` and `decoding="async"` project-wide via a `<SafeImage>` wrapper.
4. Add `defaultPreloadStaleTime: 0` review in `src/router.tsx` (confirm current setting matches guidance) and enable `defaultPreload: "intent"` on internal links so hovered links warm their chunk.
5. Audit `framer-motion`, `lucide-react` icon imports — ensure named imports only (already the case; verify no `import * as Icons from "lucide-react"`).

## Phase 6 — SSR safety pass

1. Anywhere `localStorage`/`window` is read in `useState` initializers (favorites, recent, theme), move to `useEffect` + `useHydrated()` to eliminate hydration mismatches like the `data-tsd-source` drift observed today.
2. Ensure all `Date.now()`, `Math.random()`, and locale formatting are gated to `useEffect` or SSR-shared seeds.
3. Verify `src/server.ts` still wraps the SSR entry with lazy import + response normalizer (per SSR-hardening playbook).

## Phase 7 — Type & lint tightening

1. Turn on `noUncheckedIndexedAccess` in `tsconfig.json`, then fix the (probably small) fallout — mostly `tools.find(...)!` bangs.
2. Add an ESLint rule (`no-restricted-imports`) forbidding `react-router-dom`, `next/*`, and deep `@tanstack/*` paths to prevent regressions.
3. Add `eslint-plugin-jsx-a11y` recommended set — surface unlabeled buttons/inputs across the tools.

## Phase 8 — Test & CI safety net

1. Add Vitest with 3 smoke tests: `getCategory`, `getToolSeo`, `postsMeta` shape.
2. Add a Playwright script under `tests/mobile-overflow.spec.ts` that asserts `document.scrollWidth <= innerWidth` on `/`, `/blog`, `/search`, and a sample tool at 320/375/430 — locks in the responsive fix we just shipped.
3. Wire `bun run typecheck && bun run test` into a single `bun run verify` script.

## Phase 9 — Content ops

1. Regenerate `sitemap.xml` at build time from `allTools` + `postsMeta` (already dynamic — audit and confirm freshness).
2. Add JSON-LD `ItemList` on `/` for the 55 tools (SEO — helps rich results).
3. Add `<link rel="alternate" hreflang="x-default">` on `__root` head if multilingual is ever considered (skip otherwise).

---

## Technical details

```text
src/
  components/
    home/                       ← Phase 4.1
      hero-section.tsx
      personalized-section.tsx
      categories-section.tsx
      all-tools-section.tsx
      trust-section.tsx
    header/
      header-search.tsx         ← Phase 4.2
      mobile-nav.tsx
    tool/
      tool-breadcrumbs.tsx      ← Phase 4.3
      tool-header.tsx
      tool-faqs.tsx
      related-tools.tsx
      tool-parts.tsx            ← Phase 1.3
  hooks/
    use-hydrated.ts             ← Phase 6.1
    use-search-suggestions.ts   ← Phase 4.2
  lib/
    create-tool-route.ts        ← Phase 1.1
    dom-utils.ts                ← Phase 1.4
    seo/
      index.ts                  ← Phase 2 (async getToolSeo)
      text-tools.ts
      developer-tools.ts
      image-tools.ts
      pdf-tools.ts
      calculators.ts
      content-creation.ts
```

Execution order: Phases run top-to-bottom, but 1→2→4→5 is the fastest path to visible bundle-size wins. Phases 6–8 are safety-net work — do them once the structure is stable. Each phase is independently shippable; after each, run `bun run verify` and the Playwright overflow spec before moving on.

Rollback plan: every phase is a pure refactor. If a phase regresses, revert its commit — no data or schema changes.
