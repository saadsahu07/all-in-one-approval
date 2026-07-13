import { useEffect, useState } from "react";

/** Returns true only after the client has hydrated. Use to avoid SSR mismatches
 *  when reading window/localStorage/date/random values during render. */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}