import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names with correct precedence.
 * `clsx` handles conditional/falsy values; `twMerge` resolves conflicting
 * utilities (e.g. `p-2 p-4` → `p-4`) so component variants can safely
 * override caller-supplied classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
