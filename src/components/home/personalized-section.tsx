import { Star, Clock } from "lucide-react";
import { allTools } from "@/lib/tools";
import { useFavorites, useRecent } from "@/lib/user-prefs";
import { ToolLinkCard } from "@/components/tool/tool-link-card";

/**
 * Renders the visitor's saved favorites and recently used tools.
 * Hidden entirely when the visitor has no personal history yet.
 */
export function PersonalizedSection() {
  const { favorites } = useFavorites();
  const recent = useRecent();

  const favTools = favorites
    .map((p) => allTools.find((t) => t.path === p))
    .filter((t): t is (typeof allTools)[number] => !!t);

  const recentTools = recent
    .map((p) => allTools.find((t) => t.path === p))
    .filter((t): t is (typeof allTools)[number] => !!t && !favorites.includes(t.path))
    .slice(0, 4);

  if (favTools.length === 0 && recentTools.length === 0) return null;

  return (
    <section className="border-b border-border bg-navy-deep/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {favTools.length > 0 && (
          <ToolRow
            icon={<Star className="h-4 w-4 fill-accent text-accent" />}
            label="Your favorites"
            tone="accent"
            tools={favTools}
          />
        )}
        {recentTools.length > 0 && (
          <div className={favTools.length > 0 ? "mt-8" : ""}>
            <ToolRow
              icon={<Clock className="h-4 w-4 text-muted-foreground" />}
              label="Recently used"
              tone="muted"
              tools={recentTools}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function ToolRow({
  icon,
  label,
  tone,
  tools,
}: {
  icon: React.ReactNode;
  label: string;
  tone: "accent" | "muted";
  tools: (typeof allTools)[number][];
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        {icon}
        <h2
          className={`text-sm font-semibold uppercase tracking-[0.2em] ${
            tone === "accent" ? "text-accent" : "text-muted-foreground"
          }`}
        >
          {label}
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((t) => (
          <ToolLinkCard key={t.path} tool={t} variant="compact" />
        ))}
      </div>
    </div>
  );
}