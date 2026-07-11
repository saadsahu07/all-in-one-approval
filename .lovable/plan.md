## Goal

Make every tool page (~50) individually rank-worthy on Google: unique title & description, canonical + `og:url`, keyword-targeted intro, FAQ block, and FAQPage schema — without hand-editing 50 route files for every content tweak.

## Approach: one content file drives all tool pages

Instead of scattering SEO metadata across 50 route files, centralize it in one keyed dictionary. `ToolShell` reads from it automatically for rendering (intro, FAQs, JSON-LD). Route files only need a one-line `head` helper.

### New files

- **`src/lib/tool-seo.ts`** — the SEO content dictionary, keyed by tool path.
  For each tool: `title`, `metaDescription`, `h1` (optional override), `keywords[]`, `longIntro` (2 short paragraphs targeting the primary keyword + intent), `features[]` (3–5 bullets), `faqs[]` (4–6 Q&As covering "is it free", "is it safe", "does it work on mobile", tool-specific questions).
- **`src/lib/tool-head.ts`** — exports `toolHead(categorySlug, toolSlug)` returning a TanStack `head()` object: title, meta description, `og:title`, `og:description`, `og:url`, `og:type=website`, `twitter:card`, plus `links: [{ rel: "canonical", href }]`.

### Edits

- **`src/components/tool-shell.tsx`** — look up SEO entry by `tool.path`. If present, render:
  - longer intro paragraphs above the tool UI
  - a "Features" bullet list
  - an "FAQ" section below "How to use", with proper `<h2>`/`<h3>` semantics
  - `FAQPage` JSON-LD (added to the existing `SoftwareApplication` + `BreadcrumbList` + `HowTo` array)
- **50 route files** — add `head: () => toolHead("<category-slug>", "<tool-slug>")` to each `createFileRoute` (replacing any existing hand-written head). Mechanical, done with a scripted patch.

### Copy strategy

Copy is written for search intent, not padding. Each tool targets its core keyword phrase (e.g. "word counter", "merge pdf", "background remover free") in:
- title (`<Primary Keyword> — <Benefit> | ToolHive`, ≤60 chars)
- meta description (natural sentence with keyword + differentiator, 140–160 chars)
- H1 (keyword-first)
- First sentence of intro
- One FAQ question

All 50 tools get bespoke copy in this pass — no lorem-style filler.

### Sitemap

Already dynamic; no change needed. New per-page `canonical` + `og:url` will be picked up automatically by crawlers.

## What this does NOT include

- Blog post creation (deferred — separate phase per the SEO plan)
- Backlink outreach or GSC verification (not code)
- Per-tool custom `og:image` (skipped; hosting falls back to site preview, which beats a placeholder)

## Deliverable

After this ships, every tool page has: unique indexable title/description, self-referencing canonical, ~200 words of keyword-targeted body copy, 4–6 FAQs, and rich Article + FAQ + HowTo + Breadcrumb + SoftwareApplication schema. That's the on-page SEO ceiling for a tool page — remaining ranking factors move to off-page (links, brand signals) which aren't code.

## Rough size

~50 route file edits (1 line each) + 1 content file (~50 entries × ~800 chars = ~40KB) + 2 small helpers + ToolShell changes. Roughly one large content file to author.
