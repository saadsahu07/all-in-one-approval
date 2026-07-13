import { useEffect, useState, useCallback } from "react";

const FAV_KEY = "toolshive:favorites";
const RECENT_KEY = "toolshive:recent";
const RECENT_MAX = 6;

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

function write(key: string, value: string[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("toolshive:prefs", { detail: { key } }));
  } catch {
    /* quota / private mode — ignore */
  }
}

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

export function useRecent() {
  const [recent] = useStoredList(RECENT_KEY);
  return recent;
}

export function trackRecent(path: string) {
  if (typeof window === "undefined" || !path) return;
  const current = read(RECENT_KEY).filter((p) => p !== path);
  current.unshift(path);
  write(RECENT_KEY, current.slice(0, RECENT_MAX));
}