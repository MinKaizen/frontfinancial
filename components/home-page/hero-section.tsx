import Image from "next/image";

export function HeroSection() {
  return (
    <div className="grid justify-items-center py-15 px-10 relative min-h-[100vh] grid-rows-[auto_1fr_auto] items-center bg-[url('/home-hero-image.png')] bg-cover bg-center bg-no-repeat">
      <Image
        className="w-full max-w-[220px] h-auto"
        src="/frontfinancial-logo-primary-white.svg"
        alt="Next.js logo"
        width={220}
        height={15}
        priority
      />
      <p className="uppercase text-sm md:text-base lg:text-lg font-heading text-center">sharp-minded, never-sleeping, tech-driven financial partners <br className="hidden lg:inline-block" />who make your money work as hard as we do.</p>
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
