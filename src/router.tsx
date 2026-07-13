/**
 * TanStack Router bootstrap.
 *
 * `getRouter` is called once per request during SSR (giving each request
 * its own `QueryClient` so cached data never leaks between users) and once
 * on the client at hydration. Any router-wide configuration — default
 * error UI, preloading behavior, scroll restoration — belongs here.
 */
import { QueryClient } from "@tanstack/react-query";
import { createRouter, ErrorComponent as TanstackErrorComponent } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeTree } from "./routeTree.gen";
import { reportLovableError } from "./lib/lovable-error-reporting";

/**
 * Fallback UI shown whenever a route throws and no route-level
 * `errorComponent` handled it. Also reports the error out-of-band so it
 * surfaces in the Lovable dashboard.
 */
function DefaultError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    reportLovableError(error, { boundary: "router_default_error" });
  }, [error]);
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h2 className="text-lg font-semibold text-foreground">This section failed to load</h2>
      <p className="mt-2 text-sm text-muted-foreground">{error.message || "Unexpected error."}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
      >
        Try again
      </button>
    </div>
  );
}

/** Fallback for unmatched URLs when no `notFoundComponent` is defined
 *  higher in the tree. */
function DefaultNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h2 className="text-lg font-semibold text-foreground">Not found</h2>
      <p className="mt-2 text-sm text-muted-foreground">This resource doesn't exist.</p>
    </div>
  );
}

/**
 * Build a fresh router instance. Must be called per SSR request so each
 * request has its own isolated `QueryClient`. On the client this runs once
 * at hydration.
 */
export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Preload a route as soon as the user hovers/focuses a Link — makes
    // navigation feel instant without prefetching everything upfront.
    defaultPreload: "intent",
    // 0 ms staleness so preloaded data is treated as fresh for the
    // upcoming navigation but not cached beyond it.
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultError,
    defaultNotFoundComponent: DefaultNotFound,
  });

  return router;
};

// Silence unused-import warning when tsgo strict-mode kicks in.
void TanstackErrorComponent;
