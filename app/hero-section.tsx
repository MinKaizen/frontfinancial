import Image from "next/image";

export function HeroSection() {
  return (
    <div className="grid justify-items-center py-10 px-5 relative min-h-[100vh] grid-rows-[auto_1fr_auto] items-center">
      <Image
        className="w-full h-full absolute top-0 left-0 -z-1"
        src="/home-hero-image.png"
        alt="Hero Image"
        width={1920}
        height={1080}
        priority
      />
      <Image
        className="w-full max-w-[220px] h-auto"
        src="/frontfinancial-logo-primary-white.svg"
        alt="Next.js logo"
        width={220}
        height={15}
        priority
      />
      <p className="uppercase text-lg font-heading text-center">sharp-minded, never-sleeping, tech-driven financial partners <br className="hidden md:inline-block" />who make your money work as hard as we do.</p>
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
