import React from "react";
import Image from "next/image";

// Replicates the provided comparison visual (no container background).
// Desktop: three-column layout (features + two rounded columns)
// Mobile: two stacked cards; each row shows label + icon

const FEATURES = [
  "Business Continues Trading",
  "Debts Refinanced",
  "Director Stays in Control",
  "Remove DPN Risk",
  "Fast Turnaround",
];

export default function ComparisonTable() {
  return (
    <section>
      {/* Desktop / tablet layout */}
      <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-10 items-start">
        {/* Feature labels */}
        <ul className="self-stretch grid grid-rows-5 content-between text-left text-base lg:text-lg text-[var(--color-tan)]">
          {FEATURES.map((label, i) => (
            <li key={i} className="flex items-center min-h-[80px] leading-snug">
              {label}
            </li>
          ))}
        </ul>

        {/* Liquidation column */}
        <div className="rounded-[36px] px-8 py-8 lg:px-10 lg:py-10 bg-[var(--color-tan)]">
          <h3 className="text-center text-white uppercase tracking-widest text-lg lg:text-xl">Liquidation</h3>
          <div className="mt-6 grid grid-rows-5 gap-6 place-items-center">
            {FEATURES.map((_, i) => (
              <div key={i} className="flex items-center justify-center h-[80px]">
                <Image
                  src="/icon-cross.svg"
                  alt="Not included"
                  width={64}
                  height={64}
                  className="w-14 h-14 lg:w-16 lg:h-16"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Equity Solution column */}
        <div className="rounded-[36px] px-8 py-8 lg:px-10 lg:py-10 bg-[var(--color-soft-navy)]">
          <h3 className="text-center text-white uppercase tracking-widest text-lg lg:text-xl">
            <span className="block">Equity</span>
            <span className="block">Solution</span>
          </h3>
          <div className="mt-6 grid grid-rows-5 gap-6 place-items-center">
            {FEATURES.map((_, i) => (
              <div key={i} className="flex items-center justify-center h-[80px]">
                <Image
                  src="/icon-check.svg"
                  alt="Included"
                  width={64}
                  height={64}
                  className="w-14 h-14 lg:w-16 lg:h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden grid gap-6">
        {/* Liquidation card */}
        <div className="rounded-3xl p-5 bg-[var(--color-tan)]">
          <h3 className="text-center text-white uppercase tracking-widest">Liquidation</h3>
          <ul className="mt-4 divide-y divide-white/20">
            {FEATURES.map((label, i) => (
              <li key={i} className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-black/85">{label}</span>
                <Image src="/icon-cross.svg" alt="Not included" width={28} height={28} className="w-7 h-7" />
              </li>
            ))}
          </ul>
        </div>

        {/* Equity Solution card */}
        <div className="rounded-3xl p-5 bg-[var(--color-soft-navy)]">
          <h3 className="text-center text-white uppercase tracking-widest">Equity Solution</h3>
          <ul className="mt-4 divide-y divide-white/20">
            {FEATURES.map((label, i) => (
              <li key={i} className="flex items-center justify-between gap-4 py-4">
                <span className="text-sm text-white/90">{label}</span>
                <Image src="/icon-check.svg" alt="Included" width={28} height={28} className="w-7 h-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
