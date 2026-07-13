import { createFileRoute } from "@tanstack/react-router";
import { allTools } from "@/lib/tools";
import { HeroSection } from "@/components/home/hero-section";
import { PersonalizedSection } from "@/components/home/personalized-section";
import { CategoryBento } from "@/components/home/category-bento";
import { AllToolsGrid } from "@/components/home/all-tools-grid";
import { TrustSection } from "@/components/home/trust-section";
import ogCover from "@/assets/og-cover.jpg";

const SITE = "https://all-in-one-approval.lovable.app";
const OG_IMAGE = `${SITE}${ogCover}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ToolsHive — 60 Free Online Tools for Text, Images, PDFs & Code" },
      { name: "description", content: "60 free online tools for text, images, PDFs, developers, calculators, and content creation. Fast, private, and processed in your browser." },
      { property: "og:title", content: "ToolsHive — 60 Free Online Tools" },
      { property: "og:description", content: "60 free online tools for text, images, PDFs, developers, calculators, and content creation. Fast, private, and processed in your browser." },
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
      <PersonalizedSection />
      <CategoryBento />
      <AllToolsGrid />
      <TrustSection />
    </div>
  );
}
