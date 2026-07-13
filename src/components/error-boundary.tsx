import { Component, type ReactNode } from "react";
import { reportLovableError } from "@/lib/lovable-error-reporting";

interface Props {
  children: ReactNode;
  /** Rendered when a descendant throws. Receives the error and a reset fn. */
  fallback?: (error: Error, reset: () => void) => ReactNode;
  /** Optional label used in error reports to identify the failing surface. */
  boundary?: string;
  /** Reset the boundary when this key changes (e.g. route pathname). */
  resetKey?: unknown;
}

interface State {
  error: Error | null;
}

/** Local error boundary for a single UI region (e.g. a tool body). Keeps
 *  surrounding chrome — header, breadcrumbs, related tools — mounted while
 *  showing a scoped fallback and a retry button. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error(error);
    reportLovableError(error, { boundary: this.props.boundary ?? "error_boundary" });
  }

  componentDidUpdate(prev: Props) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  reset = () => this.setState({ error: null });

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    if (this.props.fallback) return this.props.fallback(error, this.reset);
    return <DefaultFallback error={error} reset={this.reset} />;
  }
}

function DefaultFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-5">
      <p className="text-sm font-semibold text-destructive">Something went wrong</p>
      <p className="mt-1 text-sm text-muted-foreground">
        {error.message || "This section failed to load."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-3 inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent"
      >
        Try again
      </button>
    </div>
  );
}