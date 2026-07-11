import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Wrench, Search } from "lucide-react";
import { categories } from "@/lib/tools";

export function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/search", search: { q } });
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight">ToolHarbor</span>
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
        <form onSubmit={submit} className="relative ml-auto hidden md:block">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search tools…"
            className="h-9 w-56 rounded-md border border-input bg-background pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </form>
        <button
          className="ml-auto rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-4 pb-4 md:hidden">
          <form onSubmit={submit} className="relative py-3">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search tools…"
              className="h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </form>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={c.path as "/"}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-bold">ToolHarbor</p>
          <p className="mt-2 text-sm opacity-80">
            50 free online tools. Files are processed in your browser and never uploaded to our servers.
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
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} ToolHarbor. All rights reserved.
      </div>
    </footer>
  );
}