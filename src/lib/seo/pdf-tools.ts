import type { ToolSeo } from './types';

export const seo: Record<string, ToolSeo> = {
  "/pdf-tools/merge": {
    title: "Merge PDF — Combine PDF Files Online Free",
    metaDescription: "Combine multiple PDF files into one document. Free online merge PDF tool — no signup, unlimited files, all processing in your browser.",
    keyword: "merge PDF",
    intro: [
      "Combine multiple PDF files into a single document in the order you want. Perfect for stitching together scanned pages, reports, and receipts.",
      "Drag to reorder before merging. Everything happens in your browser — files never leave your device.",
    ],
    features: [
      "Combine unlimited PDFs into one",
      "Drag-and-drop page reordering",
      "In-browser processing — no upload",
    ],
    faqs: [
      { q: "Is there a file limit?", a: "No hard limit, but very large merges may take longer. Total size depends on your device's memory." },
      { q: "Are my PDFs private?", a: "Yes. Merging happens entirely in your browser — nothing is uploaded to a server." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/split": {
    title: "Split PDF — Extract Pages Online Free",
    metaDescription: "Split a PDF into separate files or extract a page range. Free online split PDF tool — no signup, private, in-browser processing.",
    keyword: "split PDF",
    intro: [
      "Extract a page range from any PDF into a brand-new file. Great for grabbing a single chapter, submitting a specific section, or removing sensitive pages.",
      "Splitting is fast and private — no uploads, no signup, no watermark.",
    ],
    features: [
      "Extract any page range",
      "Preserves original page quality",
      "Instant download of the new PDF",
    ],
    faqs: [
      { q: "Can I split into more than one file?", a: "Yes — repeat the extraction with different page ranges to produce multiple PDFs." },
      { q: "Is my PDF uploaded anywhere?", a: "No. Splitting happens entirely in your browser." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/compress": {
    title: "Compress PDF — Reduce PDF File Size Free",
    metaDescription: "Shrink PDF file size for email and upload with basic optimization. Free online compress PDF tool — no signup, private, in-browser.",
    keyword: "compress PDF",
    intro: [
      "Reduce the size of any PDF so it fits under email or upload limits. Basic optimization removes redundant data and re-encodes images conservatively.",
      "All compression runs in your browser — the PDF and its contents never leave your device.",
    ],
    features: [
      "Fast in-browser PDF compression",
      "Preserves text quality",
      "Works with multi-hundred-page files",
    ],
    faqs: [
      { q: "How much smaller will my PDF be?", a: "Savings depend heavily on the source. Image-heavy PDFs shrink the most; text-only PDFs are usually already small." },
      { q: "Will text remain searchable?", a: "Yes. Text layers are preserved so the PDF remains searchable and copyable." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/pdf-to-word": {
    title: "PDF to Word — Extract PDF Text Online Free",
    metaDescription: "Extract PDF text into an editable Word document. Free online PDF to Word converter — no signup, private, in-browser processing.",
    keyword: "PDF to Word",
    intro: [
      "Turn any PDF into an editable Word (.docx) document. Text is extracted and formatted so you can edit, quote, or reuse the content.",
      "Great for updating old contracts, editing reports, or repurposing content — no signup and everything is processed in your browser.",
    ],
    features: [
      "Extract text into an editable .docx file",
      "Preserves paragraphs and basic formatting",
      "Works with text-based PDFs",
    ],
    faqs: [
      { q: "Does it work on scanned PDFs?", a: "This tool extracts existing text layers. Scanned PDFs need OCR before extraction and may return no text." },
      { q: "Will the layout be perfect?", a: "Basic paragraph structure is preserved, but complex layouts (multi-column, tables) may need light cleanup in Word." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/word-to-pdf": {
    title: "Word to PDF — Convert DOCX to PDF Online Free",
    metaDescription: "Convert Word documents into PDF files instantly. Free online Word to PDF converter — no signup, in-browser, no watermark.",
    keyword: "Word to PDF",
    intro: [
      "Convert Word (.docx) documents to clean, share-ready PDFs. Perfect for submitting assignments, contracts, and reports where the recipient expects PDF.",
      "Conversion happens in your browser — nothing is uploaded.",
    ],
    features: [
      "Convert .docx to shareable PDF",
      "Preserves text formatting",
      "No watermark on the output",
    ],
    faqs: [
      { q: "Which Word versions are supported?", a: "Modern .docx files created in Word 2007+ or Google Docs export." },
      { q: "Are my documents private?", a: "Yes. Conversion happens entirely in your browser — documents never leave your device." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/pdf-to-jpg": {
    title: "PDF to JPG — Convert PDF Pages to Images Free",
    metaDescription: "Turn each PDF page into a JPG image. Free online PDF to JPG converter — high-quality, no signup, in-browser.",
    keyword: "PDF to JPG",
    intro: [
      "Turn each page of a PDF into a high-quality JPG image. Perfect for sharing individual pages on social, embedding in slides, or archiving as pictures.",
      "Everything is processed in your browser — the PDF never leaves your device.",
    ],
    features: [
      "Each page as a separate JPG",
      "High-quality rasterization",
      "Bulk download as a ZIP",
    ],
    faqs: [
      { q: "What resolution are the JPGs?", a: "The default rendering is 150 DPI — high enough for on-screen sharing. Higher DPI produces sharper images but larger files." },
      { q: "Is my PDF uploaded?", a: "No. All rendering happens in your browser." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/jpg-to-pdf": {
    title: "JPG to PDF — Combine JPG Images to PDF Free",
    metaDescription: "Combine JPG images into a single PDF. Free online JPG to PDF converter — no signup, private, reorder pages before export.",
    keyword: "JPG to PDF",
    intro: [
      "Combine JPG (and PNG) images into a single PDF document. Drag to reorder before export — great for scanned receipts, photo portfolios, or homework submissions.",
      "Everything is processed in your browser — no uploads.",
    ],
    features: [
      "Combine unlimited JPGs into one PDF",
      "Drag-and-drop page reordering",
      "Preserves image quality",
    ],
    faqs: [
      { q: "Can I mix JPG and PNG?", a: "Yes. Both formats work and can be combined in the same PDF." },
      { q: "Is there a page limit?", a: "No hard limit — very large documents just take longer to generate." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/rotate": {
    title: "Rotate PDF — Rotate Pages 90°, 180°, 270° Free",
    metaDescription: "Rotate all pages of a PDF in 90° steps to fix orientation. Free online rotate PDF tool — no signup, private, in-browser.",
    keyword: "rotate PDF",
    intro: [
      "Rotate every page of a PDF by 90°, 180°, or 270° to fix pages that were scanned or exported sideways. The rotated PDF downloads instantly.",
      "Processing happens in your browser — your document never leaves your device.",
    ],
    features: [
      "Rotate every page in 90° steps",
      "Preserves text and image quality",
      "Instant download of the fixed PDF",
    ],
    faqs: [
      { q: "Can I rotate individual pages?", a: "This tool rotates every page uniformly. For per-page control, split the PDF first and merge again after rotating." },
      { q: "Is text quality preserved?", a: "Yes. Rotation is lossless and text layers stay searchable." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/unlock": {
    title: "Unlock PDF — Remove PDF Restrictions Free",
    metaDescription: "Remove editing and printing restrictions from PDFs you own. Free online unlock PDF tool — no signup, private, in-browser processing.",
    keyword: "unlock PDF",
    intro: [
      "Remove editing, printing, and copying restrictions from a PDF you own. This tool clears owner-password restrictions so you can print or edit as needed.",
      "Only use it on PDFs you have the right to modify. All processing happens in your browser.",
    ],
    features: [
      "Removes owner-password restrictions",
      "Preserves original content and layout",
      "Works entirely in your browser",
    ],
    faqs: [
      { q: "Does it remove open passwords?", a: "No. This tool clears restriction (owner) passwords only. PDFs that require a password to open cannot be unlocked without it." },
      { q: "Is this legal?", a: "You may only remove restrictions from PDFs you own or have permission to modify. Don't use this on files you don't have rights to." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/page-numbers": {
    title: "Add Page Numbers to PDF — Free Online Tool",
    metaDescription: "Stamp page numbers onto every PDF page in seconds. Free online add page numbers tool — no signup, private, in-browser.",
    keyword: "add page numbers to PDF",
    intro: [
      "Stamp clean page numbers onto every page of your PDF. Great for reports, contracts, and academic submissions that require numbered pages.",
      "Position, font, and format are configurable. Nothing is uploaded — all stamping happens in your browser.",
    ],
    features: [
      "Configurable position, font size, and format",
      "Start numbering from any page",
      "Preserves the original PDF quality",
    ],
    faqs: [
      { q: "Can I start numbering from a specific page?", a: "Yes. Set the start page and starting number to skip cover pages or a table of contents." },
      { q: "Is the numbering easy to remove later?", a: "The numbers are baked into the PDF. Keep an unnumbered copy if you might need to change the numbering later." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
};
