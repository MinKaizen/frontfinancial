"use client"

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Simple, infinite testimonial carousel with arrows + swipe
// Tailwind-only layout (no colors, fonts, or backgrounds)
// Drop into any app: <TestimonialCarousel items={[...]} />

export type Testimonial = {
  quote: string;
  author: string; // person's name
  year: number | string;
};

const DEFAULT_ITEMS: Testimonial[] = [
  {
    quote:
      "If you're looking for a team that delivers on their promises and truly cares about your outcome, Front Financial is the way to go. We'll definitely be coming back for any future finance needs.",
    author: "Jayden",
    year: 2025,
  },
  {
    quote:
      "The process was seamless from start to finish. Clear communication and reliable follow‑through made all the difference for us.",
    author: "Alex",
    year: 2024,
  },
  {
    quote:
      "Professional, prompt, and practical. They helped us make confident decisions without the noise.",
    author: "Riley",
    year: 2025,
  },
];

export default function TestimonialCarousel({
  items = DEFAULT_ITEMS,
  autoPlay = false,
  intervalMs = 8000,
}: {
  items?: Testimonial[];
  autoPlay?: boolean;
  intervalMs?: number;
}) {
  const [[index, direction], setIndex] = useState<[number, 1 | -1]>([0, 1]);

  const page = ((index % items.length) + items.length) % items.length; // safe modulo

  const paginate = useCallback(
    (dir: 1 | -1) => setIndex(([i]) => [i + dir, dir]),
    []
  );

  // Optional autoplay
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => paginate(1), intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, intervalMs, paginate]);

  // Keyboard arrows support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  // Animation variants
  const variants = {
    enter: (d: 1 | -1) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: 1 | -1) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  } as const;

  // Determine a swipe based on velocity + distance
  const swipeConfidenceThreshold = 8000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  const current = items[page];

  return (
    <>
      {/* Quote area */}
      <div className="relative flex items-center justify-center">
        <AnimatePresence custom={direction} mode="popLayout" initial={false}>
          <motion.blockquote
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 400, damping: 40, mass: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
            className="max-w-2xl text-center px-2">
            <span className="block leading-snug">
              “{current.quote}”
            </span>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="mt-8 flex items-center justify-center">
        <button
          aria-label="Previous testimonial"
          onClick={() => paginate(-1)}
          className="inline-flex items-center gap-2 px-3 py-2"
        >
          <span className="select-none cursor-pointer text-2xl">←</span>
        </button>

        <div className="text-center px-4">
          <div className="text-[14px]">
            {current.author}, {current.year}
          </div>
        </div>

        <button
          aria-label="Next testimonial"
          onClick={() => paginate(1)}
          className="inline-flex items-center gap-2 px-3 py-2"
        >
          <span className="select-none cursor-pointer text-2xl">→</span>
        </button>
      </div>
    </>
  );
}
