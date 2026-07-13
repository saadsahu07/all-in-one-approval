import { QueryClient } from "@tanstack/react-query";
import { createRouter, ErrorComponent as TanstackErrorComponent } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeTree } from "./routeTree.gen";
import { reportLovableError } from "./lib/lovable-error-reporting";

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

function DefaultNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h2 className="text-lg font-semibold text-foreground">Not found</h2>
      <p className="mt-2 text-sm text-muted-foreground">This resource doesn't exist.</p>
    </div>
  );
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultError,
    defaultNotFoundComponent: DefaultNotFound,
  });

  return router;
};

// Silence unused-import warning when tsgo strict-mode kicks in.
void TanstackErrorComponent;
