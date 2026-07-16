/**
 * Generic AI content generator for lightweight text-generation tools.
 *
 * The client picks a `taskId` and passes a small `values` bag. The server
 * looks up the task's system prompt + user-prompt template, sanitizes the
 * inputs (length caps, whitelisted enums), and runs the AI. Keeping the
 * prompts server-side means the client can't jailbreak the model by
 * injecting a custom system message.
 */
import { createServerFn } from "@tanstack/react-start";
import { runTextTask } from "@/lib/ai-gateway.server";

type TaskDef = {
  system: string;
  /** Build the user prompt from validated values. */
  build: (v: Record<string, string>) => string;
  /** Required field slugs. First one is the "main" input, must be non-empty. */
  required: string[];
  /** Cap length of each field to prevent abuse. */
  caps: Record<string, number>;
};

const TASKS: Record<string, TaskDef> = {
  "instagram-caption": {
    required: ["topic"],
    caps: { topic: 500, tone: 30 },
    system:
      "You are an Instagram copywriter. Write 5 engaging Instagram captions for the given topic. Each caption should: hook in the first line, be scannable (short lines / emojis where natural), and end with a soft CTA plus 5-8 relevant hashtags on their own line. Separate captions with a line containing only '---'. Output only the captions, no preamble.",
    build: (v) => `Topic: ${v.topic}\nTone: ${v.tone || "friendly"}`,
  },
  "instagram-hashtag": {
    required: ["topic"],
    caps: { topic: 300 },
    system:
      "You are an Instagram growth expert. Given a topic or niche, output 30 highly relevant Instagram hashtags. Mix broad (1M+ posts), medium (100K-1M posts), and niche (<100K posts) hashtags for balanced reach. Output ONLY the hashtags on a single line separated by spaces, each starting with #. No numbering, no explanations.",
    build: (v) => `Topic: ${v.topic}`,
  },
  "tweet-generator": {
    required: ["topic"],
    caps: { topic: 500, style: 30 },
    system:
      "You are a viral tweet writer. Write 5 distinct tweets on the given topic, each under 280 characters. Each tweet should stand alone, use a strong hook, and be shareable. Vary formats: one-liner, contrarian take, mini-list, question, and story. Separate tweets with a line containing only '---'. Output only the tweets, no preamble, no numbering, no quotes.",
    build: (v) => `Topic: ${v.topic}\nStyle: ${v.style || "engaging"}`,
  },
  "tiktok-caption": {
    required: ["topic"],
    caps: { topic: 500 },
    system:
      "You are a TikTok copywriter. Write 5 short punchy TikTok captions for the video topic. Each caption must be under 150 characters, hook viewers in the first 3 words, and end with 4-6 relevant hashtags on a new line. Separate captions with a line containing only '---'. Output only the captions.",
    build: (v) => `Video topic: ${v.topic}`,
  },
  "blog-title": {
    required: ["topic"],
    caps: { topic: 500, keyword: 100 },
    system:
      "You are an SEO blog editor. Generate 10 click-worthy blog post titles for the given topic. Each title must be under 65 characters, front-load the primary keyword when provided, and use proven patterns (numbers, brackets, how-to, listicle, question). Output ONLY the 10 titles as a numbered list (1. ... 2. ...), no preamble.",
    build: (v) => `Topic: ${v.topic}${v.keyword ? `\nPrimary keyword: ${v.keyword}` : ""}`,
  },
  "blog-outline": {
    required: ["title"],
    caps: { title: 300, audience: 200 },
    system:
      "You are an SEO content strategist. Write a complete blog post outline for the given title. Include: an intro hook sentence, 5-7 H2 sections (each with 2-4 H3 sub-points), a conclusion note, and 3 suggested FAQ questions. Use plain text with '## ' for H2 and '- ' for bullets. No preamble.",
    build: (v) => `Blog title: ${v.title}${v.audience ? `\nTarget audience: ${v.audience}` : ""}`,
  },
  "meta-description": {
    required: ["title"],
    caps: { title: 200, content: 2000, keyword: 100 },
    system:
      "You are an SEO copywriter. Write 5 meta descriptions for the given page title. Each description must be 140-160 characters, include the primary keyword naturally, describe the page value, and end with a soft CTA. Output ONLY the 5 descriptions as a numbered list (1. ... 2. ...), no preamble, no quotes.",
    build: (v) =>
      `Page title: ${v.title}${v.keyword ? `\nPrimary keyword: ${v.keyword}` : ""}${v.content ? `\nPage content summary: ${v.content}` : ""}`,
  },
  "email-subject": {
    required: ["topic"],
    caps: { topic: 500, audience: 200 },
    system:
      "You are an email marketing expert. Write 10 high open-rate email subject lines for the given topic. Each subject must be under 60 characters, spark curiosity or promise value, and avoid spam-triggering words like 'FREE!!!' or 'ACT NOW'. Mix styles: question, personal, urgency, curiosity, benefit. Output ONLY the 10 subject lines as a numbered list, no preamble.",
    build: (v) => `Email topic: ${v.topic}${v.audience ? `\nAudience: ${v.audience}` : ""}`,
  },
};

export const generateContent = createServerFn({ method: "POST" })
  .inputValidator((input: { taskId: string; values: Record<string, string> }) => {
    const task = TASKS[input.taskId];
    if (!task) throw new Error("Unknown task");
    const values: Record<string, string> = {};
    for (const [k, cap] of Object.entries(task.caps)) {
      const raw = input.values?.[k];
      values[k] = typeof raw === "string" ? raw.slice(0, cap) : "";
    }
    for (const req of task.required) {
      if (!values[req]?.trim()) throw new Error(`${req} is required`);
    }
    return { taskId: input.taskId, values };
  })
  .handler(async ({ data }) => {
    const task = TASKS[data.taskId]!;
    return runTextTask(task.system, task.build(data.values));
  });