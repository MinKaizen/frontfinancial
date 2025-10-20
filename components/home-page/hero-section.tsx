import { StickyHeader } from "../sticky-header";
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="grid justify-items-center items-end py-15 px-10 relative min-h-[100vh] place-items-center">
      <Image
        src="/home-hero-image.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        fetchPriority="high"
        loading="eager"
        quality={75}
      />
      <div className="absolute left-0 top-0 w-full z-10">
        <StickyHeader></StickyHeader>
      </div>
      <h1 className="relative z-10 uppercase text-sm md:text-base lg:text-lg font-heading text-center">Sharp minded, performance focused, tech driven financial partners</h1>
      <Image
        className="relative z-10 w-full max-w-[89px] h-auto"
        src="/frontfinancial-logo-monogram-icon-white.svg"
        alt="FRONT Financial Logo"
        width={89}
        height={51}
        priority
      />
    </div>
  );
}
