import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import ogCover from "@/assets/og-cover.jpg";
const OG = `https://toolshive.tools${ogCover}`;

export const Route = createFileRoute("/calculators/")({
  head: () => ({
    meta: [
      { title: "Free Calculators & Converters — Age, BMI, EMI | ToolsHive" },
      { name: "description", content: "10 free calculators and converters: age, BMI, percentage, GST/VAT, EMI, currency, length, weight, temperature, and binary." },
      { property: "og:title", content: "Free Calculators & Converters | ToolsHive" },
      { property: "og:description", content: "Everyday calculators and unit converters, free and instant." },
      { property: "og:url", content: "https://toolshive.tools/calculators" },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "https://toolshive.tools/calculators" }],
  }),
  component: () => <CategoryPage slug="calculators" />,
});