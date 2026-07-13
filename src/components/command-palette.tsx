import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, Star, Clock, ArrowRight } from "lucide-react";
import { allTools, categories } from "@/lib/tools";
import { useFavorites, useRecent } from "@/lib/user-prefs";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: Props) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { favorites, isFavorite, toggle } = useFavorites();
  const recent = useRecent();

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) {
      const favTools = favorites
        .map((p) => allTools.find((t) => t.path === p))
        .filter((t): t is (typeof allTools)[number] => !!t);
      const recTools = recent
        .map((p) => allTools.find((t) => t.path === p))
        .filter((t): t is (typeof allTools)[number] => !!t && !favorites.includes(t.path));
      const rest = allTools.filter((t) => !favorites.includes(t.path) && !recent.includes(t.path));
      return [...favTools, ...recTools, ...rest].slice(0, 12);
    }
    return allTools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.short.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query) ||
          t.slug.includes(query),
      )
      .slice(0, 12);
  }, [q, favorites, recent]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        const t = results[active];
        if (t) {
          e.preventDefault();
          navigate({ to: t.path as "/" });
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, active, navigate, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 px-4 pt-[10vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search 55 tools…"
            className="flex-1 bg-transparent py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <kbd className="hidden rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline">ESC</kbd>
        </div>
        <div className="max-h-[50vh] overflow-y-auto py-2">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">No tools match "{q}".</p>
          ) : (
            <ul>
              {!q.trim() && (favorites.length > 0 || recent.length > 0) && (
                <li className="px-4 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {favorites.length > 0 ? "Favorites & recent" : "Recent"}
                </li>
              )}
              {results.map((t, i) => {
                const cat = categories.find((c) => c.slug === t.category);
                const fav = isFavorite(t.path);
                return (
                  <li key={t.path}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => {
                        navigate({ to: t.path as "/" });
                        onClose();
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        i === active ? "bg-secondary" : ""
                      }`}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary/40 text-accent">
                        <t.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground">{t.name}</span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {cat?.name} · {t.short}
                        </span>
                      </span>
                      <button
                        type="button"
                        aria-label={fav ? "Unfavorite" : "Favorite"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggle(t.path);
                        }}
                        className="rounded p-1 text-muted-foreground hover:text-accent"
                      >
                        <Star className={`h-4 w-4 ${fav ? "fill-accent text-accent" : ""}`} />
                      </button>
                      <ArrowRight className={`h-3.5 w-3.5 shrink-0 text-muted-foreground ${i === active ? "opacity-100" : "opacity-0"}`} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-border bg-secondary/30 px-4 py-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1"><kbd className="rounded border border-border bg-background px-1 py-px">↑↓</kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="rounded border border-border bg-background px-1 py-px">↵</kbd> open</span>
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <Clock className="h-3 w-3" /> Recent & <Star className="h-3 w-3" /> favorites saved locally
          </span>
        </div>
      </div>
    </div>
  );
}