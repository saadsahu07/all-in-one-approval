import { createFileRoute } from "@tanstack/react-router";
import { allTools } from "@/lib/tools";
import { HeroSection } from "@/components/home/hero-section";
import { PersonalizedSection } from "@/components/home/personalized-section";
import { CategoryBento } from "@/components/home/category-bento";
import { AllToolsGrid } from "@/components/home/all-tools-grid";
import { NativeBanner } from "@/components/ads/NativeBanner";
import { BannerAd } from "@/components/ads/BannerAd";
import { CaptchaLocker } from "@/components/ads/CaptchaLocker";
import { ImageBanner } from "@/components/ads/ImageBanner";
import { TrustSection } from "@/components/home/trust-section";
import ogCover from "@/assets/og-cover.jpg";

const SITE = "https://toolshive.tools";
const OG_IMAGE = `${SITE}${ogCover}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "120+ Free Online Tools — Text, Image, PDF & More | ToolsHive" },
      { name: "description", content: "Free online tools that just work — compress images, edit PDFs, count words, convert files, generate content and more. 120+ tools, no signup, no watermark, all in your browser." },
      { property: "og:title", content: "120+ Free Online Tools — Text, Image, PDF & More | ToolsHive" },
      { property: "og:description", content: "Free online tools that just work — compress images, edit PDFs, count words, convert files, generate content and more. 120+ tools, no signup, no watermark, all in your browser." },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "ToolsHive — all tools",
          numberOfItems: allTools.length,
          itemListElement: allTools.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE}${t.path}`,
            name: t.name,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

/**
 * Home page: composes the marketing hero, personalized quick-access section,
 * category bento grid, full tool library and trust panel.
 * Each section lives in its own component under `src/components/home/`.
 */
function Index() {
  return (
    <div>
      <HeroSection />
      <div className="mx-auto max-w-6xl px-4">
        <ImageBanner variant="leaderboard" />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <CaptchaLocker
          title="🎁 Unlock a free bonus offer"
          description="Quick human verification unlocks a handpicked deal for ToolsHive users — takes 30 seconds."
        />
      </div>
      <PersonalizedSection />
      <CategoryBento />
      <div className="mx-auto max-w-6xl px-4">
        <BannerAd />
        <NativeBanner />
      </div>
      <AllToolsGrid />
      <TrustSection />
    </div>
  );
}
