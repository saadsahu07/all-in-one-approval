## What already exists

- Every tool page (via `ToolShell`) already renders **intro paragraphs**, **feature bullets**, **"How to use" steps**, and — for tools with SEO shards — an **FAQ accordion** and a **"Read the full guide" blog link**.
- 50 tools have blog posts (~1500-word long-form). 10 tools have no blog post and no FAQs.

## What's missing vs your ask

1. **Inline ~500-word "How to use" article on the tool page itself.** Currently we only show short steps + a link out. You want the full mini-guide right below the tool.
2. **FAQs missing on 10 tools** (all image-tools/pdf-tools already have them — my earlier grep was wrong; the real gap is the 10 below).
3. **Blog posts missing** for those same 10 tools.

Missing SEO shards **and** blog posts (10 tools):

```text
text-tools:       slugify
developer-tools:  uuid-generator, jwt-decoder
calculators:      tip, discount
content-creation: youtube-tag-generator, youtube-title-generator,
                  youtube-description-generator, youtube-thumbnail-downloader,
                  youtube-video-idea-generator
```

## Approach

### Structural change (one-time, batch 1)

- Extend `ToolSeo` type with an optional `guide: string` field (markdown-style: `##` headings, paragraphs, `-` bullets, `**bold**`).
- Add a new section in `ToolShell` rendered **below the tool UI, above FAQs**:
  - Heading: "How to use — the full guide"
  - Renders the `guide` markdown using the same lightweight renderer already in `blog.$slug.tsx` (extracted to `src/lib/render-md.tsx` so both use it).
  - Below the article, a prominent CTA card linking to the full blog post (`Read the complete guide →`).
- Adjust ordering: **Tool UI → 500-word inline guide → FAQs → Full blog CTA → Related tools**.

### Content batches (unique, hand-written)

Given 60 tools × ~500 words = ~30k words plus 10 new blog posts (~15k words) = ~45k words of hand-written content, I'll ship it in batches over multiple turns:

- **Batch 1 (this turn):** Structure + first 10 tools' guides (all text-tools) + fill the 10 missing SEO shards (so every tool at least has FAQs) + 10 missing blog posts.
- **Batch 2:** 10 image-tools guides.
- **Batch 3:** 10 pdf-tools guides.
- **Batch 4:** 12 developer-tools guides.
- **Batch 5:** 12 calculator guides.
- **Batch 6:** 5 content-creation guides.

After each batch you can review the tone/length and I'll continue. Say **"continue"** to move to the next batch.

## Files touched in batch 1

- `src/lib/seo/types.ts` — add `guide?: string`.
- `src/lib/render-md.tsx` — new shared markdown renderer.
- `src/components/tool-shell.tsx` — render `guide` section + repositioned blog CTA.
- `src/routes/blog.$slug.tsx` — swap inline renderer for the shared one (no visual change).
- `src/lib/seo/text-tools.ts` — add `guide` on all 11 text-tools + new `slugify` entry with FAQs + guide.
- `src/lib/seo/developer-tools.ts` — add `uuid-generator` and `jwt-decoder` entries.
- `src/lib/seo/calculators.ts` — add `tip` and `discount` entries.
- `src/lib/seo/content-creation.ts` — add 5 YouTube-tool entries.
- `src/lib/blog-meta.ts` — add 10 missing blog post entries.
- `src/lib/blog-content.ts` — add 10 missing blog post bodies.

## Confirm

Reply **"go"** to start batch 1, or **"change plan"** with adjustments (e.g. skip blog posts, shorter guides, different batch order).