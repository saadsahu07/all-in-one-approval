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