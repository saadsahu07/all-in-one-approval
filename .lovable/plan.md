
# SEO plan for ToolsHive

Site: https://all-in-one-approval.lovable.app · 55 tools, 6 categories, blog

## Where we stand (audit)

Already in place (do not redo):
- Per-route `head()` via `toolHead()` — title, description, og:*, canonical
- Absolute canonical + og:url self-referencing every route
- WebSite + Organization JSON-LD in `__root.tsx`; SoftwareApplication + BreadcrumbList + HowTo + FAQPage per tool in `ToolShell`
- Dynamic `sitemap.xml` server route covering categories, tools, blog, legal
- `robots.txt` with sitemap directive
- Sharded rich SEO copy (intro / features / FAQs) per category

Open scanner findings:
- `lighthouse:lighthouse_performance` — LCP slow on the published homepage
- `gsc:gsc` — Google Search Console not connected / sitemap not submitted

Gaps we found reading the code:
- Root title/description say "50" tools, actual count is 55 — inconsistency
- No `og:image` anywhere (WhatsApp/Slack/X share previews will be blank or platform-generated)
- Hero has no LCP element hint (no dominant image, so LCP is the H1 text — currently unoptimized)
- Google Fonts loaded via `<link rel="stylesheet">` — render-blocking on first paint
- No breadcrumb JSON-LD on category pages, only on tool pages
- No `ItemList` JSON-LD on the homepage or category pages (loses rich results for tool grids)
- No hreflang / language tag beyond `<html lang="en">` (fine, monolingual)
- Blog list page has no `Blog` schema
- No 404-specific `noindex` (soft-404 risk)

## Phase 1 — Ship the two scanner findings

1. **Fix LCP on the homepage**
   - The LCP element is the H1 "The intelligent toolkit for modern workflows". Web fonts (Space Grotesk) are the bottleneck.
   - Add `&display=swap` — already present, good. Add `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the single Space Grotesk 600 weight actually used in the H1, in `__root.tsx` `head().links`.
   - Add `fetchpriority="high"` on the logo `<img>` (currently the only above-the-fold image) and keep the width/height already set.
   - Confirm no `loading="lazy"` on any above-the-fold image.
   - Publish after the fix — Lighthouse re-scans the published site, not preview.

2. **Connect Google Search Console**
   - Call `standard_connectors--connect` with `connector_id: "google_search_console"` in the chat where the user is ready to authorize (requires their OAuth click).
   - After connection: verify ownership of `https://all-in-one-approval.lovable.app/`, submit `/sitemap.xml`.
   - Mark both findings fixed via `update_findings`.

## Phase 2 — Fix on-page metadata gaps

3. **Homepage & root copy consistency**
   - Update root `__root.tsx` title/description to say "55" (or a rounder phrase like "50+" if we want to add more without a copy edit). Match the value used in the homepage `head()`.

4. **Add site-wide `og:image` (share preview)**
   - Generate one 1200×630 branded image (dark navy + accent, "ToolsHive · 55 free tools") and save to `src/assets/og-cover.jpg` (imported so Vite fingerprints it).
   - Add `og:image` + `twitter:image` on the **homepage** `head()` only (never in `__root.tsx` — root concatenates into every match and would override leaf images).
   - Category and tool routes get their own leaf-level `og:image` (see phase 3).

5. **`toolHead()` — add og:image per tool**
   - Extend `toolHead()` to emit `og:image` + `twitter:image` per tool. Two options; recommend a single generated per-category cover (6 images total) so we don't need 55 assets.
   - Store as `og-<category>.jpg` in `src/assets/` and map by categorySlug.

## Phase 3 — Structured data expansion

6. **Category pages**: add `BreadcrumbList` + `ItemList` JSON-LD in `category-page.tsx` — one `ListItem` per tool with `url`, `name`, `position`. Rich results eligibility for "list" carousels.

7. **Homepage**: add `ItemList` JSON-LD of all 55 tools (or top 20) to `src/routes/index.tsx` head scripts.

8. **Blog list**: add `Blog` + `ItemList` JSON-LD to `blog.index.tsx`; the individual `blog.$slug.tsx` should already emit `Article` — verify and add if missing.

9. **404 route**: add `<meta name="robots" content="noindex">` to `NotFoundComponent`'s head to prevent soft-404 indexing.

## Phase 4 — Discoverability & internal linking

10. **Internal linking**:
    - Every tool page already shows "Related tools" + a linked blog guide when one exists — good.
    - Add a compact "More in this category" strip on category pages (already present, verify).
    - Add contextual links from top blog posts back to their tool (via `postsMeta.toolPath`) — already present in ToolShell reverse direction; add the forward direction in `blog.$slug.tsx` if not there.

11. **Anchor text hygiene**: audit `<Link>` labels — no "click here" / "read more" alone. Prefer descriptive labels matching the target page's H1 keyword.

## Phase 5 — Content & keyword targeting

12. **Keyword-driven title rewrite** (top 10 highest-traffic tools):
    - Run `semrush--keyword_research` for each tool's primary phrase (e.g. "word counter", "json formatter", "pdf compressor", "qr code generator", "image compressor", "background remover", "password generator", "youtube tag generator", "base64 encoder", "grammar checker").
    - Rewrite `seoTitles[path].title` to lead with the highest-volume phrase we can realistically rank for (KDI <50 given a new site's AS).
    - Same treatment for `metaDescription` — include the phrase + a benefit + a soft CTA under 155 chars.

13. **New blog posts** — publish one guide per high-value tool that doesn't have one yet. Each post: 800–1500 words, targeted to a long-tail phrase (e.g. "how to compress a pdf without losing quality"), links back to the tool with descriptive anchor text.

14. **Competitor gap analysis**: run `semrush--competitive_analysis` for the site to auto-discover competitors, then `semrush--serp_analysis` on 3–5 phrases we want to own. Only target phrases with KDI ≤ 40 initially.

## Phase 6 — Performance (SEO is downstream of Core Web Vitals)

15. Already shipped: SEO shard lazy-loading, `defaultPreload: "intent"`, memoized ToolShell schema, search index precomputed.
16. Remaining: preload the single web font weight used above the fold (see #1), self-host the two font families (drop `fonts.googleapis.com` dependency entirely) to remove one third-party origin.
17. Add `Cache-Control: public, max-age=86400, s-maxage=604800` on `sitemap.xml` response (currently 3600s — safe to lengthen for a mostly-static route list).

## Phase 7 — Verification loop

18. After each phase, ask the user to click **Rescan** in the SEO tab.
19. When the LCP finding clears, publish and let Lighthouse re-check the live URL.
20. Once GSC has 7+ days of data, run `semrush--seo_trend` monthly and `semrush--page_analysis` on the tools ranking on page 2 — one-off content refreshes turn page-2 rankings into page-1 wins faster than any new page.

## Technical notes (safe to skim)

- `og:image` MUST live on leaf routes, never `__root.tsx` — the root head concatenates into every match.
- Canonical stays leaf-only (already correct); root has no canonical.
- All new schema goes through `head().scripts` with `type: "application/ld+json"`, not a raw `<script>` in JSX.
- Font preload is a `head().links` entry: `{ rel: "preload", as: "font", type: "font/woff2", href: "...", crossOrigin: "anonymous" }`.
- Any published-site changes (LCP, meta, images) only affect crawlers after **publish**, not preview.
