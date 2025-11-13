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
    "quote": "From the first introduction and Zoom meeting Ryan was very helpful, informative and thorough, we felt ease and relief from that moment. Everything was laid out and a plan was created to move ahead refinancing and consolidating our debts. We were introduced to Dylan, one of Ryan’s brokers. Dylan was amazing and their whole team were. Every phone call from Dylan he kept us informed and helped us get everything sorted and put together, we had a laugh and chat also which made it a pleasant experience.",
    "author": "Nigel Underdown",
    "year": 2025
  },
  {
    "quote": "I have to say a huge thank you once again to Ryan, Bridgette, Jimmy and the team at Front Financial. Ryan, in particular, went above and beyond for us. Nothing was any trouble, including messages and phone calls at all hours. When we were feeling stressed, Ryan reassured us, which gave us peace of mind. It felt like we were dealing with a close family member when working with Ryan. My wife and I would highly recommend Ryan and his team at Front Financial. Don’t even think about going anywhere else. This fantastic team will walk you through it all and be there for you whenever you need a little extra support. Thank you so much, Ryan, you’re a gem.",
    "author": "Mark Holden",
    "year": 2025
  },
  {
    "quote": "Cooper and his team were an absolute pleasure to work with. Navigating the complexities of buying and selling a property at the same time – while juggling a few external curveballs – could've easily been a stressful experience. But Cooper’s calm, solution-focused approach and consistent communication kept everything on track. No issue was too hard, no detail overlooked. In the end, thanks to his efforts, I walked away with the best possible result. Highly recommended.",
    "author": "Derek Foltin",
    "year": 2025
  },
  {
    "quote": "Will and his team went beyond and above in our NOT so simple refinance. The level of professionalism and communication was second to none. They kept us informed at every stage, reassured us at all times and it was never an issue if we had 'just another question'. Truly hard to put into words how easy they made the process for us. We cannot recommend them any higher and we will be using them going forward for not only our personal finances but also our business. THANK YOU WILL AND THE WHOLE TEAM, it has been an absolute pleasure.",
    "author": "Tracie Harding",
    "year": 2025
  },
  {
    "quote": "Dylan Tennyson and the team at FRONT Financial provided an unbeatable experience. We had initially taken our financing needs to 3 different providers. After meeting with Dylan, the decision to work with FRONT Financial was a very easy one. The team brings great energy, and go above and beyond to ensure you have everything you need. They were extremely helpful in sharing their own professional networks with us, and continue to do so post-purchase. I gladly recommend this team to anyone who enquires.",
    "author": "Jesse Mitton",
    "year": 2025
  }
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
            className="text-center px-2">
            <span className="block leading-snug" dangerouslySetInnerHTML={{ __html: `"${current.quote}"` }}>
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
