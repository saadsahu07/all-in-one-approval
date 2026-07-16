/**
 * Central catalog of every tool the site exposes.
 *
 * This module is imported by the homepage, the header search, category
 * pages, and each individual tool route (via `getCategory`). Adding a new
 * tool is a two-step change:
 *   1. Add an entry to the correct category's `tools` array below.
 *   2. Create the matching `src/routes/<category>.<slug>.tsx` route file.
 *
 * Keep the shape stable — downstream code assumes every tool has a unique
 * `path` (used as its React key and canonical URL) and a bound `category`.
 */
import type { LucideIcon } from "lucide-react";
import {
  Sparkles, SpellCheck, Repeat2, Hash, Type, CaseSensitive, ListX, ArrowDownAZ,
  FlipHorizontal2, FileText, Minimize2, Scaling, ImageDown, ImageUp, Crop,
  Eraser, RotateCw, FileImage, Stamp, QrCode, Merge, Scissors, FileArchive,
  FileOutput, FileInput, Images, FileUp, RefreshCw, Unlock, ListOrdered,
  Braces, CheckCircle2, Binary, FileCode2, Link2, Link2Off, Code2, Paintbrush,
  FileCode, KeyRound, CalendarDays, HeartPulse, Percent, Receipt, Landmark,
  Coins, Ruler, Weight, Thermometer, Calculator,
  PenLine, Image as ImageIcon, FileStack, TerminalSquare,
  Youtube, Wand2, Image as ImageIcon2, Lightbulb,
  Link as LinkIcon, Fingerprint, ShieldCheck, Utensils, Tag,
} from "lucide-react";
import {
  Instagram, MessageSquare, Music2, Newspaper, ListTree, Search as SearchIcon, Mail,
} from "lucide-react";
import {
  Facebook, Linkedin, Video, Megaphone, ShoppingBag, IdCard, Target,
} from "lucide-react";
import {
  Palette, Regex, Clock, GitCompare, Slash,
} from "lucide-react";
import {
  Square, Box, Gauge, Timer, HardDrive, TrendingUp, PiggyBank, CalendarClock,
  FileMinus, Copy as CopyIcon, PlusSquare, Droplets, Info, FileType, LayoutGrid, FlipVertical2,
} from "lucide-react";

/** Single tool entry (a leaf page under a category). */
export interface ToolDef {
  slug: string;
  path: string;
  name: string;
  short: string;
  icon: LucideIcon;
  category: string;
}

/** Grouping of related tools; renders as a landing page + nav entry. */
export interface CategoryDef {
  slug: string;
  path: string;
  name: string;
  short: string;
  icon: LucideIcon;
  tools: ToolDef[];
}

/**
 * Turn the terse tuple form used in category definitions into full
 * `ToolDef` objects. Kept private so callers can't skip the required
 * `category`/`path` fields.
 */
function make(category: string, base: string, list: [string, string, string, LucideIcon][]): ToolDef[] {
  return list.map(([slug, name, short, icon]) => ({
    slug, name, short, icon, category,
    path: `${base}/${slug}`,
  }));
}

export const categories: CategoryDef[] = [
  {
    slug: "text-tools", path: "/text-tools", name: "Text Tools",
    short: "Summarize, check, count, convert, and clean up text.",
    icon: PenLine,
    tools: make("text-tools", "/text-tools", [
      ["ai-summarizer", "AI Text Summarizer", "Condense long text into a clear summary with AI.", Sparkles],
      ["grammar-checker", "Grammar Checker", "Find and fix grammar, spelling, and punctuation mistakes.", SpellCheck],
      ["paraphraser", "Paraphrasing Tool", "Rewrite text in fresh words while keeping the meaning.", Repeat2],
      ["word-counter", "Word Counter", "Count words, sentences, and reading time instantly.", Hash],
      ["character-counter", "Character Counter", "Count characters with and without spaces.", Type],
      ["case-converter", "Case Converter", "Switch text between upper, lower, title, and sentence case.", CaseSensitive],
      ["remove-duplicate-lines", "Remove Duplicate Lines", "Delete repeated lines from any list or text.", ListX],
      ["text-sorter", "Text Sorter", "Sort lines alphabetically, reversed, or by length.", ArrowDownAZ],
      ["text-reverser", "Text Reverser", "Reverse text, words, or lines in one click.", FlipHorizontal2],
      ["lorem-ipsum", "Lorem Ipsum Generator", "Generate placeholder text for designs and mockups.", FileText],
      ["slugify", "Slug Generator", "Convert any text into a clean, URL-friendly slug.", LinkIcon],
      ["text-repeater", "Text Repeater", "Repeat any text or phrase as many times as you need.", Repeat2],
      ["remove-line-breaks", "Remove Line Breaks", "Strip line breaks or replace them with a chosen separator.", Minimize2],
      ["add-line-numbers", "Add Line Numbers", "Prefix every line of your text with a line number.", ListOrdered],
      ["text-to-binary", "Text to Binary", "Encode any text into its binary (8-bit) representation.", Binary],
      ["binary-to-text", "Binary to Text", "Decode 8-bit binary back into readable text.", FileCode2],
      ["rot13", "ROT13 Encoder / Decoder", "Encode or decode text with the classic ROT13 cipher.", KeyRound],
      ["find-replace", "Find and Replace Text", "Find every match in your text and replace it in one click.", SpellCheck],
      ["word-frequency", "Word Frequency Counter", "Count how often each word appears in your text.", Hash],
      ["whitespace-remover", "Whitespace Remover", "Collapse extra spaces, tabs, and blank lines.", Eraser],
    ]),
  },
  {
    slug: "image-tools", path: "/image-tools", name: "Image Tools",
    short: "Compress, resize, convert, and edit images in your browser.",
    icon: ImageIcon,
    tools: make("image-tools", "/image-tools", [
      ["compress", "Image Compressor", "Shrink image file size while keeping quality.", Minimize2],
      ["resize", "Image Resizer", "Resize images to exact pixel dimensions.", Scaling],
      ["jpg-to-png", "JPG to PNG Converter", "Convert JPG photos to lossless PNG format.", ImageUp],
      ["png-to-jpg", "PNG to JPG Converter", "Convert PNG images to smaller JPG files.", ImageDown],
      ["crop", "Image Cropper", "Crop images to a custom area or aspect ratio.", Crop],
      ["background-remover", "Background Remover", "Remove image backgrounds automatically with AI.", Eraser],
      ["rotate", "Image Rotator", "Rotate or flip images in 90° steps.", RotateCw],
      ["image-to-pdf", "Image to PDF", "Combine one or more images into a PDF document.", FileImage],
      ["watermark", "Watermark Adder", "Add a text watermark to protect your images.", Stamp],
      ["qr-code", "QR Code Generator", "Create QR codes for links, text, and more.", QrCode],
      ["flip", "Image Flipper", "Flip images horizontally or vertically in one click.", FlipHorizontal2],
      ["webp-to-png", "WebP to PNG Converter", "Convert WebP images to lossless PNG format.", ImageUp],
      ["png-to-webp", "PNG to WebP Converter", "Convert PNG images to lightweight WebP files.", ImageDown],
      ["jpg-to-webp", "JPG to WebP Converter", "Convert JPG photos to modern WebP for smaller files.", ImageDown],
      ["image-to-base64", "Image to Base64", "Encode any image as a Base64 data URL for embedding.", Binary],
      ["grayscale", "Grayscale Converter", "Convert any image into a clean black-and-white version.", Palette],
      ["blur", "Image Blur", "Apply an adjustable Gaussian blur to any image.", Droplets],
      ["sepia", "Sepia Filter", "Give any image a warm, vintage sepia-toned look.", Paintbrush],
      ["invert", "Invert Image Colors", "Invert the colors of any image for a negative effect.", FlipVertical2],
      ["border", "Image Border", "Add a solid color border or frame to any image.", Square],
    ]),
  },
  {
    slug: "pdf-tools", path: "/pdf-tools", name: "PDF Tools",
    short: "Merge, split, convert, and edit PDF files privately.",
    icon: FileStack,
    tools: make("pdf-tools", "/pdf-tools", [
      ["merge", "Merge PDF", "Combine multiple PDF files into one document.", Merge],
      ["split", "Split PDF", "Extract a page range into a new PDF.", Scissors],
      ["compress", "Compress PDF", "Reduce PDF file size with basic optimization.", FileArchive],
      ["pdf-to-word", "PDF to Word", "Extract PDF text into an editable Word document.", FileOutput],
      ["word-to-pdf", "Word to PDF", "Convert Word documents into PDF files.", FileInput],
      ["pdf-to-jpg", "PDF to JPG", "Turn each PDF page into a JPG image.", Images],
      ["jpg-to-pdf", "JPG to PDF", "Combine JPG images into a single PDF.", FileUp],
      ["rotate", "Rotate PDF", "Rotate all pages of a PDF in 90° steps.", RefreshCw],
      ["unlock", "Unlock PDF", "Remove editing restrictions from PDFs.", Unlock],
      ["page-numbers", "Add Page Numbers", "Stamp page numbers onto every PDF page.", ListOrdered],
      ["extract-pages", "Extract PDF Pages", "Pick a set of pages and export them as a new PDF.", FileOutput],
      ["remove-pages", "Remove PDF Pages", "Delete unwanted pages from a PDF.", FileMinus],
      ["reverse-pages", "Reverse PDF Pages", "Flip the page order of a PDF end-to-end.", FlipVertical2],
      ["duplicate-pages", "Duplicate PDF Pages", "Duplicate a specific page as many times as you need.", CopyIcon],
      ["add-blank-page", "Add Blank Page to PDF", "Insert a blank page at any position in a PDF.", PlusSquare],
      ["pdf-watermark", "PDF Watermark", "Stamp a text watermark on every page of a PDF.", Droplets],
      ["pdf-metadata", "PDF Metadata Editor", "View and update the title, author, and subject of a PDF.", Info],
      ["pdf-to-text", "PDF to Text", "Extract plain text from a PDF into a .txt file.", FileText],
      ["text-to-pdf", "Text to PDF", "Turn plain text into a clean, downloadable PDF.", FileType],
      ["pdf-n-up", "PDF 2-Up Layout", "Fit two PDF pages side-by-side on each sheet.", LayoutGrid],
    ]),
  },
  {
    slug: "developer-tools", path: "/developer-tools", name: "Developer Tools",
    short: "Format, validate, encode, minify, and generate.",
    icon: TerminalSquare,
    tools: make("developer-tools", "/developer-tools", [
      ["json-formatter", "JSON Formatter", "Pretty-print and beautify JSON data.", Braces],
      ["json-validator", "JSON Validator", "Check JSON for syntax errors with clear messages.", CheckCircle2],
      ["base64-encode", "Base64 Encoder", "Encode text into Base64 format.", Binary],
      ["base64-decode", "Base64 Decoder", "Decode Base64 back into readable text.", FileCode2],
      ["url-encode", "URL Encoder", "Encode text for safe use in URLs.", Link2],
      ["url-decode", "URL Decoder", "Decode percent-encoded URLs into plain text.", Link2Off],
      ["html-minifier", "HTML Minifier", "Strip comments and whitespace from HTML.", Code2],
      ["css-minifier", "CSS Minifier", "Compress CSS by removing comments and spaces.", Paintbrush],
      ["js-minifier", "JavaScript Minifier", "Lightly minify JavaScript code.", FileCode],
      ["password-generator", "Password Generator", "Create strong random passwords instantly.", KeyRound],
      ["uuid-generator", "UUID Generator", "Generate v4 UUIDs in bulk with one click.", Fingerprint],
      ["jwt-decoder", "JWT Decoder", "Decode a JWT to inspect its header and payload.", ShieldCheck],
      ["hash-generator", "Hash Generator", "Compute SHA-1, SHA-256, SHA-384, and SHA-512 hashes.", Hash],
      ["color-converter", "Color Converter", "Convert colors between HEX, RGB, and HSL formats.", Palette],
      ["lorem-ipsum-generator", "Lorem Ipsum Generator", "Generate placeholder Lorem Ipsum paragraphs, sentences, or words.", FileText],
      ["regex-tester", "Regex Tester", "Test regular expressions against sample text with live matches.", Regex],
      ["timestamp-converter", "Timestamp Converter", "Convert between Unix timestamps and human-readable dates.", Clock],
      ["slug-generator", "Slug Generator", "Turn any title into a clean URL-friendly slug.", Slash],
      ["text-diff", "Text Diff Checker", "Compare two blocks of text and highlight the differences.", GitCompare],
      ["number-base-converter", "Number Base Converter", "Convert numbers between binary, octal, decimal, and hex.", Binary],
    ]),
  },
  {
    slug: "calculators", path: "/calculators", name: "Calculators & Converters",
    short: "Everyday calculators and unit converters.",
    icon: Calculator,
    tools: make("calculators", "/calculators", [
      ["age", "Age Calculator", "Work out exact age in years, months, and days.", CalendarDays],
      ["bmi", "BMI Calculator", "Calculate body mass index from height and weight.", HeartPulse],
      ["percentage", "Percentage Calculator", "Solve common percentage problems fast.", Percent],
      ["gst-vat", "GST / VAT Calculator", "Add or remove tax from any amount.", Receipt],
      ["emi", "EMI Calculator", "Estimate monthly loan payments and total interest.", Landmark],
      ["currency-converter", "Currency Converter", "Convert between world currencies with live rates.", Coins],
      ["length", "Length Converter", "Convert between metric and imperial lengths.", Ruler],
      ["weight", "Weight Converter", "Convert kilograms, pounds, ounces, and more.", Weight],
      ["temperature", "Temperature Converter", "Convert Celsius, Fahrenheit, and Kelvin.", Thermometer],
      ["binary-to-decimal", "Binary to Decimal", "Convert binary numbers to decimal and back.", Binary],
      ["tip", "Tip Calculator", "Split a bill and calculate tip per person.", Utensils],
      ["discount", "Discount Calculator", "Work out sale prices and how much you save.", Tag],
      ["area", "Area Calculator", "Calculate area of a rectangle, circle, or triangle.", Square],
      ["volume", "Volume Calculator", "Calculate volume of a box, sphere, or cylinder.", Box],
      ["speed", "Speed Converter", "Convert km/h, mph, m/s, and knots.", Gauge],
      ["time", "Time Converter", "Convert seconds, minutes, hours, and days.", Timer],
      ["data-storage", "Data Storage Converter", "Convert bytes, KB, MB, GB, and TB.", HardDrive],
      ["compound-interest", "Compound Interest Calculator", "Project savings growth with compound interest.", TrendingUp],
      ["simple-interest", "Simple Interest Calculator", "Compute simple interest, total, and rate.", PiggyBank],
      ["date-difference", "Date Difference Calculator", "Find days, weeks, months between two dates.", CalendarClock],
    ]),
  },
  {
    slug: "content-creation", path: "/content-creation", name: "Content Creation",
    short: "AI-powered tools to plan, script, and optimize your content.",
    icon: Wand2,
    tools: make("content-creation", "/content-creation", [
      ["youtube-tag-generator", "YouTube Tag Generator", "Generate SEO-optimized YouTube tags from a video title with AI.", Youtube],
      ["youtube-title-generator", "YouTube Title Generator", "Generate catchy, click-worthy YouTube video titles with AI.", Youtube],
      ["youtube-description-generator", "YouTube Description Generator", "Write SEO-friendly YouTube video descriptions with AI.", Youtube],
      ["youtube-thumbnail-downloader", "YouTube Thumbnail Downloader", "Download HD, SD, and HQ thumbnails from any YouTube video.", ImageIcon2],
      ["youtube-video-idea-generator", "YouTube Video Idea Generator", "Generate 10 fresh YouTube video ideas from a niche or keyword.", Lightbulb],
      ["instagram-caption-generator", "Instagram Caption Generator", "Write 5 scroll-stopping Instagram captions from any topic with AI.", Instagram],
      ["instagram-hashtag-generator", "Instagram Hashtag Generator", "Get 30 relevant Instagram hashtags mixing broad, medium, and niche reach.", Hash],
      ["tweet-generator", "Tweet Generator", "Generate 5 shareable tweets under 280 characters from any topic.", MessageSquare],
      ["tiktok-caption-generator", "TikTok Caption Generator", "Write 5 punchy TikTok captions with hooks and hashtags in seconds.", Music2],
      ["blog-title-generator", "Blog Title Generator", "Generate 10 SEO-friendly, click-worthy blog post titles with AI.", Newspaper],
      ["blog-outline-generator", "Blog Outline Generator", "Create a full H2/H3 blog outline with FAQs from any working title.", ListTree],
      ["meta-description-generator", "Meta Description Generator", "Write 5 SEO meta descriptions (140-160 chars) for any page title.", SearchIcon],
      ["email-subject-line-generator", "Email Subject Line Generator", "Generate 10 high open-rate email subject lines from your topic.", Mail],
      ["facebook-post-generator", "Facebook Post Generator", "Write 5 engaging Facebook posts under 400 characters with a clear CTA.", Facebook],
      ["linkedin-post-generator", "LinkedIn Post Generator", "Write 3 LinkedIn posts with strong hooks that survive the 3-line preview cut.", Linkedin],
      ["youtube-shorts-script-generator", "YouTube Shorts Script Generator", "Write a full 30-45 second Shorts script with hook, body, payoff, and CTA.", Video],
      ["slogan-generator", "Slogan Generator", "Generate 10 short, memorable slogans for any brand or product.", Megaphone],
      ["product-description-generator", "Product Description Generator", "Write conversion-focused product descriptions with benefits and bullets.", ShoppingBag],
      ["bio-generator", "Bio Generator", "Write 5 short bios for Instagram, TikTok, Twitter, or LinkedIn profiles.", IdCard],
      ["ad-copy-generator", "Ad Copy Generator", "Generate 5 ad variants with headline, primary text, and CTA button.", Target],
    ]),
  },
];

/** Flat list of every tool across every category. Used by the homepage
 *  "all tools" grid and the header search index. */
export const allTools: ToolDef[] = categories.flatMap((c) => c.tools);

/** Look up a category by its URL slug. Returns undefined for unknown slugs
 *  so callers can render a 404 without throwing. */
export function getCategory(slug: string): CategoryDef | undefined {
  return categories.find((c) => c.slug === slug);
}