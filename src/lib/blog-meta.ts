// Blog metadata for micro-blog posts (money-making, productivity, tech tips,
// student & career). Kept separate from post bodies so list pages don't
// bundle the full markdown.
export interface BlogPostMeta {
  slug: string;
  /** Optional — only set when a post directly maps to a tool page. */
  toolPath?: string;
  title: string;
  category: string;
  excerpt: string;
  readingMinutes: number;
}

export const postsMeta: BlogPostMeta[] = [
  // ── Make Money Online ───────────────────────────────────────────────
  {
    slug: "how-to-earn-money-online-2026",
    title: "How to Earn Money Online in 2026 (Realistic Beginner Guide)",
    category: "Make Money Online",
    excerpt: "Nine legit ways to start earning online this year — ranked by how fast you'll see your first payout.",
    readingMinutes: 5,
  },
  {
    slug: "freelancing-for-beginners",
    title: "Freelancing for Beginners: Land Your First Client in 30 Days",
    category: "Make Money Online",
    excerpt: "A no-fluff 30-day plan to pick a service, build a mini portfolio, and pitch your first paying client.",
    readingMinutes: 6,
  },
  {
    slug: "start-a-blog-and-earn",
    title: "Start a Blog and Earn From AdSense + Affiliate in 2026",
    category: "Make Money Online",
    excerpt: "Exactly how modern blogs make money — traffic goals, AdSense RPMs, and where affiliate beats ads.",
    readingMinutes: 6,
  },
  {
    slug: "youtube-monetization-guide",
    title: "YouTube Monetization: The Honest Roadmap for New Creators",
    category: "Make Money Online",
    excerpt: "From 0 subs to your first payout — what actually moves the needle vs what wastes months.",
    readingMinutes: 6,
  },
  {
    slug: "affiliate-marketing-basics",
    title: "Affiliate Marketing Basics: A Complete Starter Guide",
    category: "Make Money Online",
    excerpt: "How affiliate links work, best programs for beginners, and the content formats that convert.",
    readingMinutes: 6,
  },
  {
    slug: "sell-digital-products",
    title: "Sell Digital Products: Templates, Ebooks, and Presets that Earn",
    category: "Make Money Online",
    excerpt: "Why digital products beat services long-term, and 10 low-effort products you can ship this month.",
    readingMinutes: 5,
  },
  {
    slug: "passive-income-ideas-students",
    title: "7 Passive-Income Ideas That Actually Work for Students",
    category: "Make Money Online",
    excerpt: "Skip the get-rich-quick stuff — these seven ideas fit a college schedule and compound over years.",
    readingMinutes: 5,
  },

  // ── Productivity ────────────────────────────────────────────────────
  {
    slug: "pomodoro-technique-guide",
    title: "The Pomodoro Technique: Focus Better in 25-Minute Sprints",
    category: "Productivity",
    excerpt: "The simplest focus system that actually works — plus tweaks for coders, writers, and students.",
    readingMinutes: 4,
  },
  {
    slug: "deep-work-daily-routine",
    title: "A Realistic Deep Work Routine You'll Actually Stick To",
    category: "Productivity",
    excerpt: "How to carve out 2–3 hours of real focus every day, without becoming a productivity monk.",
    readingMinutes: 5,
  },
  {
    slug: "inbox-zero-method",
    title: "Inbox Zero in 15 Minutes a Day (The Sane Version)",
    category: "Productivity",
    excerpt: "A calm, sustainable system for keeping your inbox under control — no fancy apps required.",
    readingMinutes: 4,
  },
  {
    slug: "time-blocking-explained",
    title: "Time Blocking Explained: Plan a Day You Can Finish",
    category: "Productivity",
    excerpt: "Why to-do lists fail and time blocks work — with a sample day for creators and students.",
    readingMinutes: 5,
  },
  {
    slug: "best-note-taking-methods",
    title: "The Best Note-Taking Methods for Studying and Work",
    category: "Productivity",
    excerpt: "Cornell, Zettelkasten, PARA — a fast comparison of the four systems worth learning.",
    readingMinutes: 5,
  },

  // ── Tech Tips ───────────────────────────────────────────────────────
  {
    slug: "speed-up-slow-laptop",
    title: "10 Ways to Speed Up a Slow Laptop (Without Buying a New One)",
    category: "Tech Tips",
    excerpt: "Free, safe fixes that reliably bring old Windows and Mac laptops back to life.",
    readingMinutes: 5,
  },
  {
    slug: "best-free-ai-tools-2026",
    title: "The Best Free AI Tools in 2026 (Actually Useful, Not Hype)",
    category: "Tech Tips",
    excerpt: "Free AI tools worth adding to your workflow this year — writing, images, coding, research.",
    readingMinutes: 6,
  },
  {
    slug: "chatgpt-prompts-for-productivity",
    title: "20 ChatGPT Prompts That Save Hours Every Week",
    category: "Tech Tips",
    excerpt: "Copy-paste prompts for email, planning, learning, coding, and content — with why each one works.",
    readingMinutes: 5,
  },
  {
    slug: "protect-online-privacy-checklist",
    title: "The 10-Minute Online Privacy Checklist Everyone Should Run",
    category: "Tech Tips",
    excerpt: "Ten fast, high-impact settings and habits that protect your accounts and personal data.",
    readingMinutes: 4,
  },

  // ── Student & Career ────────────────────────────────────────────────
  {
    slug: "how-to-write-a-resume",
    title: "How to Write a Resume That Actually Gets Interviews",
    category: "Student & Career",
    excerpt: "Modern resume rules — what recruiters skim for in 7 seconds and the sections you can safely cut.",
    readingMinutes: 6,
  },
  {
    slug: "crack-your-first-tech-interview",
    title: "How to Crack Your First Tech Interview (Without a CS Degree)",
    category: "Student & Career",
    excerpt: "The 90-day prep plan self-taught devs use to land their first developer role.",
    readingMinutes: 6,
  },
  {
    slug: "study-smarter-not-harder",
    title: "Study Smarter, Not Harder: 6 Evidence-Based Techniques",
    category: "Student & Career",
    excerpt: "Active recall, spaced repetition, interleaving — what the research says actually beats re-reading.",
    readingMinutes: 5,
  },
  {
    slug: "learn-a-new-skill-in-30-days",
    title: "How to Learn a New Skill in 30 Days (The Sprint Method)",
    category: "Student & Career",
    excerpt: "A repeatable 30-day sprint framework for picking up a skill fast, from a language to a framework.",
    readingMinutes: 5,
  },
  // ── SEO Long-Tail Guides (2026) ─────────────────────────────────────
  {
    slug: "how-to-compress-pdf-without-losing-quality",
    toolPath: "/pdf-tools/compress",
    title: "How to Compress PDF Without Losing Quality (2026 Guide)",
    category: "Tech Tips",
    excerpt: "Shrink PDF files by 50-80% while keeping text sharp and images crisp — the exact settings that work.",
    readingMinutes: 6,
  },
  {
    slug: "how-to-remove-image-background-free",
    toolPath: "/image-tools/background-remover",
    title: "How to Remove Image Background Free (No Photoshop Needed)",
    category: "Tech Tips",
    excerpt: "Cut out any subject in 5 seconds with browser-based AI — no download, no signup, no watermark.",
    readingMinutes: 5,
  },
  {
    slug: "how-to-convert-pdf-to-word-keep-formatting",
    toolPath: "/pdf-tools/pdf-to-word",
    title: "How to Convert PDF to Word Without Losing Formatting",
    category: "Tech Tips",
    excerpt: "The reason your fonts break on conversion — and the free method that keeps the layout intact.",
    readingMinutes: 6,
  },
  {
    slug: "how-to-merge-pdf-files-online-free",
    toolPath: "/pdf-tools/merge",
    title: "How to Merge PDF Files Online Free (No Signup, No Limits)",
    category: "Tech Tips",
    excerpt: "Combine unlimited PDFs into one file in 5 seconds — plus how to reorder, split, and password-protect.",
    readingMinutes: 5,
  },
  {
    slug: "best-free-image-compressor-2026",
    toolPath: "/image-tools/compress",
    title: "Best Free Image Compressor of 2026 (Ranked & Tested)",
    category: "Tech Tips",
    excerpt: "We compressed the same 5 MB photo through 8 tools. Here's who kept quality and who ruined it.",
    readingMinutes: 6,
  },
  {
    slug: "how-to-reduce-jpg-file-size-without-losing-quality",
    toolPath: "/image-tools/compress",
    title: "How to Reduce JPG File Size Without Losing Quality",
    category: "Tech Tips",
    excerpt: "The 3 settings that shrink JPGs 70% with zero visible loss — plus when to switch to WebP.",
    readingMinutes: 5,
  },
  {
    slug: "how-to-generate-strong-password",
    toolPath: "/developer-tools/password-generator",
    title: "How to Generate a Strong Password (2026 Security Rules)",
    category: "Tech Tips",
    excerpt: "What actually makes a password uncrackable in 2026 — length beats complexity, and passphrases beat both.",
    readingMinutes: 5,
  },
  {
    slug: "how-to-count-words-in-essay",
    toolPath: "/text-tools/word-counter",
    title: "How to Count Words in an Essay Fast (Any Format)",
    category: "Tech Tips",
    excerpt: "Word counts in Google Docs, Word, and pasted text — plus how professors actually verify your count.",
    readingMinutes: 4,
  },
  {
    slug: "how-to-calculate-emi-home-loan",
    toolPath: "/calculators/emi",
    title: "How to Calculate EMI for a Home Loan (With Examples)",
    category: "Tech Tips",
    excerpt: "The EMI formula explained in plain English, plus a ready calculator and 3 worked examples.",
    readingMinutes: 6,
  },
  {
    slug: "how-to-unlock-password-protected-pdf",
    toolPath: "/pdf-tools/unlock",
    title: "How to Unlock a Password-Protected PDF (Legally, in Your Browser)",
    category: "Tech Tips",
    excerpt: "Remove restrictions from PDFs you own — what's legal, what isn't, and the fastest free method.",
    readingMinutes: 5,
  },
  // ── Batch 3: 10 more tool-focused long-tail posts ───────────────────
  {
    slug: "how-to-merge-pdf-files-online",
    toolPath: "/pdf-tools/merge",
    title: "How to Merge PDF Files Online Free (No Signup, No Watermark)",
    category: "Tech Tips",
    excerpt: "Combine multiple PDFs into one in 10 seconds — reorder pages, keep quality, stay private.",
    readingMinutes: 4,
  },
  {
    slug: "how-to-split-pdf-pages",
    toolPath: "/pdf-tools/split",
    title: "How to Split a PDF into Separate Pages (Free & Instant)",
    category: "Tech Tips",
    excerpt: "Extract specific pages or split every page into its own file — 100% browser-based.",
    readingMinutes: 4,
  },
  {
    slug: "how-to-convert-jpg-to-pdf",
    toolPath: "/pdf-tools/jpg-to-pdf",
    title: "How to Convert JPG to PDF Online Free (Batch Supported)",
    category: "Tech Tips",
    excerpt: "Turn one image or a stack of photos into a single clean PDF — reorder, resize, download.",
    readingMinutes: 4,
  },
  {
    slug: "how-to-resize-image-online",
    toolPath: "/image-tools/resize",
    title: "How to Resize an Image Without Losing Quality (Free Online)",
    category: "Tech Tips",
    excerpt: "The right way to resize photos for web, social, and email — with pixel & percentage presets.",
    readingMinutes: 5,
  },
  {
    slug: "how-to-convert-webp-to-jpg",
    toolPath: "/image-tools/webp-to-jpg",
    title: "How to Convert WebP to JPG Online (Instant, No Upload)",
    category: "Tech Tips",
    excerpt: "Save downloaded WebP images as JPG in one click — works on any device, no software needed.",
    readingMinutes: 3,
  },
  {
    slug: "how-to-generate-qr-code-free",
    toolPath: "/image-tools/qr-code",
    title: "How to Generate a QR Code Free (Custom Colors, No Signup)",
    category: "Tech Tips",
    excerpt: "Create QR codes for URLs, WiFi, contact cards, and text — high-res download in seconds.",
    readingMinutes: 4,
  },
  {
    slug: "how-to-format-json-online",
    toolPath: "/developer-tools/json-formatter",
    title: "How to Format & Validate JSON Online (Free Developer Tool)",
    category: "Tech Tips",
    excerpt: "Pretty-print, minify, and validate JSON in your browser — with error line numbers.",
    readingMinutes: 4,
  },
  {
    slug: "how-to-calculate-percentage",
    toolPath: "/calculators/percentage",
    title: "How to Calculate Percentage (5 Common Cases with Formulas)",
    category: "Tech Tips",
    excerpt: "Discount, tip, tax, percentage change, and 'X is what % of Y' — with a free calculator.",
    readingMinutes: 5,
  },
  {
    slug: "how-to-write-instagram-caption",
    toolPath: "/content-creation/instagram-caption-generator",
    title: "How to Write Instagram Captions That Get Saves (2026 Guide)",
    category: "Make Money Online",
    excerpt: "Caption formulas that actually stop the scroll — plus a free AI caption generator.",
    readingMinutes: 5,
  },
  {
    slug: "how-to-write-youtube-title-ctr",
    toolPath: "/content-creation/youtube-title-generator",
    title: "How to Write YouTube Titles That Get Clicks (Proven Formulas)",
    category: "Make Money Online",
    excerpt: "The 7 title formulas top creators use, plus a free AI title generator to spin 10 variants.",
    readingMinutes: 5,
  },
];

export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return postsMeta.find((p) => p.slug === slug);
}
