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
    guide: `## What JSON formatting does

JSON is easy for machines to parse and hard for humans to read once it's minified. The formatter pretty-prints your JSON with proper indentation, one key per line, and consistent quoting so you can actually see the structure. It also catches syntax errors — trailing commas, unquoted keys, single quotes — that would otherwise show up as cryptic "Unexpected token" messages in your code.

## Step-by-step

**1. Paste your JSON** into the input area. Any size works.

**2. Read the formatted output.** Nested objects and arrays are indented; each key sits on its own line. Errors, if any, are highlighted with the exact position so you can jump straight to the problem.

**3. Copy the cleaned version** back into your file, or minify it if the destination cares about size.

## Common uses

- **API responses** you want to inspect before writing parsing code.
- **Config files** — package.json, tsconfig.json, eslint.json — where indentation matters for readability but the file arrived on one line.
- **Debugging** where an endpoint returns JSON as one long string and you can't tell what's inside.
- **Diffing** — two formatted versions produce a readable git diff; two minified versions don't.

## Tips

- **Sort keys** if you're comparing two similar JSON documents. Two files with identical content but different key orders otherwise look completely different.
- **Watch for trailing commas.** JSON5 and JavaScript object literals allow them; strict JSON does not. Most syntax errors in hand-edited JSON come from this.
- **Use double quotes only.** Single quotes are not valid JSON, even though JavaScript accepts them.
- **Escape correctly.** Newlines inside strings must be \`\\n\`, not literal line breaks. The formatter will flag this for you.

## Privacy

Formatting runs entirely in your browser. Nothing you paste is sent to a server or logged.`,
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
    guide: `## Why validate JSON

A single missing bracket or trailing comma turns a valid JSON document into an error that breaks every downstream consumer. Instead of finding out at runtime — when your API call fails, your build breaks, or your config silently loads defaults — validate first and fix issues while they're still in front of you.

## What the validator does

Parses your JSON with a strict RFC 8259 parser and either confirms it's valid or reports the exact line, column, and cause of the first error. You get either a green tick or a precise pointer to what to fix.

## Step-by-step

**1. Paste your JSON.**

**2. Read the verdict.** Valid JSON gets a confirmation and a formatted view. Invalid JSON gets an error message showing where the parser gave up.

**3. Fix and re-run.** Fix one issue at a time — later errors sometimes disappear once earlier ones are resolved.

## Errors it commonly catches

- **Trailing commas** after the last item in an array or object.
- **Single quotes** instead of double quotes around strings and keys.
- **Unquoted keys** — JavaScript allows them, JSON does not.
- **Missing commas** between array or object elements.
- **Unclosed brackets or braces** — the classic "expected end of input" error.
- **Invalid escape sequences** in strings.
- **Duplicate keys** in the same object (technically allowed but almost always a mistake).

## Tips

- **Validate before committing** any hand-edited config file. A malformed JSON commit that breaks the build is embarrassing and totally avoidable.
- **Use a schema** for anything larger than a config toggle. JSON Schema catches structural mistakes the validator can't — wrong types, missing required fields, out-of-range numbers.
- **Format after validating.** A pretty-printed valid JSON file is much easier to review in code review than the same file on one line.

## Privacy

Validation runs entirely in your browser. Your data never leaves your device.`,
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
    guide: `## What Base64 encoding is

Base64 converts binary data into a text string made only of letters, digits, and the characters \`+\`, \`/\`, and \`=\`. It's not encryption — anyone can decode it — but it lets you shove binary content through channels that only accept text: URLs, JSON, XML, HTTP headers, email bodies, and config files.

## What this tool does

Takes any text or file you drop in and returns the Base64-encoded version. Works on strings (a password, a hash), file contents (a small image, a certificate), or arbitrary binary.

## Step-by-step

**1. Paste text or upload a file.**

**2. Copy the Base64 output.** It's roughly one-third longer than the original — that's the tradeoff for encoding binary as text.

**3. Paste it wherever you need it.** Common targets: \`data:\` URLs, JWT payloads, HTTP Basic Auth headers, JSON fields that need to carry binary.

## When to use Base64

- **Embedding small images** directly into HTML or CSS as \`data:image/png;base64,...\` URLs to save an HTTP request.
- **Storing binary in JSON** — JSON has no binary type, so Base64 is the standard way.
- **HTTP Basic Auth** — the \`Authorization: Basic <base64>\` header uses this encoding.
- **Certificates and keys** — PEM format is Base64-wrapped binary with headers.
- **Email attachments** — MIME transports everything as Base64.

## When not to use Base64

- **Never for encryption.** It's not secret. Anyone with the string can decode it in one line of code.
- **Not for large files** that could be transferred as raw binary — Base64 wastes 33% of the bandwidth.
- **Not for URL parameters** without switching to Base64URL, which uses \`-\` and \`_\` instead of \`+\` and \`/\` (they mean something in URLs).

## Tips

- **Watch for line breaks.** Some Base64 encoders add newlines every 76 characters (email convention). Strip them if the receiver expects one continuous string.
- **Padding matters.** The trailing \`=\` signs aren't decorative — they signal the original length. Don't strip them unless you're using an unpadded variant deliberately.

## Privacy

Encoding runs in your browser. Nothing uploads.`,
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
    guide: `## What Base64 decoding does

Decoding reverses Base64 encoding — you paste the text-safe string and get the original bytes back. This is how you inspect what's inside a \`data:\` URL, a JWT payload, an HTTP Basic Auth header, a certificate, or any other place Base64 shows up.

## Step-by-step

**1. Paste the Base64 string** into the input. Include or exclude the padding \`=\` signs — the decoder handles both.

**2. Choose the output.** Text if you know the source was text (a password, a JSON payload). Download if the source was binary (an image, a PDF, a certificate).

**3. Read or save the result.**

## Common decoding tasks

- **JWT payloads.** Take the middle chunk of a JWT (between the dots) and Base64-decode it to see the claims.
- **HTTP Basic Auth headers.** \`Basic dXNlcjpwYXNz\` decodes to \`user:pass\` — useful for debugging failing API calls.
- **Data URLs.** Extract the image or file embedded in an HTML page.
- **Certificate contents.** PEM-format certificates and keys are Base64 with header/footer lines around them.
- **API debugging.** Some services return Base64-encoded binary in JSON responses — decode to see what you actually got.

## Watch out for

- **Base64URL vs Base64.** URLs and JWTs use \`-\` and \`_\` instead of \`+\` and \`/\`. If a decode fails with "invalid character," you probably need the Base64URL variant.
- **Missing padding.** Some encoders drop the trailing \`=\` signs. Most decoders (including this one) tolerate this, but strict decoders don't.
- **Text vs binary.** Decoding a binary source as text produces garbage. If the output looks like \`��PNG\`, you have a PNG image — save it as a file instead.

## Tips

- **Never trust decoded content for security.** If someone hands you a Base64 string and claims it's harmless, decode it in a sandbox first. Encoding doesn't neutralize malicious content.
- **Pair with a JSON formatter.** If the decoded output is JSON, pipe it through the formatter to make it readable.

## Privacy

Decoding runs in your browser. Nothing you paste is uploaded.`,
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
    guide: `## What URL encoding is

URLs have a limited alphabet — letters, digits, and a handful of punctuation. Everything else — spaces, question marks inside a value, non-ASCII characters, \`&\`, \`=\`, \`#\`, \`+\` — has to be percent-encoded so the URL parser doesn't confuse your data with URL syntax. A space becomes \`%20\`. An \`&\` inside a query value becomes \`%26\`. A German \`ü\` becomes \`%C3%BC\`.

## What this tool does

Takes any string and returns the URL-encoded version, ready to drop into a query parameter, a path segment, or a \`Location\` header. Uses the standard percent-encoding rules (RFC 3986).

## Step-by-step

**1. Paste your text.** A search query, a path with spaces, a JSON blob you want to put in a query string — anything.

**2. Copy the encoded output.** Every reserved and non-ASCII character is now percent-escaped.

**3. Paste it into the URL.** The receiver's URL parser will decode it back to your original text automatically.

## When to encode

- **Query parameters.** \`?q=hello world\` fails; \`?q=hello%20world\` works.
- **Path segments** containing user data. A filename with spaces or slashes needs encoding.
- **Redirect URLs** you're passing as a parameter to another URL — otherwise their \`&\` and \`?\` collide with the outer URL.
- **Non-ASCII text** in any URL. Non-Latin scripts must be UTF-8 encoded then percent-escaped.
- **Form data** in \`application/x-www-form-urlencoded\` requests.

## Tips

- **Encode components, not whole URLs.** Encoding the whole URL turns \`://\` into \`%3A%2F%2F\` and breaks it. Encode only the values that go into query params or path segments.
- **\`+\` is spaces only in form-encoding.** In a path or fragment, \`+\` is a literal plus. Be careful which layer you're working at.
- **Non-ASCII becomes UTF-8 first.** A single accented character usually turns into two or three percent-escaped bytes — that's correct.

## Privacy

Encoding runs in your browser. Nothing uploads.`,
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
    guide: `## What URL decoding is

URL decoding turns \`%20\` back into a space, \`%26\` back into \`&\`, and \`%C3%BC\` back into \`ü\`. It reverses percent-encoding so you can read what was actually meant when a value arrived escaped inside a URL.

## Step-by-step

**1. Paste the encoded string.** Any query parameter value, path segment, or full URL will do.

**2. Read the decoded output.** Percent-escapes are converted back to their original characters, including multi-byte UTF-8.

**3. Copy the result** into wherever you need it — an editor, a form field, a log, a debugger.

## Common uses

- **Debugging tracking parameters.** Marketing links often stuff URL-encoded JSON into a \`utm_content\` value. Decode to read it.
- **Inspecting redirect URLs.** OAuth and SSO flows chain redirect URLs through query strings; decoding shows what the final destination actually is.
- **Reading server logs.** Access logs record raw request paths — decoded, they show the query the user actually made.
- **Investigating suspicious links.** A URL that looks like *https://safe.com/%2F%2Fevil.com* isn't safe; decoding reveals the real target.

## Watch out for

- **Double-encoded values.** Sometimes a value is encoded twice (\`%2520\` → \`%20\` → space). Run the decoder twice if the first pass still shows percent sequences.
- **\`+\` vs \`%20\`.** In query strings, \`+\` means a space. In path segments, \`+\` is a literal plus. Some decoders treat them differently — this one preserves standard behavior.
- **Malformed sequences.** \`%ZZ\` isn't valid; the decoder will flag it rather than silently producing garbage.

## Tips

- **Decode step by step** when debugging chained redirects. Decode the top-level URL, then decode each parameter that itself contains a URL. Doing it all at once is confusing.
- **Pair with the JSON formatter** if the decoded content is JSON — you'll see the structure immediately.

## Privacy

Decoding runs in your browser. Nothing is sent anywhere.`,
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
    guide: `## What HTML minification does

Minification strips everything a browser doesn't need — comments, extra whitespace, redundant quotes, and optional closing tags — from your HTML. The output looks unreadable but works exactly the same. Smaller HTML means fewer bytes over the wire, which means faster page loads, especially on slow mobile networks.

## What this tool does

Takes any HTML and produces a minified version. Common savings on a real page are 15–40% of the file size, mostly from removing whitespace and comments.

## Step-by-step

**1. Paste your HTML.** Any snippet or full document works.

**2. Copy the minified output.** Deploy or embed it as-is.

**3. Keep the original** in your source repository. Minified HTML is deploy output, not something you edit.

## When to minify

- **Static HTML sites** where the file is served directly to browsers.
- **Email templates** where every kilobyte counts (some clients truncate large messages).
- **Server-rendered pages** that don't go through a build step.
- **Inline templates** stored in JavaScript or config where size matters.

## When not to minify manually

- **Frameworks handle it for you.** Next.js, Astro, Vite, and every modern build tool minify HTML in production automatically. Don't hand-minify what your build already does.
- **During development.** Readable HTML is easier to debug in DevTools. Minify only for production output.

## Tips

- **Gzip beats minification** on the wire. Minification helps too, but the biggest win comes from serving the response with \`Content-Encoding: gzip\` or \`br\`.
- **Keep essential comments.** Conditional comments for legacy browsers, license headers, and template markers should survive minification. Most minifiers offer flags for this.
- **Test the output.** Minifiers occasionally break malformed HTML that browsers happily tolerate. Load the minified page once before shipping.

## Privacy

Minification runs entirely in your browser.`,
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
    guide: `## What CSS minification does

Minification strips comments, whitespace, redundant semicolons, and unnecessary units from your CSS. The compiled output is unreadable but functionally identical. Combined with gzip, minification cuts CSS payloads dramatically and is a standard part of every production build.

## What this tool does

Takes your CSS and returns a compact version. Typical savings are 30–60% depending on how much whitespace and how many comments the source had.

## Step-by-step

**1. Paste your CSS.** Any length — a single component's styles or a whole stylesheet.

**2. Copy the minified output** and use it in production.

**3. Keep your original CSS** in source control. Editing minified CSS by hand is miserable.

## When to minify

- **Static sites** with hand-written CSS that isn't built through a bundler.
- **Small landing pages** where a full build tool is overkill.
- **Inline \`<style>\` blocks** in HTML where every byte counts.
- **CSS-in-JS output** you're baking into a static asset.

## Tips

- **Frameworks minify for you.** Vite, Webpack, Next.js, and every modern bundler already minify CSS in production. Don't paste build output into a minifier — it's already minified.
- **PurgeCSS beats minification.** If your CSS is huge, the biggest win is removing unused selectors, not squeezing whitespace. Look at Tailwind's JIT mode or PurgeCSS if the file is large.
- **Preserve license comments** by wrapping them in \`/*!\` — most minifiers keep those and drop the rest.
- **Gzip is where the real savings are.** Serve minified CSS with \`Content-Encoding: gzip\` or \`br\` and you're at the practical limit.

## Common issues

- **Broken selectors** if your source CSS has unclosed braces. The minifier fails fast; fix the source, don't blame the tool.
- **Removed vendor prefixes.** Some minifiers are aggressive; if you rely on old prefixes, verify they survived.

## Privacy

Minification runs in your browser. Your CSS stays local.`,
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
    guide: `## What JavaScript minification does

Minification takes your readable JavaScript and rewrites it as the shortest equivalent code — short variable names, no whitespace, no comments, dead code removed. The result is unreadable but runs identically. On real-world code, minification alone cuts size 40–60%; combined with gzip or brotli, total payload can be a fraction of the source.

## What this tool does

Minifies your JavaScript in the browser. Comments, whitespace, and unreachable code go; local variable names get shortened. Public API names stay intact so your minified code still works when called from other files.

## Step-by-step

**1. Paste your JavaScript.** ES modules, plain scripts, or bundled output.

**2. Copy the minified version** and deploy it.

**3. Ship a source map** if you can generate one — minified stack traces are impossible to debug without them.

## When to minify by hand

- **Small standalone scripts** that don't go through a build tool.
- **Inline \`<script>\` blocks** in HTML.
- **Snippets you paste into third-party embed configurations** where size limits apply.
- **Learning what a minifier actually does** to your code.

## When to skip this tool

- **You're using a bundler.** Webpack, Vite, esbuild, Rollup — all of them minify with esbuild or Terser in production. Don't manually minify build output; it's already minified.
- **You need source maps.** This tool minifies but doesn't produce a source map. For real production code, use a build tool so you can debug crashes.

## Tips

- **Never edit minified code.** Change the original, re-minify.
- **Watch for property mangling.** Basic minification renames only local variables. Aggressive minifiers can rename object properties too, which breaks code that reads properties dynamically (\`obj['name']\` vs \`obj.name\`).
- **Test after minifying.** Load the minified script in a real browser once. A working non-minified script that breaks after minification usually means you hit a corner case — an eval, a Function constructor, or dynamic property access.

## Privacy

Minification runs in your browser. Your code never uploads.`,
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
    guide: `## Why use a password generator

Human-invented passwords are predictable. We reuse patterns, substitute obvious characters (\`p@ssw0rd\`), and stick to combinations that keyboards make easy. Attackers know this — every credential-stuffing dictionary is built on human patterns. A password generated from random bytes has none of these weaknesses, and paired with a password manager, you never have to remember it.

## What this tool does

Generates cryptographically random passwords of the length and character set you choose. Uses the browser's \`crypto.getRandomValues\` API — the same source that powers TLS session keys — so the output is genuinely unpredictable, not "random-looking."

## Step-by-step

**1. Pick a length.** 16 characters is a reasonable minimum for a new account today. 20+ is safer. Password-manager-generated passwords are usually 20–30 characters because there's no downside — you never type them.

**2. Pick a character set.** All of uppercase, lowercase, digits, and symbols is standard. Some legacy sites reject symbols; use letters and digits only if you have to.

**3. Generate.** A fresh password appears. Generate again if you don't like the shape of it.

**4. Copy.** One click copies it to your clipboard. Paste into your password manager first, then into the site you're registering with. The clipboard clears after a short delay in most modern browsers.

## Length matters more than complexity

A 20-character password of just lowercase letters is stronger than an 8-character password with every symbol on the keyboard. Length adds entropy exponentially; character set additions only add it linearly. If a site limits length before it limits character set, always max out the length.

## Tips

- **Use a password manager.** Bitwarden, 1Password, iCloud Keychain, or the one built into your browser. A generator without a manager is a half-solution — you'll end up reusing the passwords you can remember.
- **Never reuse.** Every account gets its own password. A breach at one site should not compromise any other.
- **Turn on 2FA.** A generated password plus a second factor is the standard for modern security.
- **Don't email or SMS passwords.** Both are stored in plain text on servers and devices you don't control.

## Privacy

Passwords are generated entirely in your browser. Nothing is transmitted, stored, or logged.`,
  },
  "/developer-tools/uuid-generator": {
    title: "UUID Generator — Free v4 UUIDs Online",
    metaDescription: "Generate cryptographically strong v4 UUIDs in bulk. Free online UUID generator — instant, no signup, uses your browser's secure random API.",
    keyword: "UUID generator",
    intro: [
      "Generate one or many v4 UUIDs at once for use as primary keys, correlation IDs, session tokens, or file names. Everything runs locally in your browser using the same cryptographically secure random source real crypto libraries use.",
      "Perfect for developers, testers, and anyone who needs stable, collision-resistant identifiers without setting up a backend.",
    ],
    features: [
      "RFC 4122 v4 (random) UUIDs",
      "Generate 1 to 500 at a time",
      "One-click copy, single or all",
      "Cryptographically secure (uses crypto.getRandomValues)",
    ],
    guide: `## What a UUID is\n\nA UUID (Universally Unique IDentifier) is a 128-bit value formatted as five groups of hex digits — for example, *550e8400-e29b-41d4-a716-446655440000*. UUIDs are designed so that anyone, anywhere, on any machine, can generate one and be effectively certain nobody else will ever generate the same value. There are several versions; the generator here produces v4, which is derived from cryptographically strong random bytes.\n\n## Why UUIDs beat auto-increment IDs\n\nAuto-increment integer IDs are simple but they leak information (row counts, order of creation) and require a central coordinator (the database) to allocate. UUIDs can be generated on any machine — client, server, mobile app, edge worker — without asking anyone. That makes them the right choice for distributed systems, offline-first apps, and anywhere a natural key doesn't exist.\n\n## Step-by-step\n\n**1. Pick how many you need.** One for a quick token, a dozen for a test fixture, a few hundred for seeding a database.\n\n**2. Click Generate.** Fresh UUIDs appear immediately.\n\n**3. Copy.** Copy a single UUID or the whole list with one click. Paste directly into your code, SQL insert, CSV, or config file.\n\n## Where to use UUIDs\n\n- **Primary keys.** In PostgreSQL, MySQL, SQLite, and every modern ORM. Store as *uuid* or *char(36)*.\n- **Correlation IDs.** Tag a request with a UUID and log it at every service it touches — full trace with zero coordination.\n- **File and object storage keys.** *550e8400-e29b-41d4-a716-446655440000.jpg* is guaranteed unique across every user, every device, every day.\n- **Session and one-time tokens.** A v4 UUID has 122 bits of entropy — brute-forcing one is not a realistic attack.\n- **Idempotency keys** on API calls. Send the same UUID on retries so the server can safely deduplicate.\n\n## What v4 UUIDs are not for\n\n- **Not** short URLs. UUIDs are 36 characters; use *nanoid* or a base62 short id if length matters.\n- **Not** predictable ordering. Two v4 UUIDs generated in sequence have no order relationship. If you need time-ordered IDs, use ULID or UUIDv7.\n- **Not** display to end users. UUIDs are for machines; humans need short, meaningful identifiers (invoice number, order code).\n\n## How collision-safe is v4?\n\nThe standard result: after generating one billion UUIDs per second for eighty-five years, the probability of a single collision is about 50%. For any real application, treat collisions as impossible. If your program depends on collisions never happening, v4 is safer than every other identifier scheme you would consider.\n\n## Tips\n\n- **Standardize the format** in your codebase. Some libraries return uppercase, some lowercase; PostgreSQL stores canonical lowercase. Pick one and enforce it in a helper.\n- **Index UUID columns** as *btree* by default. If insert-order performance matters, look at UUIDv7 (timestamp-prefixed) instead.\n- **Never re-use** a UUID across environments. Generate new ones for staging and production; sharing IDs makes debugging much harder.\n\n## Privacy\n\nAll UUIDs are generated in your browser using *crypto.getRandomValues*. Nothing is sent to a server, nothing is logged, and no two page loads share state.`,
    faqs: [
      { q: "What version of UUID does this generator produce?", a: "Version 4 (random). This is the most common variant and the right default for almost every application." },
      { q: "Is v4 truly random?", a: "It uses your browser's cryptographically secure random API (crypto.getRandomValues) — the same source real crypto libraries use." },
      { q: "Can I get UUIDv7 or ULID?", a: "Not from this tool yet. If your use case needs time-ordered IDs, generate them server-side with a library that supports v7 or ULID." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
    ],
  },
  "/developer-tools/jwt-decoder": {
    title: "JWT Decoder — Inspect JSON Web Tokens Online Free",
    metaDescription: "Decode any JWT to inspect its header, payload, and signature. Free online JWT decoder — runs entirely in your browser, no signup, private.",
    keyword: "JWT decoder",
    intro: [
      "Paste any JSON Web Token and instantly see its header, payload, and signature. The decoder splits the three parts, base64-decodes the header and payload, and pretty-prints the resulting JSON so you can read it at a glance.",
      "Perfect for debugging auth flows, checking token expiry, or verifying custom claims. The token never leaves your browser — nothing is logged or transmitted.",
    ],
    features: [
      "Decodes header and payload from any JWT",
      "Pretty-prints JSON with syntax coloring",
      "Highlights common claims (iss, sub, aud, exp, iat)",
      "Runs 100% in your browser — token never leaves your device",
    ],
    guide: `## What a JWT is\n\nA JSON Web Token (JWT) is a compact, URL-safe string that carries a small JSON payload signed by whoever issued it. It looks like three long random-looking strings joined by dots. Those three parts are the *header*, the *payload*, and the *signature*.\n\n- The **header** says how the token is signed (usually *HS256* or *RS256*).\n- The **payload** contains the claims — the actual data the token asserts, such as who the user is, when the token expires, and what they are allowed to do.\n- The **signature** proves that the header and payload were not modified since the issuer signed them.\n\nJWTs are the most common way modern APIs represent an authenticated user. Every request carries the token, the server verifies the signature, reads the payload, and knows who is asking.\n\n## What the decoder does\n\nThe decoder splits the token on its dots, base64url-decodes the header and payload, and shows you the resulting JSON side by side. It does **not** verify the signature — that requires the issuer's public key or shared secret and is a job for your server code. Decoding is safe on any token; verification is what actually secures the token, and it has to happen server-side.\n\n## Step-by-step\n\n**1. Paste the JWT.** It should look like three chunks separated by dots. If it starts with *Bearer*, drop that prefix.\n\n**2. Read the header.** Confirm the algorithm (*alg*) and the key hint (*kid*) if present. If *alg* is *none*, throw the token away — that is a well-known attack surface.\n\n**3. Read the payload.** Look for the standard claims:\n\n- **iss** — the issuer that minted the token.\n- **sub** — the subject (usually the user's ID).\n- **aud** — the audience the token is meant for.\n- **exp** — the expiry as a Unix timestamp. Convert to a date and check whether it is in the past.\n- **iat** — when the token was issued.\n- **nbf** — the earliest time the token is valid.\n\nCustom claims (roles, scopes, tenant IDs) appear alongside these and are safe to read the same way.\n\n**4. Look at the signature.** The decoder can't verify it without a key — but seeing the algorithm and the shape of the signature is enough to spot a malformed token.\n\n## Common debugging scenarios\n\n- **"Token expired" from an API.** Decode, check *exp*, compare to the current time. If *exp* is in the past, refresh the token.\n- **"Invalid audience."** Confirm *aud* matches what your resource server expects.\n- **"Signature verification failed."** Almost always a key mismatch — the token was signed with a key different from the one your server is checking against.\n- **Missing custom claim.** Decode, confirm the claim is not in the payload, then fix your auth provider's rules.\n\n## Security warnings\n\n- **Never paste a real production token** unless you trust the tool you're using. This decoder runs entirely in your browser and does not transmit the token, but always assume any tool that touches a valid production JWT could be logging it — get in the habit of using dev-environment tokens for debugging.\n- **Never trust the payload without verifying the signature.** Decoding is trivial; the signature is what proves the payload is authentic.\n- **Do not put secrets in a JWT payload.** The payload is base64-encoded, not encrypted — anyone with the token can read it.\n\n## Privacy\n\nThe decoder runs entirely in your browser using the *atob* API. The token you paste is never sent to a server, logged, or stored.`,
    faqs: [
      { q: "Does the decoder verify the signature?", a: "No. Verification requires the issuer's public key or shared secret and must happen on your server. The decoder only reads the header and payload." },
      { q: "Is it safe to paste a real token?", a: "This tool decodes entirely in your browser — the token is not sent to any server. That said, get in the habit of using development tokens when debugging, in case any tool in your workflow logs pasted values." },
      { q: "Why is the payload base64 and not encrypted?", a: "Standard JWTs are signed, not encrypted. If you need confidentiality, use JWE (JSON Web Encryption) instead — but for most auth flows, signing is enough." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
    ],
  },
  "/developer-tools/hash-generator": {
    title: "Hash Generator — SHA-256, SHA-1, SHA-512 Free",
    metaDescription: "Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text. Free online hash generator — no signup, runs in your browser.",
    keyword: "hash generator",
    intro: [
      "Generate cryptographic hashes (SHA-1, SHA-256, SHA-384, SHA-512) from any text string in one click.",
      "Uses the browser's built-in Web Crypto API — nothing is uploaded and results are computed locally.",
    ],
    features: [
      "SHA-1, SHA-256, SHA-384, SHA-512 in one place",
      "Unicode-safe input, hex-encoded output",
      "One-click copy of any hash",
    ],
    faqs: [
      { q: "Why is MD5 not included?", a: "MD5 is cryptographically broken and no longer safe for integrity checks. Use SHA-256 or better." },
      { q: "Is hashing the same as encryption?", a: "No. Hashing is one-way — you cannot recover the original text from a hash. Encryption is reversible with a key." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Open the tool and start hashing immediately." },
    ],
    guide: `## What a hash is\n\nA cryptographic hash turns any input — a password, a file, an API payload — into a fixed-length hex string. The same input always produces the same hash; a tiny change to the input produces a completely different hash. That's what makes hashes useful for integrity checks, password storage (with a salt), fingerprinting cache keys, and signing tokens.\n\n## Which algorithm to use\n\n- **SHA-256** is the safe modern default for almost everything.\n- **SHA-384 / SHA-512** are used where longer digests are required (some certificate profiles).\n- **SHA-1** is only for legacy interoperability — do not use it for new security work.\n- **MD5** is not offered here; it's broken.\n\n## Step-by-step\n\n1. Paste or type your text.\n2. Read every algorithm's hex hash instantly.\n3. Copy the one you need.\n\n## Privacy\n\nHashing runs entirely in your browser via the Web Crypto API. Nothing is uploaded.`,
  },
  "/developer-tools/color-converter": {
    title: "Color Converter — HEX, RGB, HSL Free Online",
    metaDescription: "Convert colors between HEX, RGB, and HSL formats with a live preview. Free online color converter — no signup, instant conversion.",
    keyword: "color converter",
    intro: [
      "Convert any color between HEX, RGB, and HSL with a live swatch preview. Great for design systems, CSS, and quick color tweaks.",
      "Everything runs in your browser — no signup, no tracking.",
    ],
    features: [
      "HEX ⇄ RGB ⇄ HSL in one place",
      "Live color swatch preview",
      "One-click copy of any format",
    ],
    faqs: [
      { q: "Does it support alpha channels?", a: "Yes — 8-digit HEX and rgba/hsla formats include alpha." },
      { q: "Which format should I use in CSS?", a: "HEX is compact for solid colors, HSL is easiest to tweak by hand, RGB is best when working with alpha or JS." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup and no daily limit." },
      { q: "Do I need an account?", a: "No — start converting immediately." },
    ],
    guide: `## Why convert colors\n\nDesign tools, code editors, and brand guides all speak different color dialects. HEX is compact and everywhere in CSS. RGB is easiest to reason about when compositing. HSL lets you nudge hue, saturation, or lightness independently — perfect for building color scales.\n\n## Step-by-step\n\n1. Type or paste a color in any format.\n2. Every other format updates instantly.\n3. Copy the one your tool expects.\n\n## Tips\n\n- **Build scales in HSL.** Fix hue and saturation, vary lightness — you get an aesthetically consistent ramp.\n- **Use 3-digit HEX only for round numbers.** \`#f0a\` is easy; \`#f2a4b7\` needs the full 6.\n- **Watch alpha handling.** Not every parser accepts 8-digit HEX. Fall back to \`rgba()\` when in doubt.\n\n## Privacy\n\nConversion runs in your browser. Nothing uploads.`,
  },
  "/developer-tools/lorem-ipsum-generator": {
    title: "Lorem Ipsum Generator — Free Placeholder Text",
    metaDescription: "Generate Lorem Ipsum placeholder text by paragraphs, sentences, or words. Free, no signup — copy clean dummy text for mockups instantly.",
    keyword: "Lorem Ipsum generator",
    intro: [
      "Generate as much Lorem Ipsum as you need — by paragraph, sentence, or word count.",
      "Perfect for wireframes, mockups, and copy-length testing. No signup, works in your browser.",
    ],
    features: [
      "Paragraphs, sentences, or words",
      "Classic 'Lorem ipsum dolor sit amet' start (optional)",
      "One-click copy",
    ],
    faqs: [
      { q: "What is Lorem Ipsum?", a: "It's scrambled Latin text used as placeholder copy since the 1500s. It looks like real prose without distracting from the design." },
      { q: "Why not just use English placeholder text?", a: "Real words tempt reviewers to read them. Lorem Ipsum keeps attention on layout, typography, and hierarchy." },
      { q: "Is this tool really free?", a: "Yes — completely free, no signup." },
      { q: "Do I need an account?", a: "No — generate as much as you need instantly." },
    ],
    guide: `## What Lorem Ipsum is\n\nLorem Ipsum is dummy text that has been the industry-standard filler since the 1500s. It gives designers realistic paragraph shapes without the distraction of readable content.\n\n## Step-by-step\n\n1. Pick paragraphs, sentences, or words.\n2. Enter how many you need.\n3. Copy the generated text into your design.\n\n## When to use it\n\n- Wireframes and design comps.\n- Testing that your layout survives realistic copy lengths.\n- Showing a client what a page will feel like before final copy exists.\n\n## Privacy\n\nGeneration runs entirely in your browser.`,
  },
  "/developer-tools/regex-tester": {
    title: "Regex Tester — Test Regular Expressions Online Free",
    metaDescription: "Test regex patterns against sample text with live match highlighting and groups. Free online regex tester — no signup, in-browser.",
    keyword: "regex tester",
    intro: [
      "Test a JavaScript regular expression against sample text and see every match, group, and index highlighted live.",
      "Runs in your browser using the native RegExp engine — nothing uploaded.",
    ],
    features: [
      "Live match highlighting",
      "Named and numbered capture groups",
      "Standard flags (g, i, m, s, u, y)",
    ],
    faqs: [
      { q: "Which regex flavor is this?", a: "JavaScript's native RegExp (ECMAScript). Most common patterns match PCRE, but a few features differ." },
      { q: "Can it hang my browser?", a: "A truly catastrophic pattern can. Add specificity (anchors, non-greedy quantifiers) if a run takes more than a second." },
      { q: "Is this tool really free?", a: "Yes — free, no signup." },
      { q: "Do I need an account?", a: "No — start testing immediately." },
    ],
    guide: `## What a regex tester does\n\nA regex tester lets you write a pattern, paste sample text, and instantly see every match, capture group, and start/end index. It replaces the write-run-guess-fix loop with a live preview.\n\n## Step-by-step\n\n1. Enter a pattern and flags.\n2. Paste sample text.\n3. Read the highlighted matches and inspect any captured groups.\n\n## Tips\n\n- **Prefer non-greedy quantifiers** (\`.*?\`) unless you really want the longest match.\n- **Anchor your patterns** (\`^\`, \`$\`, \`\\\\b\`) to avoid accidental matches.\n- **Test edge cases** — empty input, unicode, very long strings — before shipping the pattern to production.\n\n## Privacy\n\nAll matching runs in your browser.`,
  },
  "/developer-tools/timestamp-converter": {
    title: "Unix Timestamp Converter — Free Online Date Tool",
    metaDescription: "Convert Unix timestamps to human dates and back, in UTC or local time. Free online timestamp converter — no signup, instant.",
    keyword: "Unix timestamp converter",
    intro: [
      "Convert Unix timestamps (seconds or milliseconds) to human-readable dates in UTC and local time — and go the other way, from date to timestamp.",
      "Runs in your browser, updates live, no signup.",
    ],
    features: [
      "Seconds and milliseconds supported",
      "UTC and local time side by side",
      "Live 'now' timestamp",
    ],
    faqs: [
      { q: "What is a Unix timestamp?", a: "The number of seconds since 1970-01-01 UTC. Milliseconds are the same but ×1000, used by JavaScript's Date." },
      { q: "How do I know if my timestamp is seconds or milliseconds?", a: "10 digits ≈ seconds (year ~2001-2286). 13 digits ≈ milliseconds. This tool auto-detects." },
      { q: "Is this tool really free?", a: "Yes — free, no signup." },
      { q: "Do I need an account?", a: "No — convert immediately." },
    ],
    guide: `## Why timestamps matter\n\nEvery API, log line, and database column dealing with time uses either a Unix timestamp or an ISO date string. Converting between them by hand is error-prone, especially across time zones.\n\n## Step-by-step\n\n1. Paste a timestamp (seconds or milliseconds) or type a date.\n2. See the equivalent representation in UTC and local time.\n3. Copy the format you need.\n\n## Tips\n\n- **Store in UTC.** Convert to local time only when displaying to a user.\n- **ISO 8601** (\`2026-07-16T12:00:00Z\`) is the safest string format — unambiguous and sortable.\n- **Beware year-2038.** 32-bit signed second-based timestamps overflow in January 2038. Modern systems use 64-bit.\n\n## Privacy\n\nAll conversion runs in your browser.`,
  },
  "/developer-tools/slug-generator": {
    title: "Slug Generator — URL-Friendly Slugs Free Online",
    metaDescription: "Turn any title into a clean, URL-friendly slug. Free online slug generator — handles unicode, punctuation, and spaces — no signup.",
    keyword: "slug generator",
    intro: [
      "Turn any title, sentence, or filename into a clean URL slug — lowercase, hyphen-separated, safe for URLs and filesystems.",
      "Handles unicode, accents, and punctuation. Runs in your browser.",
    ],
    features: [
      "Lowercase, hyphen-separated output",
      "Removes accents and non-URL characters",
      "One-click copy",
    ],
    faqs: [
      { q: "Are slugs important for SEO?", a: "Yes. A short, keyword-rich slug is easier for both users and search engines to read than a numeric ID." },
      { q: "Should slugs include stop words?", a: "Usually drop 'a', 'the', 'of' unless they change meaning. Shorter slugs perform better." },
      { q: "Is this tool really free?", a: "Yes — free, no signup." },
      { q: "Do I need an account?", a: "No — start immediately." },
    ],
    guide: `## What a slug is\n\nA slug is the human-readable last piece of a URL — e.g. \`/blog/how-to-make-money-online\`. Good slugs are short, lowercase, hyphen-separated, and reflect the page topic.\n\n## Step-by-step\n\n1. Paste a title.\n2. Copy the generated slug.\n3. Use it in your URL, filename, or ID.\n\n## Tips\n\n- **Keep it under ~60 characters.** Long slugs get truncated in search results.\n- **Use hyphens, not underscores.** Google treats hyphens as word separators.\n- **Never change published slugs** without a redirect — you'll lose links and rankings.\n\n## Privacy\n\nRuns in your browser. Nothing is uploaded.`,
  },
  "/developer-tools/text-diff": {
    title: "Text Diff Checker — Compare Two Texts Free Online",
    metaDescription: "Compare two blocks of text and see added, removed, and unchanged lines highlighted. Free online text diff checker — no signup.",
    keyword: "text diff checker",
    intro: [
      "Compare two blocks of text line by line and see exactly what changed — added, removed, or unchanged.",
      "Great for reviewing edits, config diffs, or copy revisions. Runs in your browser.",
    ],
    features: [
      "Line-by-line comparison",
      "Added / removed / unchanged highlighting",
      "Handles code, prose, or config",
    ],
    faqs: [
      { q: "Does it detect word-level changes?", a: "This diff is line-based. For word-level changes, split your text so each word is on its own line, or use a code editor's built-in diff." },
      { q: "Is my text uploaded?", a: "No. Everything is compared locally in your browser." },
      { q: "Is this tool really free?", a: "Yes — free, no signup." },
      { q: "Do I need an account?", a: "No — start comparing immediately." },
    ],
    guide: `## Why diff text\n\nWhether you're reviewing an edited draft, comparing two config files, or checking what a coworker changed, a diff shows the exact deltas so you don't have to eyeball two long documents.\n\n## Step-by-step\n\n1. Paste the original text on the left.\n2. Paste the new text on the right.\n3. Read the highlighted result — green for added, red for removed.\n\n## Tips\n\n- **Normalize line endings** before diffing files from different operating systems.\n- **Trim trailing whitespace** if you only care about content changes.\n- **Use a code editor's diff** for large multi-file diffs — this tool is for quick two-block comparisons.\n\n## Privacy\n\nEverything runs in your browser.`,
  },
  "/developer-tools/number-base-converter": {
    title: "Number Base Converter — Binary, Octal, Hex Free",
    metaDescription: "Convert numbers between binary, octal, decimal, and hexadecimal in one step. Free online number base converter — instant, no signup.",
    keyword: "number base converter",
    intro: [
      "Convert any integer between binary (base-2), octal (base-8), decimal (base-10), and hexadecimal (base-16) in one step.",
      "Ideal for low-level debugging, bitmasks, and color values. Runs in your browser.",
    ],
    features: [
      "Binary, octal, decimal, hex — all at once",
      "Handles arbitrary-length integers",
      "One-click copy",
    ],
    faqs: [
      { q: "Does it support negative numbers?", a: "Decimal supports negatives. Binary/hex output is unsigned — use two's-complement if you need signed representation." },
      { q: "Are prefixes required?", a: "No. The tool auto-detects the base from the field you type in." },
      { q: "Is this tool really free?", a: "Yes — free, no signup." },
      { q: "Do I need an account?", a: "No — start converting immediately." },
    ],
    guide: `## Number bases explained\n\nComputers count in binary (base-2). Programmers use hex (base-16) as a compact way to read binary — every hex digit maps to exactly 4 bits. Octal (base-8) shows up in Unix file permissions. Decimal is what humans use.\n\n## Step-by-step\n\n1. Type a value into any base's field.\n2. Every other base updates instantly.\n3. Copy the representation you need.\n\n## Tips\n\n- **Color codes are hex.** \`#ff8800\` = R=255, G=136, B=0.\n- **File permissions are octal.** \`0755\` = rwxr-xr-x.\n- **Bit flags in hex** are easier to read than long binary strings.\n\n## Privacy\n\nAll conversion runs in your browser.`,
  },
};
