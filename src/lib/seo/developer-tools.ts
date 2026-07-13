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
};
