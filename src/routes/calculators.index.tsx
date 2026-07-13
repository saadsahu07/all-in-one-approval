import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/calculators/")({
  head: () => ({
    meta: [
      { title: "Free Calculators & Converters — Age, BMI, EMI | ToolsHive" },
      { name: "description", content: "10 free calculators and converters: age, BMI, percentage, GST/VAT, EMI, currency, length, weight, temperature, and binary." },
      { property: "og:title", content: "Free Calculators & Converters | ToolsHive" },
      { property: "og:description", content: "Everyday calculators and unit converters, free and instant." },
      { property: "og:url", content: "https://all-in-one-approval.lovable.app/calculators" },
    ],
    links: [{ rel: "canonical", href: "https://all-in-one-approval.lovable.app/calculators" }],
  }),
  component: () => <CategoryPage slug="calculators" />,
});