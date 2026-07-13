import { toast } from "sonner";
import { reportLovableError } from "@/lib/lovable-error-reporting";

/** Run an async operation and surface any failure as a toast + error report.
 *  Returns undefined on failure so callers can pattern-match without try/catch. */
export async function safeAsync<T>(
  fn: () => Promise<T>,
  opts: { errorMessage?: string; boundary?: string } = {},
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error(err);
    reportLovableError(err, { boundary: opts.boundary ?? "safe_async" });
    toast.error(opts.errorMessage ?? err.message ?? "Something went wrong");
    return undefined;
  }
}

/** Try/catch that returns a typed [value, error] tuple. Useful for parsing. */
export function trySync<T>(fn: () => T): [T, null] | [null, Error] {
  try {
    return [fn(), null];
  } catch (error) {
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
}