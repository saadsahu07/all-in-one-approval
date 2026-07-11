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
  Youtube, Wand2,
} from "lucide-react";

export interface ToolDef {
  slug: string;
  path: string;
  name: string;
  short: string;
  icon: LucideIcon;
  category: string;
}

export interface CategoryDef {
  slug: string;
  path: string;
  name: string;
  short: string;
  icon: LucideIcon;
  tools: ToolDef[];
}

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
    ]),
  },
];

export const allTools: ToolDef[] = categories.flatMap((c) => c.tools);

export function getCategory(slug: string): CategoryDef | undefined {
  return categories.find((c) => c.slug === slug);
}