import { createFileRoute } from "@tanstack/react-router";
import { toolHead } from "@/lib/tool-head";
import { ContentGenTool } from "@/components/content-gen-tool";

export const Route = createFileRoute("/content-creation/bio-generator")({
  head: () => toolHead("content-creation", "bio-generator"),
  component: Page,
});

function Page() {
  return (
    <ContentGenTool
      categorySlug="content-creation"
      toolSlug="bio-generator"
      taskId="bio-generator"
      buttonLabel="Generate Bios"
      intro="Write 5 short, magnetic profile bios tuned to each platform — Instagram, TikTok, Twitter/X, or LinkedIn."
      howTo={[
        "Enter your 'about you' line — roles, niche, achievements.",
        "Pick your target platform and tone.",
        "Click Generate and copy the bio that reads best out loud.",
      ]}
      splitMode="numbered"
      fields={[
        { name: "about", label: "About you", kind: "textarea", rows: 3, placeholder: "e.g. Freelance UX designer helping SaaS founders launch faster", required: true },
        { name: "platform", label: "Platform", kind: "select", options: [
          { value: "instagram", label: "Instagram" },
          { value: "tiktok", label: "TikTok" },
          { value: "twitter", label: "Twitter / X" },
          { value: "linkedin", label: "LinkedIn" },
        ] },
        { name: "tone", label: "Tone", kind: "select", options: [
          { value: "friendly", label: "Friendly" },
          { value: "professional", label: "Professional" },
          { value: "witty", label: "Witty" },
          { value: "bold", label: "Bold" },
        ] },
      ]}
    />
  );
}