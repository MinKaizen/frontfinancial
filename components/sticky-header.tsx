"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type StickyHeaderProps = {
  /** Header content (logo/nav/cta...) */
  children: ReactNode;
  /** Pixels you must scroll past before it becomes sticky */
  thresholdPx?: number;
  /** Extra classes for the <header> element */
  className?: string;
  /** Force sticky mode at all times */
  alwaysSticky?: boolean;
};

export function StickyHeader({
  children,
  thresholdPx = 1,
  className = "",
  alwaysSticky = false,
}: StickyHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [debouncedSticky, setDebouncedSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        const nextSticky = !entries[0].isIntersecting;
        setIsSticky((prev) => (prev !== nextSticky ? nextSticky : prev));
      },
      {
        root: null,
        rootMargin: `-${thresholdPx}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, [thresholdPx]);

  // Debounce data-sticky updates by 100ms; only apply when stable
  useEffect(() => {
    if (alwaysSticky) {
      setDebouncedSticky(true);
      return;
    }

    const t = setTimeout(() => {
      setDebouncedSticky(isSticky);
    }, 100);

    return () => clearTimeout(t);
  }, [isSticky, alwaysSticky]);

  const sticky = alwaysSticky || debouncedSticky;

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px w-full" />
      <header
        data-sticky={sticky ? "true" : "false"}
        className={[
          "group",
          alwaysSticky ? "fixed" : "sticky",
          "top-0 z-50 w-full",
          "transition-[height,transform,opacity,box-shadow,background-color] duration-200 ease-out",
          className,
        ].join(" ")}
      >
        {children}
      </header>
    </>
  );
}
