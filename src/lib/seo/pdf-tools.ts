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
    guide: `## Why merge PDFs

You almost never want to send five separate PDFs when you could send one. Merging pages into a single document makes it easier to review, easier to sign, easier to print in the right order, and easier for the person on the other end to file. Every workflow that involves paperwork — expense reports, contracts, application packets, project handoffs — is smoother with one file instead of a stack.

## What this tool does

Combines any number of PDFs into a single output file, in the order you choose. Nothing is re-encoded, so text stays selectable, forms stay fillable, and the file size stays close to the sum of the originals.

## Step-by-step

**1. Drop your PDFs in.** Add them one at a time or select several at once.

**2. Reorder if needed.** Drag files up and down until the sequence matches what the recipient expects — cover letter first, then résumé, then references, and so on.

**3. Download the merged PDF.** It builds instantly and saves like any file.

## Common merges

- **Application packets:** cover letter + CV + references + certifications.
- **Expense reports:** receipts collected during a trip stitched into one submission.
- **Contract bundles:** main agreement + schedules + signed amendments.
- **Client deliverables:** invoice + statement of work + timesheet.
- **Study material:** lecture slides + reading + your own notes for a single revision file.

## Tips

- **Give the file a meaningful name.** \`merged.pdf\` tells the recipient nothing. \`2026-Q1-expenses-Ali-Khan.pdf\` tells them everything.
- **Rotate before merging.** Fix any sideways pages first so the finished document reads cleanly.
- **Compress after merging** if the total is huge and you're going to email it.
- **Preview once** before you send. Open the merged file and scroll through — a bad page order is a common mistake and always spotted in ten seconds.

## Privacy

Everything runs in your browser. Your PDFs never upload.`,
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
    guide: `## Why split PDFs

Big PDFs are annoying. A 200-page report is a pain to email, hard to reference when you only care about one chapter, and impossible to hand to someone who needs page 47 without also getting the other 199. Splitting extracts just the pages that matter and leaves everything else behind.

## What this tool does

Takes a single PDF and produces one or more smaller PDFs from ranges you specify — every page separately, a single range like \`5-12\`, or a mix of ranges like \`1, 5-10, 30-45\`. Text and formatting stay intact.

## Step-by-step

**1. Upload your PDF.** Page count shows so you can plan the split.

**2. Choose how to split.** Either burst every page into its own file, or type page ranges to keep together.

**3. Download.** Each resulting PDF saves separately or as a bundle, depending on how many you produced.

## Common splits

- **Extract a single chapter** from a long report or textbook.
- **Isolate a signed page** from a longer contract for filing.
- **Pull out receipts** you already stitched into a monthly expense PDF.
- **Separate a scanned batch** where one job accidentally became two.
- **Prepare pages for OCR** in smaller chunks that process faster.

## Tips

- **Use page ranges, not burst mode**, for anything longer than a few pages — you'll end up with fewer files to manage.
- **Name the outputs by content**, not by page number. \`contract-page-14-signature.pdf\` beats \`split-14.pdf\`.
- **Keep the original** until you've confirmed the splits contain what you expect.
- **Rotate before splitting** if any pages are sideways — otherwise you'll have to rotate each output separately.

## Privacy

Splitting runs in your browser. Nothing uploads.`,
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
    guide: `## Why compress PDFs

Email providers reject attachments over 20-25 MB. Government portals often cap uploads at 5 MB. A scanned 30-page document at native resolution can easily be 40 MB. Compressing brings that file down to something you can actually send, usually with no visible difference in quality.

## What this tool does

Reduces PDF file size by re-encoding embedded images at a lower resolution and quality, and by removing unused objects and metadata. Text-based PDFs shrink modestly; scanned or image-heavy PDFs often lose 60–90% of their size.

## Step-by-step

**1. Upload your PDF.** The current file size shows immediately.

**2. Pick a compression level.** Higher compression means smaller files and more visible image quality loss. Medium is a safe default for most documents.

**3. Download the compressed PDF.** Open it once to make sure text is still crisp and images are still readable before you send.

## What compresses well

- **Scanned documents** — huge wins because the images are the bulk of the file.
- **Presentation PDFs** with photos and screenshots.
- **PDFs exported from design tools** where images were embedded at print resolution.

## What barely compresses

- **Text-only PDFs** — they're already efficient. Expect 10-20% savings at most.
- **PDFs that have already been compressed** — you can't squeeze water from a stone.

## Tips

- **Compress once.** Re-compressing loses more quality each time.
- **Keep the original.** If you ever need to print, you'll want the uncompressed version.
- **For scanned documents** specifically, running OCR before compressing lets you keep image resolution low without losing searchable text.

## Privacy

Compression runs in your browser. Files never upload.`,
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
    guide: `## Why convert PDF to Word

PDFs are designed to be read, not edited. The moment you need to change a paragraph, update a figure, or repurpose content into a new document, you need a Word file. Converting preserves the text and most formatting so you can pick up where the PDF left off.

## What this tool does

Extracts the text, headings, tables, and inline images from a PDF and rebuilds them as a Word (.docx) document you can open and edit in Microsoft Word, Google Docs, or LibreOffice.

## Step-by-step

**1. Upload the PDF.** Text-based PDFs (exported from Word, Google Docs, or a design tool) convert most cleanly. Scanned PDFs need OCR first — see below.

**2. Wait a few seconds** for the conversion to finish.

**3. Download the .docx** and open it in your editor.

## What to expect from the output

- **Text and paragraphs** transfer with correct wording, usually with the right headings and paragraph breaks.
- **Simple tables** convert well; complex nested tables sometimes need cleanup.
- **Inline images** are placed roughly where they were in the source.
- **Fonts** may substitute if the original font isn't installed on your system.
- **Multi-column layouts** may flatten into a single column — expected behavior for docx.

## When conversion falls short

- **Scanned PDFs** (images of text) — you need OCR first, otherwise the Word file will contain images instead of editable text.
- **Highly designed PDFs** with custom layouts, overlapping elements, or complex forms — the docx will be an approximation.
- **Password-protected PDFs** — unlock first, then convert.

## Tips

- **Compare the docx to the PDF** before you edit further. It's much easier to fix formatting on page 2 while page 2 of the original is still open next to it.
- **Save frequently** while you edit — you're going to make more changes than you planned.

## Privacy

Conversion happens in your browser. Your PDF stays on your device.`,
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
    guide: `## Why convert Word to PDF

A Word file looks slightly different on every computer, in every version of Word, on every operating system. A PDF looks identical everywhere. When you're sending a document you want the recipient to see exactly as you saw it — a résumé, a contract, an invoice, a report — PDF is the right final format.

## What this tool does

Takes a Microsoft Word (.docx) file and produces a PDF that preserves the fonts, layout, images, tables, and page breaks. The result is the file you'd get if you'd printed the Word document to a PDF printer.

## Step-by-step

**1. Upload your .docx.** Both new (.docx) and older (.doc) formats work.

**2. Wait a few seconds** for the conversion.

**3. Download the PDF** and open it once to confirm the layout is what you expected.

## When to convert to PDF

- **Résumés and job applications.** Recruiters expect PDF; Word files sometimes reflow badly in their systems.
- **Contracts and legal documents.** PDF is the standard for signable, final documents.
- **Invoices.** PDF prevents accidental edits after you send them.
- **Reports and proposals** shared with clients or executives.
- **Anything you want to protect from casual editing.**

## Tips

- **Check page breaks** in Word before you convert — the PDF locks them in place. Widows and orphans that looked ugly in Word will look ugly in the PDF too.
- **Embed fonts** in Word if you're using anything unusual, so the PDF renders the same on machines that don't have the font.
- **Preview once** in a PDF reader before sending. If a table wraps oddly or a header runs into the body text, it's better to fix that now than have the recipient point it out.
- **Set the file name properly.** \`2026-01-invoice-4127.pdf\` is professional; \`Document1.pdf\` is not.

## Privacy

Conversion runs in your browser. Your file stays local.`,
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
    guide: `## Why convert PDF to JPG

Sometimes you need an image, not a document. A single page from a PDF makes a much better thumbnail, forum post, social share, presentation slide, or preview than a PDF that recipients have to open. JPG is the universal image format that works everywhere.

## What this tool does

Renders each page of a PDF as a JPG image at a resolution you choose. You can convert every page or pick specific pages. The images can be downloaded individually or as a batch.

## Step-by-step

**1. Upload your PDF.** Any size is fine.

**2. Pick which pages** to convert — all pages, a range like \`1-5\`, or specific pages like \`1, 3, 7\`.

**3. Choose a resolution.** Higher DPI means sharper images and larger files. 150 DPI is fine for screen preview; 300 DPI is print quality.

**4. Download** the JPGs individually or as a ZIP.

## Common uses

- **Screenshot a specific page** to include in a Slack message or email.
- **Create thumbnails** for a document library or portfolio page.
- **Preview a PDF on a device** that doesn't have a good PDF reader.
- **Extract diagrams or figures** from a report to use in a presentation.
- **Post a page to social media** where PDFs aren't accepted.

## Tips

- **Choose PNG instead if the pages have sharp text** and you're going to zoom in — JPG can smear small type.
- **150 DPI is enough** for most web uses. Don't default to 300 DPI unless you're printing.
- **Crop after conversion** if you only want a portion of a page. The image tools cropper does this cleanly.

## Privacy

Rendering runs in your browser. Your PDF stays on your device.`,
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
    guide: `## Why turn JPGs into a PDF

PDF is the format the world sends documents in. When you have photos — receipts, scanned pages, ID cards, photos of a whiteboard, product shots — that need to be treated as a document, bundling them into a PDF is the correct move. Recipients get one clean file instead of an inbox of images.

## What this tool does

Combines one or more JPG images into a single PDF, one page per image, in the order you set. Formatting and orientation are preserved. Everything runs in your browser.

## Step-by-step

**1. Add your JPGs.** Batch upload works.

**2. Reorder pages** by dragging thumbnails until the sequence is right.

**3. Download the PDF.** It generates in a second or two.

## Common uses

- **Scanned receipts** for expense claims.
- **Photos of contracts or forms** captured with a phone camera.
- **ID and passport uploads** where the recipient wants "one PDF, not two JPGs."
- **Photos of a whiteboard** from a meeting, packaged as post-meeting notes.
- **Portfolios** where photos need to be viewed in a specific order.

## Tips

- **Shoot in good light.** No amount of PDF wrapping will save an underexposed photo of a receipt.
- **Rotate first.** Sideways JPGs become sideways pages. Rotate them in the image rotator before combining.
- **Crop first.** A tightly cropped photo of the document is easier to read than the same photo surrounded by your desk.
- **Compress after** if the PDF is huge and needs to be emailed.

## Privacy

The PDF is built in your browser. Nothing uploads.`,
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
    guide: `## Why rotate PDF pages

Scanners and phone cameras don't always save the right orientation. One page in a 40-page contract comes in sideways, and the whole document becomes harder to read. Rotating fixes the orientation permanently — anyone opening the file after you will see it the right way up.

## What this tool does

Rotates any page (or all pages) of a PDF by 90°, 180°, or 270°. Rotation is lossless — the document isn't re-encoded, so text stays selectable and file size doesn't grow.

## Step-by-step

**1. Upload the PDF.** A thumbnail of each page appears.

**2. Rotate the pages that need fixing.** Click the rotate button on individual pages, or apply a rotation to every page at once.

**3. Download the corrected PDF.**

## Common cases

- **Scanned documents** where one page fed sideways.
- **Phone photos of paperwork** where the camera guessed the orientation wrong.
- **PDFs from other people** where the orientation was set for print but is wrong on screen.
- **Multi-column reports** where a page needs to be landscape so a wide table fits.

## Tips

- **Fix rotation before merging or splitting.** A rotated page inside a merged document is much less annoying to correct at the source than after several PDFs are stitched together.
- **Rotate the whole document** if every page is off by the same amount — that's usually a scan setting, not a per-page problem.
- **Check the result.** Open the corrected PDF and scroll through once. It's a two-second check that catches the odd page you missed.

## Privacy

Rotation runs in your browser. Files never upload.`,
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
    guide: `## Why unlock a PDF

Some PDFs arrive with a password on them — a bank statement, an insurance document, a contract with restricted printing or copying. If you already have permission to read the file (it's yours or was legitimately sent to you), removing the password makes it easier to file, forward, print, or extract text.

## What this tool does

Takes a password-protected PDF and produces an identical PDF with the password removed. You supply the password so the tool can decrypt the file — it can't and won't crack passwords you don't know.

## Step-by-step

**1. Upload the protected PDF.**

**2. Enter the password** you already have.

**3. Download the unlocked PDF.** It opens normally in any reader from now on.

## Legitimate uses

- **Your own bank or utility statements** that arrive with a password based on your ID or date of birth.
- **Contracts and legal documents** you've been sent, once your side of the process is done.
- **Insurance and medical documents** you want to file or forward without re-typing the password.
- **Old work documents** where you set the password and no longer need it.

## What this tool won't do

It won't recover or crack a password you don't have. If you've lost the password, contact whoever created the file. Trying to bypass protection on documents you don't own is not okay and this tool won't help you do it.

## Tips

- **Store the unlocked PDF securely.** Removing the password is convenient, but it also removes a layer of protection. Save it somewhere your device is already protected.
- **Keep the original** if the password matters for compliance or record-keeping.

## Privacy

Decryption runs in your browser. Neither the password nor the PDF is uploaded.`,
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
    guide: `## Why add page numbers

Any PDF with more than a few pages gets easier to read, reference, and print when the pages are numbered. Reviewers can point to page 12. Printers know when a page is missing. Recipients can navigate a long document by number instead of by scrolling.

## What this tool does

Adds page numbers to every page of a PDF at the position, format, and style you choose. The original text and layout are preserved — the numbers are drawn on top as a new layer.

## Step-by-step

**1. Upload your PDF.**

**2. Pick a position.** Bottom-center is the traditional choice for reports; bottom-right suits letters and one-sided documents. Top corners are useful when the bottom is already busy.

**3. Choose a format.** Common options: \`1\`, \`Page 1\`, \`1 of 20\`, \`1 / 20\`. Pick what matches the document's tone.

**4. Set a start number if needed.** Cover pages and tables of contents are usually excluded, so numbering often starts on page 3.

**5. Download the numbered PDF.**

## Where to put page numbers

- **Reports and papers:** bottom-center, \`Page X of Y\`.
- **Business letters:** bottom-right, small.
- **Books and long-form:** outside corners (right on odd pages, left on even) if you print two-sided.
- **Legal documents:** top-right, unmissable.

## Tips

- **Skip the cover page and TOC** by starting numbering on page 3. This matches how printed books number pages.
- **Match the document font** if you can — mismatched fonts stand out.
- **Preview before sending.** Numbers should never overlap footnotes, page headers, or existing footer text.

## Privacy

Numbering runs in your browser. The PDF stays on your device.`,
  },
  "/pdf-tools/add-blank-page": {
    title: "Add Blank Page to PDF Online — Free & Private",
    metaDescription: "Insert blank pages into any PDF at any position. Free online PDF blank page adder — no signup, no watermark, browser-based.",
    keyword: "add blank page to pdf",
    intro: [
      "Insert one or more blank pages into any PDF, at the position you choose. Perfect for prepping documents for duplex printing, adding note pages, or leaving space for signatures and stamps.",
      "Runs entirely in your browser — the PDF is never uploaded.",
    ],
    features: [
      "Insert at the beginning, end, or after any page",
      "Add multiple blank pages at once",
      "Matches the source page size",
      "Private, browser-based",
    ],
    guide: `## What the Add Blank Page tool does

Insert blank pages into an existing PDF at any position. The new pages match the source PDF's page size, so an A4 PDF gets A4 blank pages and a Letter PDF gets Letter blanks. You can add one page or many, at the start, end, or between any two existing pages.

## When to add blank pages

- **Duplex printing.** Ensure a chapter starts on the right-hand (odd) page by inserting a blank on the left. Book layouts depend on this.
- **Note pages.** Add blank pages between sections of a handout so participants can take notes without flipping.
- **Signature space.** Insert a blank at the end of a contract for signatures and initials.
- **Assembly for binding.** Match the total page count to a multiple of 4 (for saddle-stitch) or 2 (for perfect binding).
- **Legal exhibits.** Reserve space between exhibits for tab dividers.

## Step-by-step

**1. Upload your PDF.** Drag the file into the tool.

**2. Pick the insertion point.** Beginning, end, or after a specific page number.

**3. Choose how many pages** to insert.

**4. Download the new PDF.** One click saves the modified document.

## Page size handling

Most PDFs use a single page size throughout, so the blank pages match automatically. If your source PDF has mixed page sizes, the tool matches the neighboring page's size. You can always verify in a viewer before printing.

## Tips

- **For book-style prep**, always ensure total page count is a multiple of 4 for saddle-stitch binding. Add blanks at the end if needed.
- **Chapter openers** conventionally start on right-hand pages (odd numbers in PDF order). Insert a blank before a chapter that lands on the wrong side.
- **Preview before printing.** Open the output PDF and confirm blank pages land where you expect.

## Privacy

All processing happens in your browser. The PDF is never uploaded.`,
    faqs: [
      { q: "Can I add multiple blank pages at once?", a: "Yes. Enter the number of pages to insert and they'll all be added at the chosen position." },
      { q: "Will the blank page size match my PDF?", a: "Yes. New blank pages inherit the page size of the neighboring page in your source PDF." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/duplicate-pages": {
    title: "Duplicate PDF Pages Online — Free & Private",
    metaDescription: "Duplicate one or more pages within any PDF online. Free PDF page duplicator — no signup, no watermark, everything runs locally.",
    keyword: "duplicate pdf pages",
    intro: [
      "Duplicate any page (or range of pages) within a PDF — useful for creating multiple copies of a form, duplicating a template, or repeating a page for annotation.",
      "Runs entirely in your browser — the PDF stays on your device.",
    ],
    features: [
      "Duplicate any single page or a range",
      "Multiple copies with one click",
      "Insert duplicates in place",
      "Private, browser-based",
    ],
    guide: `## What the Duplicate Pages tool does

Select one page (or a range) in your PDF and create one or more copies of it. The duplicates are inserted immediately after the original — no reordering required. Perfect for making multiple copies of a form, repeating a template page, or preparing a document for parallel annotation.

## When to duplicate PDF pages

- **Blank forms.** Have a single blank form page and need 20 copies? Duplicate 19 times and export.
- **Template documents.** Duplicate a template page as a starting point for filling in per-student, per-client, or per-project versions.
- **Meeting handouts.** Duplicate a shared sign-in sheet before splitting the PDF into per-team booklets.
- **Legal exhibits.** Some jurisdictions require multiple copies of exhibit cover pages.
- **Study notes.** Duplicate a page you want to annotate several different ways.

## Step-by-step

**1. Upload your PDF.** Drag the file into the tool.

**2. Pick the page to duplicate.** Enter a single page number or a range like 3-5.

**3. Choose how many copies** to create.

**4. Download the expanded PDF.** One click saves the result with duplicates inserted after the original.

## Duplicate vs copy-page-to-a-new-file

Duplicating keeps everything in one file. If you need separate PDFs, duplicate first and then use the Split PDF tool to extract each copy. This two-step is often easier than manual re-assembly.

## Tips

- **Duplicate a range**, not just single pages. Entering \`3-5, copies: 2\` will insert two more copies of pages 3, 4, and 5 in order.
- **Rename after duplicating.** Give the output file a descriptive name (\`invoice-template-20-copies.pdf\`) so it's easy to find later.

## Privacy

All processing happens locally. Nothing is uploaded.`,
    faqs: [
      { q: "Can I duplicate multiple pages at once?", a: "Yes. Enter a page range like 3-5 to duplicate three pages together, keeping their order." },
      { q: "Where do the duplicates appear?", a: "Duplicates are inserted immediately after the original page(s). Use a page reordering tool if you need them elsewhere." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/extract-pages": {
    title: "Extract Pages from PDF Online — Free & Private",
    metaDescription: "Extract selected pages from any PDF into a new file. Free online PDF page extractor — no signup, no watermark. Runs in your browser.",
    keyword: "extract pdf pages",
    intro: [
      "Extract any page or range of pages from a PDF into a new, smaller PDF. Perfect for sharing just the relevant section of a large report, contract, or manual.",
      "Runs entirely in your browser — the PDF is never uploaded.",
    ],
    features: [
      "Extract single pages, ranges, or a mix",
      "Preserves original quality",
      "Instant download of the extracted PDF",
      "Everything runs locally",
    ],
    guide: `## What the Extract Pages tool does

Select specific pages from a PDF and save them as a new, smaller PDF. Perfect when you need to share only a chapter of a manual, one exhibit from a case file, or a single form from a bundled package.

## When to extract PDF pages

- **Share the relevant section only.** Send someone just the two pages they need from a 200-page report instead of the whole thing.
- **Isolate a form.** Extract page 12's application form from a bundled onboarding PDF.
- **Break up long documents.** Turn a bulky ebook into chapters, each in its own smaller PDF.
- **Prepare exhibits.** Extract each exhibit into a separate PDF for legal filings.
- **Reduce email attachment size.** Attach just the specific pages instead of the whole file.

## Extract vs split

- **Extract** creates ONE new PDF containing the pages you selected.
- **Split** creates multiple PDFs, one per page or range.

Use Extract when you want a single trimmed file. Use Split when you want each page (or chunk) in its own file.

## Step-by-step

**1. Upload your PDF.** Drag the file in.

**2. Specify the pages.** Enter individual pages (\`3, 7, 12\`), a range (\`5-10\`), or a mix (\`1, 3-5, 9\`).

**3. Download the extracted PDF.** The new file contains only the pages you chose, in the order you listed.

## Preserving order

Extracted pages appear in the order you list them. Entering \`5, 3, 1\` produces a PDF with page 5 first, page 3 second, page 1 third — useful for rearranging while extracting.

## Quality is preserved

Extraction is a lossless operation. Every extracted page keeps its original resolution, fonts, and embedded assets. The output PDF is the same visual quality as the source.

## Tips

- **Rename your output.** Include the page range in the filename (\`report-pp-12-18.pdf\`) to make it easy to identify later.
- **Combine with Merge PDF** to combine extracted pages from several PDFs into a single new document.

## Privacy

Everything runs in your browser.`,
    faqs: [
      { q: "What's the difference between extract and split?", a: "Extract makes one new PDF with the pages you chose. Split makes multiple PDFs, one per page or range." },
      { q: "Can I reorder pages while extracting?", a: "Yes. List the pages in the order you want — entering '5, 3, 1' produces a PDF with those pages in that order." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/pdf-metadata": {
    title: "Edit PDF Metadata Online — Title, Author, Keywords",
    metaDescription: "View and edit PDF metadata (title, author, subject, keywords) online. Free PDF metadata editor — no signup, private, browser-based.",
    keyword: "pdf metadata editor",
    intro: [
      "View and edit the metadata of any PDF — title, author, subject, keywords, and creation date. Improves search results, indexing, and how the file appears in PDF viewers.",
      "Everything runs in your browser — the PDF is never uploaded.",
    ],
    features: [
      "View current metadata at a glance",
      "Edit title, author, subject, keywords",
      "Clean up personal info before sharing",
      "Private, browser-based",
    ],
    guide: `## What the PDF Metadata Editor does

Every PDF stores metadata: a title, an author, a subject, a list of keywords, and creation/modification dates. This tool reads that metadata, lets you edit any field, and re-saves the PDF with the updated values.

## When to edit PDF metadata

- **Search engine optimization.** PDFs are indexed by Google. Adding a clear title and keywords improves visibility.
- **Document management systems.** Most DMS software (SharePoint, Documentum, etc.) indexes metadata for search.
- **Professional deliverables.** A PDF titled "Untitled document" or authored by "Microsoft Word user" looks unprofessional. Setting the title and author properly is a quick polish.
- **Privacy before sharing.** PDFs often leak the original author's name, employer, or file path. Clean these fields before sending a PDF externally.
- **E-book and manual publishing.** Metadata drives how the file appears in e-book library apps, PDF readers, and browser tabs.

## Step-by-step

**1. Upload your PDF.** Drag the file in.

**2. Review the current metadata.** Every field is shown as-is, including personal info that may have been added automatically.

**3. Edit any field.** Set a clear title, correct author name, useful subject, and comma-separated keywords.

**4. Download the updated PDF.** The new file has your metadata; visual content is unchanged.

## Which fields matter

- **Title:** shown in browser tabs, viewer window bars, and search results. Set this on every PDF you publish.
- **Author:** organization or person. Consider setting a company name instead of a personal name for external documents.
- **Subject:** a one-sentence description. Useful for search.
- **Keywords:** comma-separated. Used by some indexers and enterprise search.
- **Creator / Producer:** normally set automatically by the software that made the PDF; usually not worth changing.

## Privacy note

Exporting from Word, Google Docs, or Pages can embed the author's account name, email, or even the file path on their machine. Before sharing a PDF externally, always check the Author field — replacing "Jane Smith (jane@company.com)" with just "Company Name" is often the right move.

## Privacy

All editing runs in your browser. The PDF is never uploaded.`,
    faqs: [
      { q: "Will editing metadata change the PDF's content?", a: "No. Only the metadata fields are updated. All pages, text, images, and formatting are preserved exactly." },
      { q: "Why is my name showing up in the PDF's Author field?", a: "Word, Pages, and Google Docs embed the account name that exported the PDF. Edit the Author field before sharing externally." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/pdf-n-up": {
    title: "PDF N-up Tool — 2, 4, or More Pages Per Sheet",
    metaDescription: "Arrange multiple PDF pages per sheet (2-up, 4-up, 6-up, 9-up) for printing. Save paper. Free online N-up tool — no signup, private.",
    keyword: "pdf n-up",
    intro: [
      "Print 2, 4, 6, or 9 PDF pages per physical sheet to save paper and shrink long documents into compact printouts. Perfect for reading drafts, meeting handouts, and reference cards.",
      "Runs entirely in your browser — the PDF stays on your device.",
    ],
    features: [
      "2, 4, 6, or 9 pages per sheet",
      "Portrait or landscape output",
      "Preserves original page order",
      "Private, browser-based",
    ],
    guide: `## What the PDF N-up tool does

N-up printing places multiple pages of a PDF on a single physical sheet — 2-up puts 2 pages side by side, 4-up puts 4 in a 2×2 grid, 9-up puts 9 in a 3×3 grid. It's a classic way to save paper when printing long documents or make compact reference sheets.

This tool creates a new PDF where each output page contains N source pages arranged in a grid. Send the new PDF to your printer at 100% scale — no need to fiddle with printer settings.

## When to use N-up

- **Draft reading.** A 40-page draft becomes 10 sheets at 4-up — easier to spread on a desk and mark up.
- **Handouts.** Slide decks printed 6-up per sheet make compact conference or lecture handouts.
- **Reference cards.** Cheat sheets and quick references at 9-up become wallet-sized guides.
- **Reducing print cost.** Long documents at 2-up or 4-up use a quarter of the paper.
- **Booklet prep.** 2-up on both sides of tabloid paper folded in half creates a saddle-stitched booklet.

## Step-by-step

**1. Upload your PDF.** Drag the file in.

**2. Pick pages-per-sheet.** 2, 4, 6, or 9. More pages = smaller printed text.

**3. Pick orientation.** Portrait or landscape output. 2-up usually looks best landscape; 4-up looks fine either way.

**4. Download the N-up PDF.** Send to your printer at 100% scale (no shrink-to-fit).

## Choosing pages-per-sheet

- **2-up:** text still comfortably readable. Ideal for reviewing drafts or presenting handouts.
- **4-up:** text about half the size — readable for adults with good vision, tight for smaller print.
- **6-up:** popular for slide handouts because slides have larger text to begin with.
- **9-up:** thumbnails only. Good for indexes, overviews, and reference summaries.

## Booklet printing

For a saddle-stitched booklet, use 2-up plus a booklet imposition tool (this basic N-up puts pages in order, not booklet order). Some print shops do this automatically if you send them the plain PDF and ask for "print as booklet."

## Tips

- **Preview first.** Check page 1 of the output to confirm readable font size before printing 200 pages.
- **Print duplex.** Combining N-up with double-sided printing multiplies paper savings.

## Privacy

All processing runs locally in your browser.`,
    faqs: [
      { q: "Which N-up value should I choose?", a: "2-up for full readability. 4-up for compact handouts. 6-up for slide decks (slides have large text). 9-up only for thumbnails or indexes." },
      { q: "Will the text still be readable?", a: "Depends on the original font size. 12pt text at 4-up drops to roughly 6pt — readable for most adults. At 9-up it becomes ~4pt, which is tiny." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/pdf-to-text": {
    title: "PDF to Text Converter Online — Free Plain Text",
    metaDescription: "Extract plain text from any PDF online. Free PDF to text converter — no signup, no watermark, everything runs locally in your browser.",
    keyword: "pdf to text",
    intro: [
      "Extract the plain text from any PDF, ready to paste into Word, a text editor, or an AI tool. No signup, no watermark, no upload — everything runs in your browser.",
      "Perfect for copying quotes from a report, feeding a PDF to an AI, or archiving a document as plain text.",
    ],
    features: [
      "Extracts all readable text",
      "Preserves reading order",
      "Copy or download as .txt",
      "Everything runs locally",
    ],
    guide: `## What the PDF to Text tool does

Open any PDF and pull out its text content as plain text. Copy it to the clipboard or download it as a .txt file. The text is extracted in reading order (top to bottom, respecting columns where possible) so it's usable immediately for AI prompts, note-taking, or archiving.

## When to convert PDF to text

- **Feeding an AI.** ChatGPT, Claude, and other AI tools work best with plain text. Extract first, paste in second.
- **Quoting from a report.** Grab a paragraph you want to cite without a screenshot.
- **Searchable archives.** Plain text is universally searchable and takes almost no storage.
- **Accessibility.** Screen readers work best with clean text.
- **Data extraction.** Preparing to parse structured data (tables, lists) with a script.

## When PDF to text struggles

- **Scanned PDFs.** If the PDF is a scan (image of a document), there is no text to extract. Use OCR software instead — this tool will return empty results.
- **Complex layouts.** Multi-column magazines, PDF forms, and PDFs with heavy graphic layout can extract in awkward order. Some manual cleanup is often needed.
- **Mathematical notation.** Equations rendered as images or specialized fonts may not extract as readable text.
- **Tables.** Table structure is lost. You get text without column alignment.

## Step-by-step

**1. Upload your PDF.** Drag the file into the tool.

**2. Wait a moment.** Extraction runs immediately and shows the extracted text.

**3. Copy or download.** One click copies to clipboard; another saves a .txt file.

## How reading order works

PDF was designed for visual layout, not text flow. Extraction attempts to reconstruct reading order using position — left-to-right, top-to-bottom within each column. Complex layouts (sidebars, callouts, multi-column articles) may still be reordered awkwardly. Review the output before feeding it to anything critical.

## Tips

- **Clean before use.** Extracted text often has extra line breaks where the PDF had line wraps. A quick find-replace to remove single line breaks (keeping double ones as paragraph breaks) tidies it up.
- **If nothing extracts**, the PDF is probably a scan. Look for a dedicated OCR tool instead.

## Privacy

Extraction happens in your browser. The PDF is never uploaded.`,
    faqs: [
      { q: "Will it work on a scanned PDF?", a: "No. Scanned PDFs contain images, not text. Use an OCR tool to convert images to text first." },
      { q: "Does it preserve tables and formatting?", a: "Formatting is lost; only plain text is extracted. Tables become linear text without column alignment. Complex layouts may extract in unexpected order." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/pdf-watermark": {
    title: "Add Watermark to PDF Online — Free & Private",
    metaDescription: "Add text watermarks (DRAFT, CONFIDENTIAL, etc.) to every page of a PDF. Free online PDF watermark tool — no signup, private.",
    keyword: "add watermark to pdf",
    intro: [
      "Stamp a text watermark like DRAFT, CONFIDENTIAL, or your company name across every page of a PDF. Adjustable size, opacity, and rotation.",
      "Runs entirely in your browser — the PDF is never uploaded.",
    ],
    features: [
      "Any custom text, any size, any color",
      "Adjustable opacity and rotation",
      "Applied to every page automatically",
      "Private, browser-based",
    ],
    guide: `## What the PDF Watermark tool does

Add a text watermark to every page of a PDF. Common uses: DRAFT, CONFIDENTIAL, INTERNAL USE ONLY, DO NOT DISTRIBUTE, or a client's name for prepared deliverables. Adjustable text, size, color, opacity, and rotation give you control over how prominent the watermark is.

## When to watermark a PDF

- **Draft documents.** A large diagonal DRAFT prevents drafts from being mistaken for final versions.
- **Confidential materials.** A CONFIDENTIAL watermark on every page makes it obvious if a page circulates outside the intended audience.
- **Client deliverables.** Freelancers watermark drafts with the client's name so they can't be shared with competing designers by mistake.
- **Sample chapters.** SAMPLE watermarks on preview PDFs discourage redistribution.
- **Legal proofs.** Watermarked exhibits are easier to track through discovery.

## Step-by-step

**1. Upload your PDF.** Drag the file in.

**2. Enter the watermark text.** DRAFT, CONFIDENTIAL, a client name, or anything you like.

**3. Adjust appearance.** Font size, color, opacity (30–50% is typical for a diagonal watermark), and rotation (45° diagonal is most common).

**4. Download the watermarked PDF.** The watermark is applied to every page.

## Design tips for watermarks

- **Diagonal, 45°** is the classic watermark angle — it doesn't align with body text so it stays visible without competing.
- **Light gray at 40% opacity** is prominent but doesn't render the underlying text unreadable.
- **Large font (72pt+)** so the watermark reads at a glance without needing a close look.
- **Uppercase** for words like DRAFT and CONFIDENTIAL — it's how everyone expects them to look.

## Watermark ≠ security

A visible watermark can be removed by anyone with the right software or by re-exporting the PDF as an image. It's a deterrent and a labeling tool, not a security control. If content truly needs protection, combine with password protection, redaction, and access-controlled distribution.

## Tips

- **Preview before batch use.** Watermark one page first to make sure size and opacity look right.
- **Use your logo for a brand watermark** by converting the logo to text using SVG-to-outline or overlaying with a full editor.

## Privacy

All watermarking runs locally in your browser.`,
    faqs: [
      { q: "Can I add an image or logo as a watermark?", a: "This tool applies text watermarks. For image watermarks, use a full PDF editor after converting your logo to a compatible format." },
      { q: "Can watermarks be removed?", a: "A visible watermark is a deterrent, not a security control. Any determined user can remove it. Combine with password protection for real security." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/remove-pages": {
    title: "Remove Pages from PDF Online — Free & Private",
    metaDescription: "Delete specific pages from any PDF online. Free PDF page remover — no signup, no watermark, everything runs in your browser.",
    keyword: "remove pdf pages",
    intro: [
      "Delete any page or range of pages from a PDF. Useful for cutting cover pages, removing blank pages, or stripping confidential sections before sharing.",
      "Runs entirely in your browser — the PDF stays on your device.",
    ],
    features: [
      "Remove single pages, ranges, or a mix",
      "Preview which pages will remain",
      "Preserves original quality",
      "Private, browser-based",
    ],
    guide: `## What the Remove Pages tool does

Select specific pages in your PDF and delete them. The remaining pages are kept in their original order and quality. Perfect for cleaning up a document before sharing.

## When to remove PDF pages

- **Cover and title pages** you don't want to include when forwarding.
- **Blank pages** left over from a scanner or a print export.
- **Confidential sections.** Strip the internal-only pages before sending externally.
- **Duplicate pages** created by a scanner double-feeding.
- **Ads or filler** in an eBook or scanned magazine you want to archive.
- **Draft revisions** to keep only the final version's pages.

## Step-by-step

**1. Upload your PDF.** Drag the file in.

**2. Specify the pages to remove.** Enter individual pages (\`3, 7, 12\`), a range (\`5-10\`), or a mix (\`1, 3-5, 9\`).

**3. Download the trimmed PDF.** The result contains only the pages you didn't remove.

## Remove vs redact

- **Remove** deletes entire pages. The output PDF is shorter by exactly the number of removed pages.
- **Redact** covers specific words or areas on a page while keeping the page in place. Use a redaction tool if you need to hide only part of a page.

If your goal is to hide sensitive information, redaction is often the right choice — removing whole pages can leave suspicious gaps in numbering that make it obvious something was deleted.

## Preserved quality

Removing pages is a lossless operation. The remaining pages keep their original resolution, fonts, images, and metadata. No re-compression, no re-encoding.

## Page numbers after removal

If your PDF had visible page numbers printed on the pages, those numbers stay unchanged after removal — so a document might jump from page 5 to page 8. This is often fine, but for professional deliverables you may want to re-number after removing pages using the Page Numbers tool.

## Tips

- **Double-check before saving.** The result is instant, but re-adding a removed page requires the original file — keep a backup.
- **Combine with Extract Pages** if you want both a trimmed version AND a separate PDF of just the removed pages.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "Can I remove a range of pages?", a: "Yes. Enter a range like 3-7 to remove five consecutive pages, or mix ranges and single pages: '1, 5-8, 12'." },
      { q: "Do page numbers renumber automatically?", a: "PDF internal page numbers (used for navigation) update automatically. Any page numbers printed on the pages themselves stay unchanged — use the Page Numbers tool to re-number if needed." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/reverse-pages": {
    title: "Reverse PDF Page Order Online — Free & Private",
    metaDescription: "Reverse the page order of any PDF online. Free PDF page reverser — no signup, no watermark, everything runs locally in your browser.",
    keyword: "reverse pdf pages",
    intro: [
      "Flip a PDF so the last page comes first and the first page comes last. Useful for fixing scans made in reverse order or reordering booklet drafts.",
      "Runs entirely in your browser — no upload, no signup.",
    ],
    features: [
      "Reverses page order in one click",
      "Preserves original page quality",
      "Works on any PDF size",
      "Private, browser-based",
    ],
    guide: `## What the Reverse Pages tool does

Flip the order of every page in a PDF. Page 1 becomes the last page, page 2 becomes second-to-last, and so on. Perfect for correcting scans made in reverse or reversing a booklet layout.

## When to reverse PDF pages

- **Fixing reversed scans.** Auto-feed scanners often scan the last sheet first if the paper stack is fed face-down. Reversing fixes the order in one click.
- **Booklet layout.** For certain saddle-stitch impositions, reversing the second half of the pages is a required step.
- **Chronological order.** Meeting notes or journal entries scanned newest-first can be reversed to read oldest-first.
- **Reverse chronological order.** Or the opposite — sort a chronological archive so the newest entries appear first.
- **Reversing a slide deck.** For creative presentations where you want to reveal the conclusion first and work backward.

## Step-by-step

**1. Upload your PDF.** Drag the file in.

**2. Click Reverse.** The tool flips the page order.

**3. Download the reversed PDF.** New file, same quality, opposite order.

## Quality is preserved

Reversing is a lossless operation. Every page keeps its exact resolution, fonts, images, and metadata — only the order changes.

## Combining with other tools

- **Reverse + Split** to break a reversed PDF into per-page files with correct filename ordering.
- **Reverse + Merge** to combine reversed sections from several PDFs.
- **Reverse a range only** by first Extracting the range, reversing it, and then Merging back into the original.

## Tips

- **Verify after reversing.** Open the output and confirm the pages read in the expected direction before overwriting the original.
- **Save a backup.** If you accidentally reverse the wrong file, running Reverse again restores the original — but only if you still have the reversed file.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "Can I reverse only part of the PDF?", a: "This tool reverses the whole document. For partial reversal, use Extract Pages to pull out the range, reverse it, then Merge back." },
      { q: "Will reversing degrade quality?", a: "No. Reversing is lossless — every page keeps its original resolution, fonts, and content. Only the order changes." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/pdf-tools/text-to-pdf": {
    title: "Text to PDF Converter Online — Free & Private",
    metaDescription: "Convert plain text or code to PDF online. Free text-to-PDF tool with adjustable font, size, and page settings. No signup, browser-based.",
    keyword: "text to pdf",
    intro: [
      "Turn plain text, notes, or code into a formatted PDF in seconds. Adjustable font, font size, and page size. Perfect for sharing snippets, notes, or logs in a portable, printable format.",
      "Runs entirely in your browser — nothing is uploaded.",
    ],
    features: [
      "Any font size and page size",
      "Monospace option for code",
      "Instant preview and download",
      "Private, browser-based",
    ],
    guide: `## What the Text to PDF tool does

Paste plain text and export it as a PDF. Choose your font, size, and page dimensions. Perfect for turning notes, meeting minutes, code snippets, or chat logs into a portable, printable, easily shareable format.

## When to convert text to PDF

- **Sharing code snippets.** A PDF is universally viewable — no rendering surprises, no lost line breaks.
- **Meeting minutes and quick notes** where you want a formatted, print-ready copy.
- **Chat logs and transcripts** for archival.
- **Handouts.** Cheat sheets, reference cards, and one-page guides.
- **Reading offline.** Some readers prefer PDF over plain text for long documents.

## Step-by-step

**1. Paste your text** into the input area, or upload a .txt file.

**2. Pick font and size.** Sans-serif for prose (Arial, Helvetica). Monospace for code (Courier, Consolas).

**3. Pick page size.** A4 for most of the world; US Letter for North America.

**4. Download the PDF.** Instantly rendered, ready to share.

## Prose vs code

- **Prose** reads best in a proportional font (Arial, Helvetica) at 11–12pt with normal line spacing. Left-align rather than justify to avoid awkward gaps.
- **Code** reads best in a monospace font (Courier, Consolas, Menlo) at 9–10pt with tight line spacing to fit more per page. Consider adding line numbers if the code will be discussed.

## Choosing the right page size

- **A4 (210 × 297 mm)** — the world standard. Use when sending internationally.
- **US Letter (8.5 × 11 in)** — the North American standard. Use for US audiences.
- **Legal (8.5 × 14 in)** — for longer forms and contracts, common in US legal work.

## Tips

- **Trim excess whitespace** in your source before pasting; long text with lots of blank lines wastes pages.
- **For syntax-highlighted code**, use a code editor's "Export to PDF" feature — it preserves color coding.
- **Add a title line at the top** so the PDF is easy to identify at a glance.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "Does it preserve code indentation?", a: "Yes if you choose a monospace font. Prose fonts don't preserve column alignment because the character widths vary." },
      { q: "Can I include images?", a: "This tool converts plain text only. For text plus images, use a document editor (Word, Google Docs, Pages) and export as PDF from there." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
};
