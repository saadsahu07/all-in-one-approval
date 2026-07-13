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
};
