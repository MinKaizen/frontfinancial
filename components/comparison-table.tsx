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
    <section className="grid place-items-center">
      {/* Desktop / tablet layout */}
      <div className="hidden md:grid grid-cols-[auto_1fr_1fr] gap-10 justify-center">
        {/* Feature labels */}
        <ul className="self-stretch grid grid-rows-5 content-between text-left text-base text-white py-6">
          <div className="w-full h-[40px]"></div>
          {FEATURES.map((label, i) => (
            <li key={i} className="flex items-center justify-items-end justify-end h-[60px] leading-snug text-right">
              {label}
            </li>
          ))}
        </ul>

        {/* Liquidation column */}
        <div className="rounded-[20px] px-8 py-6 bg-tan">
          <h3 className="text-center text-white uppercase tracking-widest text-sm h-[40px] grid place-items-center">Liquidation</h3>
          <div className="mt-6 grid grid-rows-5 gap-6 place-items-center">
            {FEATURES.map((_, i) => (
              <div key={i} className="flex items-center justify-center h-[60px]">
                <Image
                  src="/icon-cross.svg"
                  alt="Not included"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Equity Solution column */}
        <div className="rounded-[20px] px-8 py-6 bg-soft-navy">
          <h3 className="text-center text-white uppercase tracking-widest text-sm">
            <span className="block">Equity</span>
            <span className="block">Solution</span>
          </h3>
          <div className="mt-6 grid grid-rows-5 gap-6 place-items-center">
            {FEATURES.map((_, i) => (
              <div key={i} className="flex items-center justify-center h-[60px]">
                <Image
                  src="/icon-check.svg"
                  alt="Included"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden grid gap-6">
        {/* Liquidation card */}
        <div className="rounded-3xl py-2 px-5 bg-soft-navy">
          <ul className="divide-y divide-white/20">
            <div className="grid grid-cols-[130px_1fr_1fr] sm:grid-cols-[160px_1fr_1fr] items-center justify-between gap-4 py-4 justify-items-center">
              <div></div>
              <div className="font-bold text-center">Liquidation</div>
              <div className="font-bold text-center">Equity Solution</div>
            </div>
            {FEATURES.map((label, i) => (
              <li key={i} className="grid grid-cols-[130px_1fr_1fr] sm:grid-cols-[160px_1fr_1fr] items-center justify-between gap-4 py-4 justify-items-center">
                <span className="text-sm justify-self-start">{label}</span>
                <Image src="/icon-cross.svg" alt="Not included" width={28} height={28} className="w-7 h-7" />
                <Image src="/icon-check.svg" alt="Included" width={28} height={28} className="w-7 h-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
