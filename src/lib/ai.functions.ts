import { createServerFn } from "@tanstack/react-start";
import { runTextTask } from "@/lib/ai-gateway.server";

export const summarizeText = createServerFn({ method: "POST" })
  .inputValidator((input: { text: string; length: string }) => {
    if (!input.text?.trim()) throw new Error("Text is required");
    return { text: input.text.slice(0, 20000), length: input.length === "long" ? "long" : input.length === "medium" ? "medium" : "short" };
  })
  .handler(async ({ data }) =>
    runTextTask(
      "You are an expert editor. Summarize the user's text clearly and accurately. Respond with only the summary, no preamble.",
      `Write a ${data.length} summary (short = 2-3 sentences, medium = one paragraph, long = several paragraphs with key points) of the following text:\n\n${data.text}`,
    ),
  );

export const checkGrammar = createServerFn({ method: "POST" })
  .inputValidator((input: { text: string }) => {
    if (!input.text?.trim()) throw new Error("Text is required");
    return { text: input.text.slice(0, 20000) };
  })
  .handler(async ({ data }) =>
    runTextTask(
      "You are a meticulous proofreader. Correct grammar, spelling, and punctuation while preserving the author's voice. First output the fully corrected text. Then, after a line containing only '---', list the corrections you made as short bullet points. If there are no mistakes, output the original text, then '---', then 'No issues found.'",
      data.text,
    ),
  );

export const paraphraseText = createServerFn({ method: "POST" })
  .inputValidator((input: { text: string; tone: string }) => {
    if (!input.text?.trim()) throw new Error("Text is required");
    const tones = ["standard", "formal", "casual", "simple"];
    return { text: input.text.slice(0, 20000), tone: tones.includes(input.tone) ? input.tone : "standard" };
  })
  .handler(async ({ data }) =>
    runTextTask(
      "You are a skilled rewriting assistant. Paraphrase the user's text so it keeps the exact meaning but uses different wording and sentence structure. Respond with only the paraphrased text.",
      `Tone: ${data.tone}.\n\nParaphrase this text:\n\n${data.text}`,
    ),
  );

export const generateYouTubeTags = createServerFn({ method: "POST" })
  .inputValidator((input: { title: string; description?: string }) => {
    if (!input.title?.trim()) throw new Error("Video title is required");
    return {
      title: input.title.slice(0, 300),
      description: (input.description ?? "").slice(0, 2000),
    };
  })
  .handler(async ({ data }) =>
    runTextTask(
      "You are a YouTube SEO expert. Given a video title (and optional description), generate 25-35 highly relevant, search-optimized YouTube tags. Mix short single-word tags, mid-tail 2-3 word tags, and long-tail phrases. Include common synonyms and related searches. Output ONLY a single comma-separated line of tags, no numbering, no quotes, no explanations.",
      `Title: ${data.title}${data.description ? `\n\nDescription: ${data.description}` : ""}`,
    ),
  );

export const generateYouTubeTitles = createServerFn({ method: "POST" })
  .inputValidator((input: { topic: string; keyword?: string; tone?: string }) => {
    if (!input.topic?.trim()) throw new Error("Video topic is required");
    const tones = ["engaging", "clickbait", "professional", "howto", "listicle"];
    return {
      topic: input.topic.slice(0, 500),
      keyword: (input.keyword ?? "").slice(0, 100),
      tone: tones.includes(input.tone ?? "") ? input.tone! : "engaging",
    };
  })
  .handler(async ({ data }) =>
    runTextTask(
      "You are a YouTube growth expert. Generate 10 catchy, high-CTR YouTube video titles based on the user's topic. Each title must be under 70 characters, front-load the main keyword when provided, and use proven patterns (numbers, curiosity gaps, brackets, power words) without being misleading. Output ONLY the 10 titles as a numbered list (1. ... 2. ...), no intro, no explanations.",
      `Topic: ${data.topic}${data.keyword ? `\nPrimary keyword: ${data.keyword}` : ""}\nStyle: ${data.tone}`,
    ),
  );

export const generateYouTubeDescription = createServerFn({ method: "POST" })
  .inputValidator((input: { title: string; topic?: string; keywords?: string }) => {
    if (!input.title?.trim()) throw new Error("Video title is required");
    return {
      title: input.title.slice(0, 300),
      topic: (input.topic ?? "").slice(0, 2000),
      keywords: (input.keywords ?? "").slice(0, 300),
    };
  })
  .handler(async ({ data }) =>
    runTextTask(
      "You are a YouTube SEO copywriter. Write a complete, engaging YouTube video description. Structure: (1) a strong 2-3 sentence hook that includes the main keyword in the first 150 characters, (2) a short expanded summary of what viewers will learn, (3) a bulleted 'In this video:' section with 4-6 timestamps placeholders like '00:00 Intro', (4) a call-to-action asking viewers to like and subscribe, (5) a 'Follow us' placeholder line, (6) a final line of 3-5 relevant hashtags. Keep it under 1500 characters. Output only the description text, no preamble.",
      `Title: ${data.title}${data.topic ? `\n\nWhat the video covers: ${data.topic}` : ""}${data.keywords ? `\n\nTarget keywords: ${data.keywords}` : ""}`,
    ),
  );

export const removeBackground = createServerFn({ method: "POST" })
  .inputValidator((input: { dataUrl: string }) => {
    if (!input.dataUrl?.startsWith("data:image/")) throw new Error("A valid image is required");
    if (input.dataUrl.length > 8_000_000) throw new Error("Image is too large. Please use an image under 5 MB.");
    return { dataUrl: input.dataUrl };
  })
  .handler(async ({ data }): Promise<{ dataUrl: string; error?: string }> => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) return { dataUrl: "", error: "AI is not configured on this project yet." };
    try {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Lovable-API-Key": key,
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-image",
          modalities: ["image", "text"],
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Remove the background from this image completely. Keep the main subject exactly as it is, pixel-perfect, and make the background fully transparent. Output a PNG with transparency.",
                },
                { type: "image_url", image_url: { url: data.dataUrl } },
              ],
            },
          ],
        }),
      });
      if (!response.ok) {
        const status = response.status;
        console.error("Background removal failed:", status, await response.text());
        if (status === 429) return { dataUrl: "", error: "Too many requests right now. Please wait a moment and try again." };
        if (status === 402) return { dataUrl: "", error: "AI usage credits have run out. Please add credits to keep using AI tools." };
        return { dataUrl: "", error: "The AI service could not process this image. Please try another image." };
      }
      const json = (await response.json()) as {
        choices?: { message?: { images?: { image_url?: { url?: string } }[] } }[];
      };
      const url = json.choices?.[0]?.message?.images?.[0]?.image_url?.url;
      if (!url) return { dataUrl: "", error: "The AI did not return an image. Please try again." };
      return { dataUrl: url };
    } catch (error) {
      console.error("Background removal error:", error);
      return { dataUrl: "", error: "The AI service could not process this image. Please try again." };
    }
  });