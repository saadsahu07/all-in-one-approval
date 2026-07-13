/**
 * Per-visitor UI preferences persisted to `localStorage`.
 *
 * Two lists are tracked:
 *   - Favorites: tool paths the user pinned; unbounded.
 *   - Recent:    last `RECENT_MAX` tool paths visited (most-recent first).
 *
 * Cross-tab sync is delivered via the browser `storage` event; same-tab
 * sync via a custom `toolshive:prefs` event so a favorite toggled in the
 * header updates the homepage without a reload.
 *
 * All reads are SSR-safe (return `[]` on the server) and swallow quota /
 * private-mode errors so they never break rendering.
 */
import { useEffect, useState, useCallback } from "react";

const FAV_KEY = "toolshive:favorites";
const RECENT_KEY = "toolshive:recent";
const RECENT_MAX = 6;

/** Read a string[] from localStorage. Returns [] on SSR, corrupted JSON, or missing key. */
function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/** Persist a string[] and notify same-tab listeners. Errors are ignored (quota / private mode). */
function write(key: string, value: string[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("toolshive:prefs", { detail: { key } }));
  } catch {
    /* quota / private mode — ignore */
  }
}

/**
 * Internal hook powering both `useFavorites` and `useRecent`. Subscribes to
 * same-tab and cross-tab change events so components re-render when the
 * stored list changes elsewhere.
 */
function useStoredList(key: string): [string[], (next: string[]) => void] {
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    setList(read(key));
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail || detail.key === key) setList(read(key));
    };
    window.addEventListener("toolshive:prefs", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("toolshive:prefs", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [key]);
  const set = useCallback(
    (next: string[]) => {
      write(key, next);
      setList(next);
    },
    [key],
  );
  return [list, set];
}

/**
 * React hook for the favorites list.
 * @returns `favorites` — pinned tool paths (newest first).
 * @returns `isFavorite(path)` — quick membership check.
 * @returns `toggle(path)` — add if missing, remove if present.
 */
export function useFavorites() {
  const [favorites, setFavorites] = useStoredList(FAV_KEY);
  const isFavorite = useCallback((path: string) => favorites.includes(path), [favorites]);
  const toggle = useCallback(
    (path: string) => {
      const current = read(FAV_KEY);
      const next = current.includes(path)
        ? current.filter((p) => p !== path)
        : [path, ...current];
      setFavorites(next);
    },
    [setFavorites],
  );
  return { favorites, isFavorite, toggle };
}

/** Read-only hook for the recent-tools list. Updates automatically when
 *  `trackRecent` is called from anywhere in the app. */
export function useRecent() {
  const [recent] = useStoredList(RECENT_KEY);
  return recent;
}

/**
 * Record that the current visitor just opened `path`. Deduplicates, moves
 * the entry to the front, and trims the list to `RECENT_MAX`. No-op on the
 * server or when `path` is empty.
 */
export function trackRecent(path: string) {
  if (typeof window === "undefined" || !path) return;
  const current = read(RECENT_KEY).filter((p) => p !== path);
  current.unshift(path);
  write(RECENT_KEY, current.slice(0, RECENT_MAX));
}