import { StickyHeader } from "../sticky-header";
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="grid justify-items-center items-end py-15 px-10 relative min-h-[100vh] place-items-center bg-[url('/home-hero-image.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute left-0 top-0 w-full">
        <StickyHeader></StickyHeader>
      </div>
      <h1 className="uppercase text-sm md:text-base lg:text-lg font-heading text-center">Sharp minded, performance focused, tech driven financial partners</h1>
      <Image
        className="w-full max-w-[89px] h-auto"
        src="/frontfinancial-logo-monogram-icon-white.svg"
        alt="Next.js logo"
        width={89}
        height={51}
        priority
      />
    </div>
  );
}
