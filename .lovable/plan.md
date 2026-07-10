# All-in-One Tools Website — Implementation Plan

## Goal
Multi-page, professional "all-in-one" tools site with 50 utilities across 5 categories, aimed at general users and AdSense-approval-friendly.

## Design Direction
- **Palette:** Ocean Deep — `#0c2340`, `#1a4a6e`, `#2d8a9e`, `#5cbdb9`
- **Typography:** Libre Baskerville (headings) + IBM Plex Sans (body), loaded via `<link>` in `__root.tsx`
- **Homepage:** Hero Grid — hero banner + category cards + tool grid
- **Mood:** Trustworthy, calm, professional

## Site Structure

Category landing pages + one route per tool.

```
/                              Home (hero + categories + featured tools)
/text-tools                    Text Tools index
/image-tools                   Image Tools index
/pdf-tools                     PDF Tools index
/developer-tools               Developer Tools index
/calculators                   Calculators & Converters index
/about                         About the toolkit
/contact                       Contact
/privacy-policy                Privacy policy (static, AdSense-required)
/terms                         Terms (static, AdSense-required)
/disclaimer                    Disclaimer (static, AdSense-required)
```

### Tool Routes (50)

**Text Tools** (`/text-tools/...`)
`ai-summarizer`, `grammar-checker`, `paraphraser`, `word-counter`, `character-counter`, `case-converter`, `remove-duplicate-lines`, `text-sorter`, `text-reverser`, `lorem-ipsum`

**Image Tools** (`/image-tools/...`)
`compress`, `resize`, `jpg-to-png`, `png-to-jpg`, `crop`, `background-remover`, `rotate`, `image-to-pdf`, `watermark`, `qr-code`

**PDF Tools** (`/pdf-tools/...`)
`merge`, `split`, `compress`, `pdf-to-word`, `word-to-pdf`, `pdf-to-jpg`, `jpg-to-pdf`, `rotate`, `unlock`, `page-numbers`

**Developer Tools** (`/developer-tools/...`)
`json-formatter`, `json-validator`, `base64-encode`, `base64-decode`, `url-encode`, `url-decode`, `html-minifier`, `css-minifier`, `js-minifier`, `password-generator`

**Calculators** (`/calculators/...`)
`age`, `bmi`, `percentage`, `gst-vat`, `emi`, `currency-converter`, `length`, `weight`, `temperature`, `binary-to-decimal`

## Implementation Approach

All 50 tools run **client-side in the browser** — no backend needed for v1, except:
- **AI Summarizer, Grammar Checker, Paraphraser, Background Remover** → require Lovable AI Gateway (server function using `createServerFn` + `openai/gpt-5.5`, and image AI for background removal).
- **Currency Converter** → fetches free public exchange-rate API client-side.

Everything else uses pure JS/browser APIs — Canvas (image ops), pdf-lib (PDF ops), native `atob`/`btoa`, `URL` API, etc.

## Technical Work

### 1. Design system (`src/styles.css`)
Ocean Deep palette mapped to oklch semantic tokens (`--background`, `--foreground`, `--primary`, `--accent`, etc.) with `@theme inline`. Register `--font-serif` and `--font-sans`.

### 2. Root layout (`src/routes/__root.tsx`)
- `<link>` tags for Google Fonts (Libre Baskerville + IBM Plex Sans).
- App title/description/OG metadata.
- Shared `<Header>` (logo, category nav, mobile menu) and `<Footer>` (legal links).
- Keep `QueryClientProvider` and `<Outlet />`.

### 3. Shared components (`src/components/`)
- `Header`, `Footer`, `MobileNav`
- `ToolCard`, `CategoryCard`
- `ToolLayout` — consistent shell (title, description, tool UI, "how to use" section, related tools, ad-slot placeholders)
- `CopyButton`, `DownloadButton`, `FileDropzone`

### 4. Tool implementations

**Text tools** — plain React + string manipulation. AI ones call a server function.

**Image tools** — Canvas API for compress/resize/crop/rotate/format-convert/watermark. `qrcode` package for QR. `jspdf` for image-to-PDF. Background remover → Lovable AI image edit.

**PDF tools** — `pdf-lib` for merge/split/rotate/page-numbers/unlock/compress-lite. `jspdf` + Canvas for jpg↔pdf. `pdf-to-word` and `pdf-to-jpg` use `pdfjs-dist` for rendering; word conversion produces `.docx` via `docx` package. Note PDF-to-Word fidelity is best-effort (text extraction only); UI states this clearly.

**Developer tools** — pure JS. `js-beautify` for JSON formatting, `html-minifier-terser`, `clean-css`, `terser` for minifiers (run in browser).

**Calculators** — pure JS math. Currency converter fetches `https://open.er-api.com/v6/latest/USD` client-side.

### 5. AI server functions (`src/lib/ai.functions.ts`)
- `summarizeText`, `checkGrammar`, `paraphraseText` — one `createServerFn` each, calling `openai/gpt-5.5` via Lovable AI Gateway helper (`src/lib/ai-gateway.server.ts`).
- Handles `429`/`402` errors with user-facing messages.

### 6. SEO
- Per-route `head()` with unique title, description, OG/Twitter tags.
- `public/robots.txt` allowing all crawlers.
- `public/sitemap.xml` listing every public route.
- Each tool page has a "How to use" section with real content (AdSense-friendly).

### 7. Legal pages (AdSense requirement)
Static Privacy Policy, Terms, Disclaimer, Contact, About pages with real, generic-but-substantive content and clear "not legal advice" disclaimers.

## Packages to Add
`pdf-lib`, `pdfjs-dist`, `jspdf`, `docx`, `qrcode`, `js-beautify`, `html-minifier-terser`, `clean-css`, `terser`

## Out of Scope for v1
- Server-side file storage or user accounts
- OCR / scanned-PDF text extraction
- True background removal without AI (falls back to Lovable AI)
- Batch processing across multiple files simultaneously (single-file at a time)
- Real-time collaborative editing

## Notes
- No user login; all file processing happens in the browser so uploads never leave the device (except the 4 AI tools and currency API). We'll say this on the homepage as a trust signal.
- Lovable AI Gateway will be enabled to power the AI-based tools. Uses your workspace AI credits.
- Legal-page copy is a starting template; users should review it for their jurisdiction.