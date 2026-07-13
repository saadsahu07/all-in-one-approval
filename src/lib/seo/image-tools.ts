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
  },
};
