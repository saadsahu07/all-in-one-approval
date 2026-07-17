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
  "/image-tools/blur": {
    title: "Blur Image Online — Free Gaussian Blur Tool",
    metaDescription: "Blur images online with adjustable Gaussian blur strength. Free image blur tool — hide faces, license plates, or create backgrounds. No signup.",
    keyword: "blur image online",
    intro: [
      "Blur any image online with adjustable strength. Perfect for hiding faces, redacting license plates, censoring sensitive info, or creating soft background images for slides and blogs.",
      "Runs entirely in your browser — the image never leaves your device.",
    ],
    features: [
      "Adjustable Gaussian blur intensity",
      "Works on JPG, PNG, and WebP",
      "Runs 100% in your browser — private",
      "Download as JPG or PNG",
    ],
    guide: `## What the Blur Image Tool does

Upload any image and apply a Gaussian blur across the whole picture. A slider controls the blur strength from a barely perceptible softening to a heavy frost that completely obscures detail. Export the result as JPG or PNG.

## When to use image blur

- **Privacy.** Blur faces of bystanders, house numbers, or license plates before posting a photo online.
- **Redaction.** Cover names, ID numbers, or private text in screenshots before sharing.
- **Backgrounds.** Create soft, low-detail backgrounds for slide decks, thumbnails, or web hero sections where sharp detail would compete with foreground text.
- **Design placeholders.** Blur images to use as tasteful loading states or teaser previews.
- **Photography.** Simulate a shallow depth-of-field effect on parts of a composed image.

## Step-by-step

**1. Upload your image.** Drag a JPG, PNG, or WebP into the tool, or click to browse.

**2. Drag the blur slider.** A live preview shows the result as you adjust. Small values (2–5 px) soften; large values (30 px+) obscure detail entirely.

**3. Download the blurred image.** One click saves it back to your device in your chosen format.

## Choosing the right blur strength

- **Faces and license plates for privacy:** 20–40 px, enough that features and characters are unrecognizable. Verify by looking at the result — a weak blur can be undone with AI upscaling.
- **Slide backgrounds:** 15–25 px keeps color and mood while removing distracting detail.
- **Aesthetic soft look:** 3–8 px keeps the subject recognizable while softening skin, edges, and noise.

## Privacy warning about blur

Gaussian blur is not always secure. For a stationary photo where a small character (like part of a license plate) is repeatedly obscured, AI models can sometimes reconstruct the original. For serious privacy — genuinely hiding an ID, password, or license plate — use a solid black rectangle or pixelation with a large enough grid that no per-pixel data survives. Blur is fine for casual privacy and design.

## Tips

- **Crop first, blur second.** Only blur what you need to hide; leave the rest sharp.
- **Use PNG for text-heavy images.** JPG compression on top of blur can produce visible artifacts.

## Privacy

Everything runs in your browser. Nothing is uploaded.`,
    faqs: [
      { q: "Is blur enough to hide a license plate?", a: "For casual use, yes. For serious privacy, use a solid rectangle or heavy pixelation — modern AI tools can sometimes reverse a moderate Gaussian blur." },
      { q: "What file types does it support?", a: "JPG, PNG, and WebP for input. Download as JPG or PNG." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/border": {
    title: "Add Border to Image Online — Free Frame Tool",
    metaDescription: "Add a colored border or frame to any image online. Adjustable width and color. Free, instant, private — no signup, no watermark.",
    keyword: "add border to image",
    intro: [
      "Add a solid border around any image in seconds. Pick a color, choose the thickness, and download the framed result. Perfect for Instagram posts, product photos, printable prints, and email banners.",
      "Runs entirely in your browser — the image never leaves your device.",
    ],
    features: [
      "Any solid color border",
      "Adjustable width in pixels",
      "JPG, PNG, and WebP input",
      "One-click download",
    ],
    guide: `## What the Border Tool does

Upload an image and add a solid-colored border around it. Choose any width in pixels and any color from the color picker. The border is added around the outside of the existing image, so the final image is larger than the original by twice the border width in each dimension.

## When to add a border

- **Social media.** A thin white or black border makes a photo pop out from a busy feed background, especially on Instagram.
- **Product photography.** A subtle frame separates a product from the surrounding page.
- **Printable art.** A border simulates the matting of a framed print.
- **Contact sheets and mood boards.** Consistent borders around every image tie a collection together.
- **Email headers and blog covers.** A branded border color signals your visual identity at a glance.

## Step-by-step

**1. Upload your image.** Drag any JPG, PNG, or WebP into the drop zone.

**2. Pick a color.** Use the color picker for any hex color, or type your brand color directly.

**3. Set the width.** 10–20 px is subtle. 40–80 px is a strong frame. 100 px+ is dramatic and best on large source images.

**4. Download the framed image.** One click saves the result.

## Choosing a color that works

- **White borders** work on almost any photo and feel clean and gallery-like.
- **Black borders** boost contrast and feel formal — great for portraits and monochrome work.
- **Brand colors** tie an image to your identity but only work if the color complements the photo. Avoid clashing hues.
- **Cream or off-white (#f5f0e6)** looks warmer and more premium than pure white for prints.

## Choosing a width

- **Instagram posts:** 20–40 px for subtle framing on a 1080 px image.
- **Prints:** 60–120 px to simulate matting depth.
- **Web thumbnails:** 4–8 px, just enough to define an edge.

## Tips

- **Match border color to background.** For a floating look on your website, use the exact page background color.
- **Frame after cropping.** Crop to the composition you want first, then add the border — otherwise the border widths won't match if you crop later.

## Privacy

Everything runs in your browser.`,
    faqs: [
      { q: "Can I add a gradient border?", a: "This tool adds solid-color borders. For gradient or patterned borders, edit the image in a full editor after adding a solid frame." },
      { q: "Does it change the original image dimensions?", a: "The output is larger than the input by twice the border width in each dimension. The original pixels are preserved unchanged inside the border." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/flip": {
    title: "Flip Image Online — Horizontal & Vertical Free",
    metaDescription: "Flip images horizontally or vertically online. Free image mirror tool — instant, private, no signup. Works on JPG, PNG, WebP.",
    keyword: "flip image online",
    intro: [
      "Flip any image horizontally or vertically in one click. Perfect for correcting mirror-selfies, mirroring product photos, or preparing images for print transfers.",
      "Runs entirely in your browser — no upload, no signup, no watermark.",
    ],
    features: [
      "Horizontal (mirror) or vertical flip",
      "Both flips can be combined",
      "Works on JPG, PNG, WebP",
      "Download in original format",
    ],
    guide: `## What the Flip Image Tool does

Upload an image and mirror it horizontally, vertically, or both. Horizontal flip mirrors left-right. Vertical flip mirrors top-bottom. Combining both is equivalent to a 180° rotation.

## When to flip an image

- **Selfies.** Front-facing camera photos are often mirrored on preview but flipped back when saved — so what feels natural to you looks reversed to others. Flip to match either view.
- **Iron-on transfers.** Text and logos need to be mirrored horizontally before printing on transfer paper.
- **Product photography.** Flipping a hero shot can make the composition read better with a caption on a specific side.
- **Design mockups.** Presenting a website mockup with the sidebar on either side.
- **Photography editing.** Flipping to break a symmetry that reads too rigid.

## Step-by-step

**1. Upload your image.** Drag any JPG, PNG, or WebP.

**2. Pick a direction.** Horizontal (mirror), vertical, or both.

**3. Preview and download.** The result is visible instantly. One click saves it back to your device in the original format.

## Horizontal vs vertical

- **Horizontal flip** reverses left-right. Text becomes unreadable; faces look subtly wrong because human faces are almost-but-not-quite symmetrical.
- **Vertical flip** turns the image upside down through the horizontal axis. Useful for reflections, ceiling shots, or upside-down mockups.
- **Both** is a 180° rotation — the image reads backward and upside down.

## When NOT to flip

- **Photos of text or signage.** Flipping makes the writing unreadable and looks obviously wrong.
- **Photos with clear left/right context.** People wearing wedding rings, watches, or clothing with logos will look wrong after a flip.
- **Photos of chirality-sensitive scenes.** Anything with a steering wheel, a handedness cue, or a logo will read backward.

## Tips

- **Selfie natural view.** If your camera app doesn't mirror by default, flip horizontally to see yourself the way a mirror does.
- **Combine with rotation** for full orientation control.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "Does flip lose image quality?", a: "No. Flip is a lossless pixel rearrangement — the output has identical quality to the input." },
      { q: "Can I flip only part of an image?", a: "This tool flips the whole image. For partial flips, crop first, flip the crop, and then composite in a full editor." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/grayscale": {
    title: "Convert Image to Grayscale Online — Free B&W Tool",
    metaDescription: "Convert any image to grayscale (black and white) online. Free, instant, private — no signup. Works on JPG, PNG, and WebP.",
    keyword: "grayscale image online",
    intro: [
      "Convert any color image to grayscale (black and white) in a single click. Great for portraits, print-friendly documents, minimal design, and photographic mood.",
      "Runs entirely in your browser — no upload, no signup.",
    ],
    features: [
      "Full color to true grayscale",
      "Perceptually weighted (Rec. 709)",
      "Works on JPG, PNG, WebP",
      "Instant download",
    ],
    guide: `## What the Grayscale Tool does

Convert a color image to grayscale using a perceptually weighted formula (Rec. 709 luminance: 0.2126 R + 0.7152 G + 0.0722 B). This matches how the human eye perceives brightness — greens contribute more than blues — so the result looks natural rather than washed out.

## When to convert to grayscale

- **Portrait photography.** Removes color distraction and forces the eye to composition, expression, and light.
- **Print documents.** Reduces ink cost and ensures consistent appearance on B&W printers.
- **Minimal design.** Grayscale product shots feel premium and don't clash with a brand palette.
- **Old-photo aesthetic.** Combined with a slight sepia tone or grain, grayscale can evoke period photography.
- **Accessibility testing.** Viewing a UI in grayscale reveals whether it relies too much on color to convey meaning.

## Step-by-step

**1. Upload your image.** Drag any JPG, PNG, or WebP.

**2. See the grayscale preview.** Conversion is instant.

**3. Download the result.** One click saves the grayscale version in your chosen format.

## Grayscale vs desaturate vs true black-and-white

- **Grayscale** removes color while preserving perceived brightness.
- **Desaturate** in some editors averages RGB channels — technically different, often looks flatter.
- **True black-and-white (1-bit)** allows only pure black or pure white pixels, with no gray tones — good for line art and stamps but wrong for photos.

This tool produces true 8-bit grayscale with 256 levels of gray — the standard for photographic use.

## Tips

- **Increase contrast** after converting for a punchier look. Many photos read as flat in grayscale because color contrast (blue vs orange) disappears — luminance contrast has to carry the whole image.
- **Convert before compression.** Grayscale JPEGs are smaller than color JPEGs at the same quality, since chroma channels are absent.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "What formula is used?", a: "Rec. 709 luminance: 0.2126 × Red + 0.7152 × Green + 0.0722 × Blue. This matches human perception — greens contribute most to perceived brightness." },
      { q: "Is grayscale the same as black and white?", a: "In everyday language yes, but strictly grayscale is 256 shades of gray while true black-and-white is 1-bit (only pure black or white). This tool produces 8-bit grayscale." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/image-to-base64": {
    title: "Image to Base64 Encoder — Free Online Data URL",
    metaDescription: "Convert any image to Base64 data URL online. Free encoder for JPG, PNG, SVG, WebP — inline images in CSS, HTML, or JSON. No signup.",
    keyword: "image to base64",
    intro: [
      "Convert any image into a Base64 data URL you can paste directly into CSS, HTML, JSON, or emails. Instant, private, no signup — the image never leaves your browser.",
      "Perfect for embedding icons in stylesheets, sending images through APIs that only accept text, or including small graphics in a single-file HTML.",
    ],
    features: [
      "JPG, PNG, SVG, WebP, GIF supported",
      "Copies the full data URL including the MIME type",
      "One-click copy for CSS or HTML",
      "Everything runs locally",
    ],
    guide: `## What the Image to Base64 Tool does

Base64 encoding turns binary data (like an image) into a plain-text string using 64 ASCII characters. This lets you embed an image directly inside a CSS file, an HTML attribute, a JSON payload, or an email — anywhere binary data can't go but text can.

The tool reads your image, encodes it in Base64, and returns a full \`data:\` URL like \`data:image/png;base64,iVBORw0KG...\`. Copy the URL and paste it wherever you need it.

## When to use Base64 images

- **CSS backgrounds** for small icons that don't warrant a separate HTTP request.
- **Inline HTML** in email templates where external images may be blocked.
- **Single-file HTML** exports where everything travels together.
- **JSON APIs** that accept image uploads as strings.
- **Chrome extensions and userscripts** where bundling an image without a network fetch is easier.

## When NOT to use Base64

- **Large images.** Base64 inflates size by about 33%. A 100 KB PNG becomes ~133 KB of text. For anything over ~10 KB, a normal image file with a URL is faster.
- **Cachable assets.** A regular image URL can be cached across pages; an inlined Base64 image is re-downloaded with every page.
- **Content changes.** If the same image is used on multiple pages, an inline copy has to change everywhere; a URL only changes once.

## Step-by-step

**1. Upload your image.** Drag any JPG, PNG, SVG, WebP, or GIF.

**2. Copy the data URL.** The full \`data:image/...;base64,...\` string is shown ready to paste.

**3. Paste into your CSS or HTML.** Use it in \`background-image: url("data:...");\` or an \`<img src="data:...">\` tag.

## Best practice: keep it small

Base64 is worth it for images under 5–10 KB. For anything larger, use a normal file and let the browser cache it. Icon fonts and SVG (which is already text) are usually better than Base64 for tiny UI graphics.

## Tips

- **Minify SVG first** for the smallest possible data URL.
- **Consider CSS \`content-visibility\`** and lazy loading for large image galleries rather than inlining them.

## Privacy

Encoding happens in your browser — nothing is uploaded.`,
    faqs: [
      { q: "How much does Base64 increase file size?", a: "Base64 encoding adds about 33% to the file size. A 100 KB PNG becomes roughly 133 KB when encoded." },
      { q: "Should I inline all my images in CSS?", a: "Only tiny icons (under ~5 KB). Larger images should use normal URLs so the browser can cache them across pages." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/invert": {
    title: "Invert Image Colors Online — Free Negative Tool",
    metaDescription: "Invert image colors online — create a photographic negative. Free, instant, private. Works on JPG, PNG, and WebP. No signup.",
    keyword: "invert image colors",
    intro: [
      "Invert the colors of any image to create a photographic-negative effect. Whites become black, blacks become white, and every color flips to its complement.",
      "Useful for old-film aesthetics, dark-mode design mockups, and revealing details in scanned x-rays or documents.",
    ],
    features: [
      "True color inversion (255 − channel)",
      "Works on JPG, PNG, WebP",
      "Instant preview and download",
      "Runs 100% in your browser",
    ],
    guide: `## What the Invert Colors Tool does

Invert every pixel's color by subtracting each channel value from 255. A pure white pixel (255, 255, 255) becomes pure black (0, 0, 0). Red becomes cyan, green becomes magenta, blue becomes yellow — every color is replaced with its complement.

## When to invert an image

- **Photographic negative aesthetic.** Recreates the look of a film negative — good for editorial and experimental design.
- **Dark-mode UI mockups.** Quickly convert a light-mode screenshot to see how it might look inverted, before designing a proper dark theme.
- **Reveal detail.** Sometimes an image with heavy shadow shows more detail when inverted. Medical scans, faded documents, and low-light photos can benefit.
- **Print-preview for chalkboards / dark backgrounds.** Design something on white, invert to see how it will look on dark.
- **Creative overlays.** Inverted textures make interesting layer effects in editing software.

## Step-by-step

**1. Upload your image.** Any JPG, PNG, or WebP.

**2. See the inverted result** immediately in the preview.

**3. Download** the inverted image in the format you want.

## Invert vs true dark-mode

Inverting a UI screenshot is not the same as designing a real dark theme. Inversion flips brand colors to their complements — a red button becomes cyan — which is rarely what you want in production. It's a useful sketch tool but a poor deliverable. For real dark mode, redesign with intentional colors.

## Invert vs negative photography

A true film negative also inverts brightness and applies an orange base tint. This tool produces a straight color inversion without the base tint, which reads cleaner for most modern uses. To simulate a true negative, invert first, then apply an orange color balance in a full editor.

## Tips

- **Invert twice = original.** Handy to remember: inverting an already-inverted image restores the original exactly, with no loss.
- **Combine with grayscale** for a stark negative look — invert, then desaturate, or vice versa.

## Privacy

Inversion runs in your browser. The image is never uploaded.`,
    faqs: [
      { q: "Is invert the same as dark mode?", a: "No. Invert flips every color to its complement — brand colors will look wrong. Real dark mode is designed with intentional color choices, not an automatic invert." },
      { q: "Does inverting lose quality?", a: "No. Invert is a lossless per-pixel operation — every pixel is mathematically reversed and the reverse is exact." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/jpg-to-webp": {
    title: "JPG to WebP Converter — Free Online, Smaller Files",
    metaDescription: "Convert JPG to WebP online for smaller, faster-loading images. Free JPG to WebP tool with quality control. Private, no signup, browser-based.",
    keyword: "jpg to webp",
    intro: [
      "Convert JPG images to WebP for 25–35% smaller file sizes at the same visual quality. Perfect for websites, apps, and any place where page speed matters.",
      "Runs entirely in your browser — the image never leaves your device.",
    ],
    features: [
      "Quality slider (10–100)",
      "Batch multiple files at once",
      "Preserves original dimensions",
      "Private, browser-based conversion",
    ],
    guide: `## What JPG to WebP does

Convert JPG (JPEG) images to WebP, a modern image format developed by Google that produces smaller files than JPG at the same visual quality. Typical savings are 25–35% for photographs, and up to 50% for images with flat color.

## When to use WebP

- **Websites and web apps.** Every KB shaved from image weight helps page speed, Core Web Vitals, and SEO.
- **Blogs.** Faster image loads keep readers engaged, especially on mobile.
- **E-commerce.** Product photos load faster, which measurably improves conversion.
- **Email newsletters** where email clients support WebP (Apple Mail, Outlook 365, most modern webmail).
- **CMS uploads.** Many modern CMSs (WordPress, Ghost, Shopify) prefer WebP for storage.

## When NOT to use WebP

- **Sending photos to friends or older tools.** WhatsApp, older photo viewers, and some email programs may not open WebP well. Stick with JPG for personal sharing.
- **Print workflows.** Professional printers expect TIFF or high-quality JPG, not WebP.
- **Legacy compatibility.** Very old browsers (IE 11, pre-2020 Safari on iOS) don't support WebP. Modern browsers all do.

## Step-by-step

**1. Upload your JPG.** Drag one or many files into the drop zone.

**2. Choose a quality level.** 80 is a great default. 90+ for high-quality photography; 60–70 for thumbnails.

**3. Download each WebP.** One click per file, or download all at once.

## Quality settings, in plain English

- **90–100:** Visually indistinguishable from the original JPG, files 20–25% smaller.
- **75–85:** The sweet spot for most web use. Barely any visible difference, files 30–40% smaller.
- **60–70:** Thumbnails and previews. Some soft artifacts but acceptable for small display sizes.
- **Below 60:** Only for tiny thumbnails or heavy compression scenarios.

## Tips

- **Serve WebP with a JPG fallback** using the HTML \`<picture>\` element for maximum browser support.
- **Recompress carefully.** Converting a JPG to WebP compresses an already-lossy image. Set WebP quality one notch higher than the source JPG to avoid visible degradation.

## Privacy

All conversion happens in your browser.`,
    faqs: [
      { q: "How much smaller is WebP than JPG?", a: "Typically 25–35% smaller at the same visual quality for photographs. Up to 50% smaller for images with flat colors or transparency." },
      { q: "Do all browsers support WebP?", a: "All modern browsers (Chrome, Firefox, Safari 14+, Edge) support WebP. Only very old browsers do not." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/png-to-webp": {
    title: "PNG to WebP Converter — Free Online, Smaller PNGs",
    metaDescription: "Convert PNG to WebP online for smaller files while keeping transparency. Free PNG to WebP converter — no signup, private, browser-based.",
    keyword: "png to webp",
    intro: [
      "Convert PNG images to WebP for dramatically smaller file sizes while keeping full transparency support. Perfect for logos, icons, and graphics on modern websites.",
      "Everything runs in your browser — the image is never uploaded.",
    ],
    features: [
      "Preserves alpha transparency",
      "Lossless and lossy modes",
      "Batch convert multiple files",
      "Private, browser-based",
    ],
    guide: `## What PNG to WebP does

Convert PNG images to WebP, keeping any transparency intact. WebP supports both lossless compression (like PNG but smaller) and lossy compression (much smaller, small quality tradeoff). For images with alpha transparency — logos, icons, cutout product shots — WebP files are typically 25–50% smaller than PNG with no visible quality loss.

## When to convert PNG to WebP

- **Website logos and icons.** Faster load times, same crisp appearance.
- **Cutout product photography** for e-commerce (transparent background, subject only).
- **UI graphics and app assets** where transparency matters.
- **Screenshots** with text — WebP handles sharp edges and text better than JPG.
- **Any PNG larger than 100 KB** on a webpage — the WebP version almost always saves meaningful bandwidth.

## When to keep PNG instead

- **Screenshots that will be edited and re-saved multiple times.** Repeated lossy compression degrades — stay in PNG until final export.
- **Print workflows** where the printer specifies PNG.
- **Places where WebP isn't supported** (some older tools and legacy browsers).

## Step-by-step

**1. Upload your PNG(s).** Drag one or many files into the tool.

**2. Choose lossless or lossy.** Lossless keeps every pixel identical (still typically 20–30% smaller than the source PNG). Lossy compresses further with a quality slider.

**3. Download the WebP files.** One click per image, or download all together.

## Lossless vs lossy

- **Lossless WebP** produces a file that reconstructs to exactly the same pixels as the source PNG. Use for logos, screenshots with text, and any image where sharpness is critical. Typical savings: 20–30%.
- **Lossy WebP** trades tiny visual differences for much smaller files. Use for photographic content where perfect pixel accuracy isn't needed. Typical savings: 50–70% versus PNG.

## Transparency

Both WebP modes preserve alpha transparency. Lossy WebP+alpha is a game-changer — PNG has no lossy mode, so cutout product photos were previously stuck at large file sizes. WebP cuts those sizes dramatically while keeping the transparent background.

## Tips

- **For UI icons under 5 KB**, stick with PNG or SVG — the WebP overhead can outweigh the savings on tiny files.
- **Test on your target browsers.** WebP is universally supported in modern browsers but confirm before committing a legacy site.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "Does WebP support transparency like PNG?", a: "Yes. Both lossless and lossy WebP support alpha transparency. Lossy WebP with alpha is dramatically smaller than transparent PNG." },
      { q: "Which should I choose — lossless or lossy?", a: "Lossless for logos, screenshots, and text-heavy images. Lossy for photos and complex graphics where small visual differences don't matter." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/sepia": {
    title: "Sepia Filter Online — Free Vintage Photo Tool",
    metaDescription: "Apply a sepia filter to any photo online. Free vintage tone tool — instant, private, no signup. Works on JPG, PNG, and WebP.",
    keyword: "sepia filter online",
    intro: [
      "Apply a classic sepia tone to any photo for a warm, vintage look. One click, instant preview, download in your original format.",
      "Runs entirely in your browser — no upload, no signup, no watermark.",
    ],
    features: [
      "True sepia tone (warm brown)",
      "Works on JPG, PNG, WebP",
      "Instant preview",
      "Free, private, browser-based",
    ],
    guide: `## What the Sepia Filter does

Sepia tone recolors an image into shades of warm brown, mimicking the look of 19th-century photographs that were toned with real sepia ink (from cuttlefish) to preserve them. Applied to any modern photo, the effect immediately evokes an antique, timeless quality.

The tool uses the classic sepia transformation matrix, which converts each pixel's RGB values into weighted browns, giving results that look genuinely aged rather than orange-tinted.

## When to use sepia

- **Portraits.** Sepia is flattering to skin tones and gives even a casual selfie a formal, timeless feel.
- **Weddings, anniversaries, and reunions.** For photo books and prints where you want a "then and now" feeling.
- **Historical projects.** Family trees, genealogy pages, and history essays where modern color photos would look jarring beside genuine old ones.
- **Product photography for artisanal brands.** Whiskey, leather goods, and heritage products often lean into a sepia aesthetic.
- **Blog and social posts** for storytelling — memoir posts, throwback Thursdays, and nostalgic content.

## Step-by-step

**1. Upload your photo.** Any JPG, PNG, or WebP.

**2. See the sepia preview** instantly.

**3. Download the result** in the format of your choice.

## Sepia vs black-and-white

- **Black-and-white** is stark, journalistic, timeless in a modern way.
- **Sepia** is warm, romantic, and reads as historical. It's softer on skin tones and often more flattering for portraits.

Many photographers apply sepia to already-converted grayscale photos — the effect is more controllable when the source is already tonal.

## Tips

- **Lower contrast first** for a more authentic aged look. Old photos rarely had crisp deep blacks or brilliant whites.
- **Add subtle grain** in a full editor after applying sepia for even more authenticity.
- **Try a slight vignette** to focus the eye on the subject — most vintage photos had them naturally.

## Privacy

All processing runs in your browser. No upload.`,
    faqs: [
      { q: "Can I control how strong the sepia is?", a: "This tool applies a classic full-strength sepia. For a subtler effect, apply sepia then blend the result with the original in a full editor." },
      { q: "Does it work on already black-and-white photos?", a: "Yes. Applying sepia to a grayscale image is actually the classical approach and often gives the most controlled result." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/image-tools/webp-to-png": {
    title: "WebP to PNG Converter — Free Online, No Signup",
    metaDescription: "Convert WebP to PNG online. Free WebP to PNG converter with full transparency support. Private, browser-based, no signup required.",
    keyword: "webp to png",
    intro: [
      "Convert WebP images to PNG for compatibility with tools, apps, and older browsers that don't support WebP. Keeps transparency intact.",
      "Everything runs in your browser — the image is never uploaded.",
    ],
    features: [
      "Preserves transparency",
      "Batch convert multiple files",
      "Lossless PNG output",
      "Private, browser-based",
    ],
    guide: `## What WebP to PNG does

WebP is a modern format that saves space but isn't accepted by every tool. This converter turns a WebP file back into a standard PNG that opens anywhere — Photoshop, older browsers, most email clients, print software, and every image viewer ever made.

## When to convert WebP to PNG

- **Design tools** that don't support WebP (older versions of Photoshop, Illustrator, Sketch, some CMS uploaders).
- **Email attachments** where recipients might use older mail clients.
- **Editing workflows** where you'll re-save the image several times — PNG is lossless, so quality doesn't degrade.
- **Print submission.** Most print vendors accept PNG, not WebP.
- **Compatibility with legacy tools** that specifically expect PNG input.
- **Any time you download a WebP from the web** and want to edit it in a program that refuses to open it.

## Step-by-step

**1. Upload your WebP.** Drag one or many files into the drop zone.

**2. See the file list.** Every WebP is ready to convert.

**3. Download each PNG.** One click per file, or download all at once.

## About transparency

If your WebP has a transparent background, the PNG output preserves it exactly. PNG is a lossless format, so every pixel of alpha data is kept perfectly intact.

## Why PNG output is larger

WebP is a more efficient format than PNG. A 500 KB WebP might become a 1.5 MB PNG. This is expected and unavoidable — PNG's compression is less aggressive. If file size matters and you don't need the compatibility, keep the WebP.

## The right-click "Save as PNG" trick

Modern browsers let you right-click a WebP on any website and choose "Save image as…" — but the file often keeps the .webp extension. This converter is the fix: drop the downloaded WebP in and get a genuine PNG that works everywhere.

## Tips

- **Batch mode** saves time. Drop 20 WebPs and convert them all at once.
- **If you're re-saving multiple times, stay in PNG.** Lossless format means quality never degrades no matter how many edits you make.

## Privacy

Conversion happens entirely in your browser.`,
    faqs: [
      { q: "Does the PNG keep the WebP's transparency?", a: "Yes. If the source WebP has an alpha channel, the exported PNG preserves it exactly." },
      { q: "Why is my PNG bigger than the WebP?", a: "PNG uses less aggressive compression than WebP. A 3–4× size increase is normal — that's the tradeoff for universal compatibility." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
};
