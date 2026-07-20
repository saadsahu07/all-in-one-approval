/**
 * Site-wide chrome: the sticky top `Header` (logo, category nav, search
 * with instant suggestions, mobile menu) and the `Footer` (link columns +
 * copyright). Rendered from `__root.tsx` around every page's `<Outlet />`.
 */
import { Link, useNavigate } from "@tanstack/react-router";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, Search, CornerDownLeft } from "lucide-react";
import { navCategories as categories } from "@/lib/nav";
import { allTools } from "@/lib/tools";
import { SmartLink } from "@/components/ads/SmartLink";

// --- Search perf: computed once at module load so keystrokes don't re-run
// per-tool string work.
// `categoryBySlug` powers the "category label" line under each suggestion
// without a linear `find()` on every render.
const categoryBySlug = new Map(categories.map((c) => [c.slug, c] as const));
// `searchIndex` stores the lowercased haystack for each tool, so the
// keystroke filter is a single `includes` per entry instead of four
// `toLowerCase().includes()` calls building throwaway strings.
const searchIndex = allTools.map((t) => ({
  tool: t,
  haystack: `${t.name} ${t.short} ${t.category} ${t.slug}`.toLowerCase(),
}));

/**
 * Top navigation bar. Handles:
 *   - Desktop category links + search combobox with keyboard nav.
 *   - Mobile hamburger menu with the same search + category list.
 *   - Outside-click dismissal of the suggestions dropdown.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const desktopBoxRef = useRef<HTMLDivElement | null>(null);
  const mobileBoxRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const query = q.trim().toLowerCase();
  // Top 6 matches for the current query. Early-exits the loop once full
  // so we never scan more of the catalog than we need to render.
  const suggestions = useMemo(() => {
    if (!query) return [];
    const out: typeof allTools = [];
    for (const entry of searchIndex) {
      if (entry.haystack.includes(query)) {
        out.push(entry.tool);
        if (out.length === 6) break;
      }
    }
    return out;
  }, [query]);

  // Reset the highlighted row whenever the query changes so ArrowDown
  // always starts from the top of the fresh result set.
  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  // Close the dropdown when the user clicks outside either search box.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        desktopBoxRef.current?.contains(t) ||
        mobileBoxRef.current?.contains(t)
      ) {
        return;
      }
      setFocused(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Enter key: navigate to the highlighted suggestion, or fall back to the
  // full search results page when there is no match.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = suggestions[activeIdx];
    if (target) {
      navigate({ to: target.path as "/" });
    } else {
      navigate({ to: "/search", search: { q } });
    }
    setFocused(false);
    setOpen(false);
  };

  // Arrow keys cycle through suggestions + the trailing "See all results"
  // row (hence `+ 1` in the modulo math). Escape closes the dropdown.
  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % (suggestions.length + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + suggestions.length + 1) % (suggestions.length + 1));
    } else if (e.key === "Escape") {
      setFocused(false);
    }
  };

  const showDropdown = focused && query.length > 0;

  const Suggestions = ({ id }: { id: string }) => (
    <div
      id={id}
      role="listbox"
      className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-border bg-popover shadow-xl"
    >
      {suggestions.length === 0 ? (
        <div className="px-3 py-3 text-sm text-muted-foreground">
          No tools match "{q}"
        </div>
      ) : (
        <>
          <ul className="max-h-80 overflow-y-auto py-1">
            {suggestions.map((t, i) => {
              const cat = categoryBySlug.get(t.category);
              const isActive = i === activeIdx;
              return (
                <li key={t.path}>
                  <Link
                    to={t.path as "/"}
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIdx(i)}
                    onClick={() => {
                      setFocused(false);
                      setOpen(false);
                      setQ("");
                    }}
                    className={`flex items-center gap-3 px-3 py-2 text-sm ${
                      isActive ? "bg-secondary text-foreground" : "text-foreground/90"
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <t.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{t.name}</span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {cat?.name}
                      </span>
                    </span>
                    <CornerDownLeft
                      className={`h-3.5 w-3.5 shrink-0 ${
                        isActive ? "opacity-100 text-muted-foreground" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            to="/search"
            search={{ q }}
            onClick={() => {
              setFocused(false);
              setOpen(false);
            }}
            role="option"
            aria-selected={activeIdx === suggestions.length}
            onMouseEnter={() => setActiveIdx(suggestions.length)}
            className={`flex items-center justify-between gap-2 border-t border-border px-3 py-2.5 text-xs font-medium ${
              activeIdx === suggestions.length
                ? "bg-secondary text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <span>See all results for "{q}"</span>
            <CornerDownLeft className="h-3.5 w-3.5" />
          </Link>
        </>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src="/toolshive-logo.png"
            alt="ToolsHive"
            width={32}
            height={32}
            decoding="async"
            fetchPriority="high"
            className="h-8 w-8 object-contain"
          />
          <span className="text-base font-semibold tracking-tight">ToolsHive</span>
        </Link>
        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={c.path as "/"}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium bg-secondary text-foreground" }}
            >
              {c.name.replace(" & Converters", "")}
            </Link>
          ))}
          <Link
            to="/blog"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium bg-secondary text-foreground" }}
          >
            Blog
          </Link>
        </nav>
        <div ref={desktopBoxRef} className="relative ml-auto hidden md:block">
          <form onSubmit={submit}>
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onFocus={() => setFocused(true)}
              onKeyDown={onKey}
              role="combobox"
              aria-expanded={showDropdown}
              aria-controls="tool-suggest-desktop"
              aria-autocomplete="list"
              placeholder="Search tools…"
              className="h-9 w-64 rounded-md border border-input bg-background pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </form>
          {showDropdown && <Suggestions id="tool-suggest-desktop" />}
        </div>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-card px-4 pb-4 md:hidden">
          <div ref={mobileBoxRef} className="relative py-3">
            <form onSubmit={submit}>
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setFocused(true)}
                onKeyDown={onKey}
                role="combobox"
                aria-expanded={showDropdown}
                aria-controls="tool-suggest-mobile"
                aria-autocomplete="list"
                placeholder="Search tools…"
                className="h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </form>
            {showDropdown && <Suggestions id="tool-suggest-mobile" />}
          </div>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={c.path as "/"}
              onClick={() => setOpen(false)}
              className="block min-h-11 rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {c.name}
            </Link>
          ))}
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="block min-h-11 rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
}

export const Footer = memo(function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-navy-deep text-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-bold">ToolsHive</p>
          <p className="mt-2 text-sm opacity-80">
            120+ free online tools. Files are processed in your browser and never uploaded to our servers.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Tools</p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={c.path as "/"} className="opacity-80 hover:opacity-100">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="opacity-80 hover:opacity-100">About</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="opacity-80 hover:opacity-100">Privacy Policy</Link></li>
            <li><Link to="/terms" className="opacity-80 hover:opacity-100">Terms of Service</Link></li>
            <li><Link to="/disclaimer" className="opacity-80 hover:opacity-100">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground/10 py-4 text-center text-xs opacity-60">
        <div className="mb-3 flex justify-center">
          <SmartLink>Sponsored: recommended offer for our readers</SmartLink>
        </div>
        © {new Date().getFullYear()} ToolsHive. All rights reserved.
      </div>
    </footer>
  );
});