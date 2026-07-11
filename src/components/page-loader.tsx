import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function PageLoader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLoading = useRouterState({ select: (s) => s.isLoading || s.isTransitioning });
  const [tick, setTick] = useState(0);
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    setTick((t) => t + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (firstMount && !isLoading) return null;

  return (
    <div key={tick} className="page-loader-overlay" aria-hidden="true">
      <div className="page-loader-rings">
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="ring r3" />
        <span className="core" />
      </div>
    </div>
  );
}