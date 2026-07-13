import type { ToolSeo } from './types';

export const seo: Record<string, ToolSeo> = {
  "/image-tools/compress": {
    title: "Image Compressor — Reduce JPG & PNG Size Free",
    metaDescription: "Compress JPG, PNG, and WebP images without losing quality. Free online image compressor — no signup, all processing in your browser.",
    keyword: "image compressor",
    intro: [
      "Shrink JPG, PNG, and WebP files without visible quality loss. Ideal for faster websites, smaller email attachments, and staying under upload limits.",
      "All compression happens in your browser — images are never uploaded to a server, so your files stay private.",
    ],
    features: [
      "Compress JPG, PNG, and WebP images",
      "Adjustable quality slider for size vs fidelity",
      "100% browser-based — no upload",
    ],
    faqs: [
      { q: "How much smaller will my image be?", a: "Typical savings range from 40% to 80% depending on the source. Photos compress more than screenshots or graphics with flat color." },
      { q: "Do you upload my images anywhere?", a: "No. Compression happens entirely in your browser — the original and compressed files never leave your device." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why compress images

Every kilobyte you save on an image is a kilobyte your visitors don't have to download. On a product page with ten photos, cutting each one from 800 KB to 200 KB is the difference between a page that loads in two seconds and one that loads in eight — and pages that load in eight seconds are pages people close.

## What the compressor actually does

The tool re-encodes your JPG, PNG, or WebP using a lower quality setting that throws away visual data your eye is unlikely to notice. Photos are especially forgiving: a JPG saved at quality 80 usually looks identical to the original at quality 100, but weighs less than half as much.

## Step-by-step

**1. Drop your image in.** One at a time or a batch — they all process in your browser.

**2. Pick a quality level.** Start at the default. If the preview looks perfect, drag the slider lower and watch the file size drop. If you see color banding or blockiness, nudge it back up.

**3. Download.** Save the new file. Compare to the original once to make sure you're happy, then use the compressed version everywhere.

## When to use which format

- **JPG** for photos and anything with smooth color gradients.
- **PNG** when you need transparency, or for screenshots and diagrams with flat color.
- **WebP** when your audience uses modern browsers — it beats both JPG and PNG on size.

## Tips

- Resize before you compress. A 4000-pixel-wide photo shown at 800 pixels wastes bandwidth even after compression.
- Compress once. Repeatedly saving a JPG at lower quality degrades it every time.
- Keep the original. If you ever need a higher-quality version later, you'll be glad you did.

## Privacy

Compression runs entirely in your browser. Your images never touch our servers.`,
  },
  "/image-tools/resize": {
    title: "Image Resizer — Resize JPG & PNG to Exact Pixels",
    metaDescription: "Resize images to exact pixel dimensions with or without keeping aspect ratio. Free online image resizer — no signup, private, in-browser.",
    keyword: "image resizer",
    intro: [
      "Resize any JPG, PNG, or WebP image to exact pixel dimensions. Keep aspect ratio for clean photo scaling or force custom width and height for banners, thumbnails, and social posts.",
      "All resizing happens in your browser — perfect for social media assets, product photos, and avatars.",
    ],
    features: [
      "Resize to exact pixel width and height",
      "Optional aspect-ratio lock",
      "Instant preview and download",
    ],
    faqs: [
      { q: "Will resizing reduce quality?", a: "Upscaling makes images blurry. Downscaling to a smaller size is safe and often improves file size dramatically." },
      { q: "Which formats are supported?", a: "JPG, PNG, and WebP. Output matches the input format." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why resize images

Most images arrive at the wrong size. Phone cameras produce 12-megapixel photos, screenshots come in at retina resolution, and design exports are usually oversized on purpose. Resizing to the exact dimensions you need cuts file size dramatically and stops browsers from doing the scaling for you — which almost always looks worse than doing it yourself.

## What this tool does

Enter a target width and height in pixels and get back an image at exactly that size. Aspect ratio is locked by default so your photos don't stretch; unlock it when you deliberately need to fit a non-standard slot.

## Step-by-step

**1. Upload your image.** JPG, PNG, or WebP — the output format matches the input.

**2. Enter the target size.** Type a width; the height fills in automatically to keep the proportions. If you need to force a specific width and height, uncheck the lock.

**3. Preview and download.** The resized image appears immediately. If it looks right, download; if not, adjust and retry.

## Common target sizes worth memorising

- **Instagram post:** 1080 × 1080 (square) or 1080 × 1350 (portrait).
- **YouTube thumbnail:** 1280 × 720.
- **LinkedIn cover:** 1584 × 396.
- **Website hero (retina):** 1920 × 1080 or 2560 × 1440.
- **Email avatar:** 400 × 400.

## Tips

- Downscale, don't upscale. Making an image smaller is lossless in perceived quality; making it bigger just interpolates pixels that were never there.
- Resize before you compress. Both together give the smallest file at the best quality.
- Match the display size. Serving a 4000-pixel image into a 400-pixel slot wastes bandwidth even after compression.

## Privacy

Resizing runs in your browser. Your originals never leave your device.`,
  },
  "/image-tools/jpg-to-png": {
    title: "JPG to PNG Converter — Free Online, Lossless",
    metaDescription: "Convert JPG photos to PNG images for lossless quality or transparency. Free online JPG to PNG converter — no signup, in-browser.",
    keyword: "JPG to PNG converter",
    intro: [
      "Convert JPG photos to PNG format for lossless quality or to prepare an image for transparency edits. Instant, unlimited, and free.",
      "Perfect for designers, marketers, and developers who need PNG source files. Conversion happens entirely in your browser.",
    ],
    features: [
      "Lossless conversion — no quality loss",
      "Handles high-resolution photos",
      "Instant download of the PNG",
    ],
    faqs: [
      { q: "Will the file size get bigger?", a: "Usually yes. PNG is lossless, so expect a larger file — that's the tradeoff for higher fidelity." },
      { q: "Does JPG to PNG add transparency?", a: "No — JPG has no transparency data, so the PNG will have a solid background. Use a background remover to add transparency." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why convert JPG to PNG

JPG is great at photos and terrible at everything else. If you have a JPG that you plan to edit — remove a background, layer over another image, add transparency, or export for a designer — converting it to PNG first is the right move. PNG is lossless, so every edit you make from that point on preserves quality perfectly.

## What this tool does

Uploads a JPG and returns a PNG with the same pixels, ready for further editing or for uploading somewhere that rejects JPG. The conversion itself doesn't add any information the JPG didn't already have — it just switches formats so future edits stop compounding compression loss.

## Step-by-step

**1. Upload your JPG.** Any size up to a few megabytes converts instantly.

**2. Download the PNG.** That's it. The pixels are identical to what your JPG already showed on screen.

## When PNG is the right choice

- You plan to remove the background and need transparency later.
- You're handing the file to a designer who will edit it further.
- The destination site or CMS requires PNG.
- You need lossless quality for print, archival, or reference.

## When PNG is the wrong choice

- Web pages where file size matters. PNG files are usually much larger than JPGs of the same photo.
- Social media. Every platform re-encodes uploads anyway; sending PNG wastes upload bandwidth.
- Email attachments. Larger files reach the recipient more slowly.

## Tips

- The PNG will not have transparency until you actually remove the background. Use the background remover for that step.
- If you only need a PNG so you can re-share elsewhere, consider whether the original JPG would do — it usually would.

## Privacy

Conversion runs in your browser. Your file never uploads.`,
  },
  "/image-tools/png-to-jpg": {
    title: "PNG to JPG Converter — Free & Fast Online",
    metaDescription: "Convert PNG images to smaller JPG files without signup. Free online PNG to JPG converter — private, in-browser, instant download.",
    keyword: "PNG to JPG converter",
    intro: [
      "Convert PNG images to JPG for smaller file size and easier sharing. Great for uploading to sites that don't accept PNG or shrinking storage.",
      "Conversion is instant and runs entirely in your browser. Transparent pixels become white in the output.",
    ],
    features: [
      "Fast, in-browser PNG to JPG conversion",
      "Adjustable JPG quality for size vs fidelity",
      "Transparent pixels default to white background",
    ],
    faqs: [
      { q: "Will I lose quality?", a: "JPG uses lossy compression, so there is some quality loss — usually invisible at the default quality setting." },
      { q: "What happens to transparency?", a: "JPG doesn't support transparency, so transparent areas of the PNG are filled with white in the output." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why convert PNG to JPG

PNG is a fantastic format for design work and terrible for delivery. A photo saved as PNG can easily be five to ten times the size of the same photo as a JPG — with no visible quality difference. Converting to JPG before you upload, email, or publish is the single biggest bandwidth win you can make on image-heavy pages.

## What this tool does

Takes any PNG and re-encodes it as a JPG at a quality level of your choice. Transparent pixels get filled with a solid background (white by default) because JPG doesn't support transparency.

## Step-by-step

**1. Upload your PNG.** Any size — the conversion is fast.

**2. Choose a quality.** The default is a good balance between size and fidelity. Drag it lower for smaller files; drag it higher for pixel-perfect output.

**3. Download the JPG.** Compare it to the original briefly to make sure you're happy.

## When JPG is the right choice

- Photos on web pages, blog posts, or product listings.
- Anything you're emailing where size matters.
- Images going into a slide deck.
- Uploads to platforms that convert to JPG anyway.

## When JPG is the wrong choice

- Screenshots or diagrams with sharp text and flat colors — they get noticeably fuzzy.
- Any image where you need transparency.
- Source files you'll edit again later.

## Tips

- Save the PNG original somewhere. Converting the JPG back to PNG later doesn't restore the lost quality.
- If your PNG has transparency you care about, either keep it as PNG or use WebP, which supports both compression and transparency.

## Privacy

Everything runs in your browser. Files stay on your device.`,
  },
  "/image-tools/crop": {
    title: "Image Cropper — Crop Photos Online Free",
    metaDescription: "Crop JPG, PNG, or WebP images to a custom area or aspect ratio. Free online image cropper — no signup, all-in-browser processing.",
    keyword: "image cropper",
    intro: [
      "Crop any image to a custom rectangle or fixed aspect ratio — 1:1 for Instagram, 16:9 for YouTube thumbnails, 4:5 for portraits. Drag to adjust and download the result.",
      "Perfect for social posts, profile pictures, and product images. All cropping happens in your browser.",
    ],
    features: [
      "Freeform or fixed-aspect cropping",
      "Live preview as you drag",
      "Works with JPG, PNG, and WebP",
    ],
    faqs: [
      { q: "Which aspect ratios are supported?", a: "Freeform, 1:1, 4:3, 16:9, and 4:5 are one-click options. You can also drag any custom rectangle." },
      { q: "Does cropping reduce quality?", a: "No — cropping just removes pixels outside the selection. The kept area retains its original quality." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why crop images

Cropping is the fastest way to make a good photo better. Cutting distractions out of the edges, moving the subject onto a rule-of-thirds line, and matching the aspect ratio the platform expects will do more for how an image lands than any filter.

## What this tool does

Lets you drag a rectangle over any JPG, PNG, or WebP and download just the area inside it. You can drag freely or lock to a common aspect ratio like 1:1 for Instagram, 16:9 for YouTube, or 4:5 for portrait posts.

## Step-by-step

**1. Upload the image.** It appears in the cropping area at full resolution.

**2. Pick a ratio.** Freeform is best when you know what you want. A fixed ratio is best when you're preparing for a specific platform.

**3. Drag the corners** to frame the subject. Move the whole box by dragging the middle. You can nudge with arrow keys for pixel-precise adjustments.

**4. Download.** The cropped image saves at full quality — cropping is lossless because you're just discarding pixels.

## Cropping tips

- **Give the subject somewhere to look.** If your subject faces left, leave more space on the left side of the frame. This looks more natural than a subject about to walk out of the picture.
- **Cut at natural lines.** Never crop through joints, chins, or the tops of heads. A crop just above the eyeline or mid-chest usually works.
- **Straighten first, crop second.** If your horizon is tilted, rotate the image before cropping — otherwise you'll crop out corners you didn't mean to.
- **Match the platform.** Square for Instagram grid, 4:5 for the taller feed slot, 9:16 for stories, 16:9 for YouTube thumbnails.

## Privacy

Cropping runs entirely in your browser. Your image stays on your device.`,
  },
  "/image-tools/background-remover": {
    title: "AI Background Remover — Free Online Cutouts",
    metaDescription: "Remove image backgrounds automatically with AI. Free online background remover — instant PNG cutouts, no signup required.",
    keyword: "background remover",
    intro: [
      "Upload a photo and let AI cleanly remove the background, leaving a transparent PNG cutout you can download. Perfect for product photos, profile pictures, and social graphics.",
      "The AI works best with a clearly defined subject like a person, product, or animal.",
    ],
    features: [
      "AI-powered subject detection",
      "Transparent PNG output",
      "Works with people, products, animals, and objects",
    ],
    faqs: [
      { q: "Is the background remover really free?", a: "Yes. You can remove backgrounds without a signup or watermark." },
      { q: "What image sizes work best?", a: "Uploads up to 5 MB. High-contrast subjects with even lighting give the cleanest cutouts." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## What the background remover does

Upload a photo, and an AI model detects the main subject — a person, a product, an animal, an object — and cuts away everything behind it, leaving a clean transparent PNG. What you get back is a cutout you can drop onto any new background, use in a thumbnail, or layer into a design.

## When to use it

- **Product photos** for an online store where every item should sit on a consistent background.
- **Profile pictures** where you want to replace a distracting room with a solid color.
- **Thumbnail design** for videos and podcasts.
- **Presentation slides** where a photo needs to blend in instead of sit in a rectangle.
- **Personal projects** — a birthday card, a meme, a family scrapbook.

## Step-by-step

**1. Upload a photo.** JPG, PNG, or WebP, up to 5 MB. Higher resolution generally gives a cleaner cutout.

**2. Wait a few seconds.** The model runs and returns a preview with the background removed. There's nothing to configure — the AI decides which pixels to keep.

**3. Download the PNG.** The transparent version is ready to drop onto any background you want.

## Tips for a cleaner cutout

- **Good lighting matters.** A well-lit subject on a plain background is the easiest case for any model.
- **Strong contrast helps.** A pale subject on a bright background, or a dark subject on a light one, cuts more cleanly than similar-colored elements.
- **Watch fine detail.** Hair, fur, and lace are the hardest parts. If the edges look ragged, try the highest-resolution version of the same photo.
- **Don't expect perfection on cluttered scenes.** A person standing in front of a leafy tree will always be a harder job than a person in front of a wall.

## Privacy

The image is processed and immediately discarded — no copy is stored on our servers.`,
  },
  "/image-tools/rotate": {
    title: "Image Rotator — Rotate & Flip Photos Free",
    metaDescription: "Rotate images 90°, 180°, or 270°, or flip horizontally and vertically. Free online image rotator — no signup, private, in-browser.",
    keyword: "image rotator",
    intro: [
      "Rotate any image by 90°, 180°, or 270°, or flip it horizontally or vertically. Fix sideways photos or prepare mirror images for design in seconds.",
      "All processing happens in your browser — no uploads, no quality loss for 90° rotations.",
    ],
    features: [
      "90°, 180°, 270° rotation",
      "Horizontal and vertical flip",
      "Lossless for 90° increments",
    ],
    faqs: [
      { q: "Will rotation reduce quality?", a: "Rotations of 90°, 180°, and 270° are lossless. Arbitrary-angle rotations aren't supported here to keep quality perfect." },
      { q: "Which formats are supported?", a: "JPG, PNG, and WebP. Output matches the input format." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why rotate images

Photos come out sideways more often than you'd think. Phones sometimes save the wrong orientation flag, scanned documents come in tilted, and design mockups often need to be mirrored to compare left- and right-hand variants. Rotating and flipping fixes all of that in seconds without loss of quality.

## What this tool does

Takes any JPG, PNG, or WebP and rotates it 90°, 180°, or 270°, or flips it horizontally or vertically. All of these operations are lossless — the pixels are just reordered, nothing is re-encoded destructively.

## Step-by-step

**1. Upload the image.** It appears in the preview immediately.

**2. Choose the operation.** Rotate right (90° clockwise), rotate left (270°), rotate 180°, flip horizontal, or flip vertical.

**3. Download.** The result saves at full quality. You can stack operations — rotate, then flip, then download — before saving.

## When to use each

- **Rotate 90° / 270°** — a photo saved sideways from a phone.
- **Rotate 180°** — a scan that came in upside down.
- **Flip horizontal** — mirroring text or design elements; also useful for creating symmetrical layouts.
- **Flip vertical** — mostly for creative or reflection effects.

## Tips

- **Don't flip photos of people with visible text or brand marks.** Watches, logos, and shirts read backwards after a flip and it's usually more distracting than the effect you wanted.
- **Only 90° increments here.** Arbitrary-angle rotation (say, 3° to level a horizon) has to interpolate pixels, which slightly softens the image. This tool sticks to lossless increments; use a photo editor if you need to straighten a horizon.
- **EXIF orientation is respected.** If your camera set an orientation flag, the image opens the right way up before you rotate.

## Privacy

Rotation happens in your browser. Files stay on your device.`,
  },
  "/image-tools/image-to-pdf": {
    title: "Image to PDF — Convert JPG & PNG to PDF Free",
    metaDescription: "Combine one or more JPG or PNG images into a single PDF document. Free online image to PDF converter — no signup, private, in-browser.",
    keyword: "image to PDF",
    intro: [
      "Combine one or many images (JPG, PNG, WebP) into a single tidy PDF document. Great for submitting scanned pages, portfolios, or receipts.",
      "Drag to reorder pages before download. Everything happens in your browser.",
    ],
    features: [
      "Combine unlimited images into one PDF",
      "Drag-and-drop reorder before export",
      "Preserves image resolution",
    ],
    faqs: [
      { q: "Is there a file limit?", a: "No hard limit, but very large PDFs may take longer to generate. Compression is applied to keep files reasonable." },
      { q: "Are my images uploaded?", a: "No — the PDF is built entirely in your browser and your images never leave your device." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why turn images into a PDF

A PDF is the universal document format — every operating system opens it, every printer respects the page layout, and every recipient can view it without installing anything. Bundling a set of images into a single PDF is the right move for scanned receipts, portfolio submissions, insurance claims, application documents, and anywhere the recipient asked for "a document" and you have a stack of photos.

## What this tool does

Uploads one or more JPG, PNG, or WebP images and stitches them into a single PDF, one image per page, in the order you specify. Everything is done in your browser — no upload, no watermark, no page limit.

## Step-by-step

**1. Drop in your images.** Add them one at a time or as a batch.

**2. Reorder if needed.** Drag any thumbnail up or down to change the page order. This matters for scanned documents where page 1 must come first.

**3. Download the PDF.** It generates in a second or two and saves like any other file.

## Common use cases

- **Scanned paperwork.** Snap each page with your phone, then combine.
- **Portfolios.** A tidy PDF of your best shots is more professional than a folder of loose images.
- **Insurance and warranty claims.** Photos of damage plus a copy of the receipt in one file.
- **Applications.** Passport, ID, and supporting documents in the order the form asks for them.
- **Meeting handouts.** A quick PDF of slides or reference photos to circulate before a call.

## Tips

- **Rotate first, combine second.** Fix any sideways scans before adding them to the PDF; page orientation in a PDF is set once per page.
- **Shoot in good light.** If the destination will print the PDF, lighting on your original photos matters more than any post-processing.
- **Compress large photos** before adding them to keep the PDF small enough to email.

## Privacy

The PDF is built entirely in your browser. Your images never upload.`,
  },
  "/image-tools/watermark": {
    title: "Watermark Adder — Free Online Photo Watermark",
    metaDescription: "Add a text watermark to protect photos before sharing. Free online watermark tool — no signup, adjust font, position, and opacity.",
    keyword: "watermark adder",
    intro: [
      "Protect your photos before publishing them online by adding a text watermark. Control the position, font size, color, and opacity to match your brand.",
      "All watermarking is done in your browser — originals stay private.",
    ],
    features: [
      "Custom text, position, size, and opacity",
      "Works with JPG, PNG, and WebP",
      "Batch preview and download",
    ],
    faqs: [
      { q: "Can I use my logo as a watermark?", a: "The current tool supports text watermarks. For logo watermarks, save your logo as a PNG and use it as an image overlay in a photo editor." },
      { q: "Will the watermark be permanent?", a: "Yes. The watermark is baked into the exported image and cannot be removed with standard tools." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## Why watermark your photos

If you publish original photography online, sooner or later someone will reuse it without permission. A visible watermark won't stop a determined thief, but it will discourage casual reposts, give you credit when your image is shared, and make it obvious where the original came from. For most creators and small businesses, that is more than enough.

## What this tool does

Adds a text watermark of your choice to any JPG, PNG, or WebP. You control the wording, font size, color, opacity, and position on the image. The result is exported with the watermark baked in — anyone downloading the file gets a copy with your credit on it.

## Step-by-step

**1. Upload the image.** It appears in the preview.

**2. Type your watermark text.** Your name, brand, handle, or website — whatever you want people to see.

**3. Style it.** Adjust size, color, and opacity. Semi-transparent (around 40-60%) is usually right — visible enough to read, subtle enough to not ruin the photo.

**4. Choose the position.** Corners are traditional; center is the strongest deterrent but the most intrusive. Pick what fits the image.

**5. Download.** The watermark is now permanent in the exported file.

## Watermarking tips

- **Keep it small.** A watermark should identify the photo, not compete with it.
- **Use consistent branding.** The same wording, font, and position across everything you publish builds recognition.
- **Watermark before you publish, not after.** Once a clean version is online, that version will keep spreading regardless of what you upload later.
- **Don't rely on it alone.** A watermark is a deterrent, not copyright enforcement. Register important work, and don't publish anything you can't afford to lose.

## Privacy

Watermarking runs in your browser. Neither the original nor the watermarked version leaves your device.`,
  },
  "/image-tools/qr-code": {
    title: "QR Code Generator — Free Online, No Signup",
    metaDescription: "Create QR codes for URLs, text, WiFi, or email. Free online QR code generator — high-resolution PNG download, no signup, no expiry.",
    keyword: "QR code generator",
    intro: [
      "Generate a high-resolution QR code for any URL, plain text, WiFi network, or contact info. Great for menus, posters, business cards, and packaging.",
      "The QR codes are static and never expire. Everything is generated in your browser.",
    ],
    features: [
      "URLs, plain text, WiFi, and more",
      "Downloadable high-resolution PNG",
      "Static codes that never expire or track",
    ],
    faqs: [
      { q: "Do the QR codes expire?", a: "No. All codes are static and will work forever — there is no server dependency." },
      { q: "Are the QR codes trackable?", a: "No. Since codes are generated locally and encode the data directly, there is no tracking or redirect layer." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
    guide: `## What a QR code is (and isn't)

A QR code is a two-dimensional barcode that encodes a small chunk of text — usually a URL, but also plain text, WiFi credentials, phone numbers, or contact cards. When someone points their phone camera at it, the phone reads the encoded text and offers to open it. That's the whole trick — there's no server involved once the code is generated.

## What this tool does

Generates a high-resolution PNG of a QR code for whatever you type in. The codes are static: the data is baked into the pattern, so they don't expire, they don't track scans, and they'll keep working forever as long as the URL you encoded still exists.

## Step-by-step

**1. Pick what to encode.** Most people want a URL, but you can also encode plain text, an email address, a phone number, or WiFi network details.

**2. Type or paste the data.** For URLs, include the full \`https://\` — codes without the scheme sometimes fail to open cleanly on older phones.

**3. Download the PNG.** It saves at high resolution so it stays crisp on posters and packaging.

## Common uses

- **Restaurant menus.** Put the QR on the table; guests scan and browse.
- **Business cards.** A code that opens your LinkedIn or personal site.
- **Event posters.** Scan for tickets, directions, or the schedule.
- **Product packaging.** Registration, warranty, or instructions.
- **WiFi guest networks.** Guests scan and join without typing a password.

## Tips

- **Keep the destination URL short.** Long URLs make the code denser and harder for cheap cameras to read.
- **Test before printing.** Print a proof, scan with two different phones, and only then order in bulk.
- **Leave a quiet zone.** The white margin around the QR isn't decorative — cameras need it to lock on. Don't crop it out.
- **Use high contrast.** Dark code on a light background reads best. Fancy colors and gradients look great and scan badly.

## Privacy

Everything is generated locally. No scan tracking, no analytics — just the code.`,
  },
};
