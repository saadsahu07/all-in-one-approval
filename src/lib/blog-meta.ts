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
];

export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return postsMeta.find((p) => p.slug === slug);
}
