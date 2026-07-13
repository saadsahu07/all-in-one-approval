import type { ToolSeo } from './types';

export const seo: Record<string, ToolSeo> = {
  "/developer-tools/json-formatter": {
    title: "JSON Formatter — Pretty Print & Beautify JSON",
    metaDescription: "Format, beautify, and pretty-print JSON online. Free JSON formatter with instant validation — no signup, in-browser.",
    keyword: "JSON formatter",
    intro: [
      "Paste raw or minified JSON and get a clean, indented, easy-to-read result in one click. Perfect for debugging API responses, config files, and logs.",
      "Errors are highlighted with line and column info. Everything runs in your browser.",
    ],
    features: [
      "Pretty-print with configurable indent",
      "Instant syntax validation with clear errors",
      "One-click copy of the formatted result",
    ],
    faqs: [
      { q: "Is my JSON sent anywhere?", a: "No. Formatting and validation happen entirely in your browser." },
      { q: "Does it support huge JSON files?", a: "It handles files into the tens of megabytes. Extremely large files may briefly freeze the tab while parsing." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/json-validator": {
    title: "JSON Validator — Check JSON Syntax Online Free",
    metaDescription: "Validate JSON syntax and see clear error messages with line numbers. Free online JSON validator — no signup, in-browser.",
    keyword: "JSON validator",
    intro: [
      "Check any JSON snippet for syntax errors with clear line-and-column messages. Useful for debugging API responses, config files, and copy-paste JSON.",
      "Validation runs in your browser and never uploads your data.",
    ],
    features: [
      "Clear, line-numbered error messages",
      "Follows the strict JSON specification",
      "Handles both single objects and arrays",
    ],
    faqs: [
      { q: "Does it validate against a schema?", a: "This tool checks JSON syntax only. Schema validation (JSON Schema) is a separate step best done in code." },
      { q: "Is my JSON private?", a: "Yes. Validation happens entirely in your browser." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/base64-encode": {
    title: "Base64 Encoder — Encode Text to Base64 Online",
    metaDescription: "Encode plain text to Base64 format in one click. Free online Base64 encoder — no signup, in-browser, unicode-safe.",
    keyword: "Base64 encoder",
    intro: [
      "Encode any plain text into Base64 for safe transport in URLs, JSON, HTTP headers, or email. Handles unicode correctly.",
      "Everything happens in your browser and nothing is stored.",
    ],
    features: [
      "Unicode-safe Base64 encoding",
      "Instant conversion as you type",
      "One-click copy of the encoded result",
    ],
    faqs: [
      { q: "Is Base64 secure encryption?", a: "No. Base64 is an encoding, not encryption — anyone can decode it. Use it for transport, not secrecy." },
      { q: "Does it handle unicode?", a: "Yes. Multi-byte characters like emoji and non-Latin scripts are encoded correctly." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/base64-decode": {
    title: "Base64 Decoder — Decode Base64 to Text Online",
    metaDescription: "Decode Base64 strings back to readable text or files. Free online Base64 decoder — no signup, in-browser, unicode-safe.",
    keyword: "Base64 decoder",
    intro: [
      "Decode any Base64 string back into its original text. Great for reading JWT payloads, data URIs, and encoded HTTP headers.",
      "Decoding is instant and everything runs in your browser.",
    ],
    features: [
      "Unicode-safe Base64 decoding",
      "Handles URL-safe Base64 variants",
      "One-click copy of the decoded result",
    ],
    faqs: [
      { q: "Can it decode a JWT?", a: "Copy the middle segment of a JWT (between the dots) and this tool decodes it into the JSON payload." },
      { q: "What happens with invalid input?", a: "Invalid Base64 is flagged with an error so you can fix the input." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/url-encode": {
    title: "URL Encoder — Encode URL Components Online Free",
    metaDescription: "Encode text for safe use in URLs and query strings. Free online URL encoder — no signup, unicode-safe, in-browser.",
    keyword: "URL encoder",
    intro: [
      "Encode any text so it's safe to drop into a URL query string, path segment, or form value. Handles spaces, special characters, and unicode.",
      "Encoding is instant and runs entirely in your browser.",
    ],
    features: [
      "RFC-compliant percent-encoding",
      "Unicode-safe (handles emoji and non-Latin scripts)",
      "One-click copy of the encoded string",
    ],
    faqs: [
      { q: "What is URL encoding?", a: "It's the process of replacing unsafe characters (like spaces or &) with % escape sequences so they're valid inside a URL." },
      { q: "Does it encode the whole URL?", a: "No — encode only the component (query value, path segment) that contains special characters. Encoding the whole URL breaks its structure." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/url-decode": {
    title: "URL Decoder — Decode Percent-Encoded URLs Free",
    metaDescription: "Decode percent-encoded URLs and query strings back to plain text. Free online URL decoder — no signup, in-browser.",
    keyword: "URL decoder",
    intro: [
      "Decode any percent-encoded URL or query-string value back into readable text. Perfect for debugging redirect chains, campaign URLs, and OAuth flows.",
      "Decoding is instant and runs in your browser.",
    ],
    features: [
      "RFC-compliant decoding",
      "Handles unicode and repeated encoding",
      "One-click copy of the decoded result",
    ],
    faqs: [
      { q: "What is a percent-encoded URL?", a: "A URL where special characters have been replaced with % escape sequences (e.g. %20 for a space) so the URL is safe to transmit." },
      { q: "Can I decode a URL that was encoded multiple times?", a: "Yes — run the decoder repeatedly until the output stops changing." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/html-minifier": {
    title: "HTML Minifier — Strip Whitespace from HTML Free",
    metaDescription: "Minify HTML by removing comments and whitespace. Free online HTML minifier — no signup, in-browser, safe for production.",
    keyword: "HTML minifier",
    intro: [
      "Strip comments, extra whitespace, and unnecessary quotes from HTML to shrink page size for faster loads. Perfect for production builds and email templates.",
      "Everything happens in your browser — safe for confidential markup.",
    ],
    features: [
      "Removes comments and whitespace",
      "Preserves script and style content",
      "Safe for production email and web HTML",
    ],
    faqs: [
      { q: "Will it break my page?", a: "Standards-compliant HTML minifies safely. Malformed HTML that relies on whitespace may need manual review." },
      { q: "How much smaller will the output be?", a: "Typical savings range from 15% to 40% depending on how much whitespace and how many comments the source had." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/css-minifier": {
    title: "CSS Minifier — Compress CSS Online Free",
    metaDescription: "Compress CSS by removing comments, whitespace, and redundant code. Free online CSS minifier — no signup, in-browser.",
    keyword: "CSS minifier",
    intro: [
      "Compress CSS by removing comments, whitespace, and unnecessary formatting. The minified output loads faster and is production-ready.",
      "All minification happens in your browser — great for confidential stylesheets.",
    ],
    features: [
      "Removes comments and whitespace",
      "Shortens colors and safe redundancy",
      "Instant, unlimited use",
    ],
    faqs: [
      { q: "Will it break my styles?", a: "Standard CSS minifies safely. Non-standard hacks may need manual review." },
      { q: "How much smaller will the output be?", a: "Typical savings range from 20% to 50% before gzip." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/js-minifier": {
    title: "JavaScript Minifier — Free Online JS Compression",
    metaDescription: "Lightly minify JavaScript by removing comments and whitespace. Free online JavaScript minifier — no signup, in-browser.",
    keyword: "JavaScript minifier",
    intro: [
      "Lightly minify JavaScript by stripping comments and unnecessary whitespace. Great for quick production tweaks and small utility scripts.",
      "All processing happens in your browser.",
    ],
    features: [
      "Removes comments and whitespace",
      "Preserves strings and regex literals",
      "Safe for standard ES5+ JavaScript",
    ],
    faqs: [
      { q: "Does it mangle variable names?", a: "No. This is a conservative minifier that keeps variable names intact. For aggressive minification and mangling, use a build-step tool like Terser." },
      { q: "Is my code private?", a: "Yes. Minification happens entirely in your browser." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/developer-tools/password-generator": {
    title: "Password Generator — Strong Random Passwords Free",
    metaDescription: "Generate strong, random passwords with custom length and character sets. Free online password generator — no signup, in-browser.",
    keyword: "password generator",
    intro: [
      "Generate strong, random passwords with the exact length and character mix you need. Perfect for creating account credentials, API keys, and one-time secrets.",
      "Passwords are generated locally using cryptographically secure randomness — never sent to a server.",
    ],
    features: [
      "Adjustable length up to 128 characters",
      "Include uppercase, lowercase, numbers, symbols",
      "Cryptographically secure (uses crypto.getRandomValues)",
    ],
    faqs: [
      { q: "Are the passwords truly random?", a: "Yes. Generation uses your browser's built-in cryptographically secure random API — the same source real security libraries use." },
      { q: "Do you store or log passwords?", a: "No. Passwords are generated in your browser and never leave your device." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
};
