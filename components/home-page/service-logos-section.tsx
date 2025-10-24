import Image from "next/image";
import Link from "next/link";

type Logo = {
  src: string,
  alt: string,
  width: number,
  height: number,
  url: string,
}

const logos: Logo[] = [
  { src: "/f-residential.svg", alt: "Residential", width: 228, height: 60, url: "/services/residential" },
  { src: "/f-commercial.svg", alt: "Commercial", width: 224, height: 60, url: "/services/commercial"},
  { src: "/f-business.svg", alt: "Business", width: 183, height: 60, url: "/services/business"},
  { src: "/f-private.svg", alt: "Private", width: 154, height: 60, url: "/services/private"},
];

export function ServiceLogosSection() {
  const sequence = [...logos, ...logos];

  return (
    <div className="bg-tan-light">
      <div className="overflow-hidden py-5 md:py-7">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex items-center">
            <div className="marquee-track flex flex-nowrap items-center gap-6 md:gap-8 will-change-transform">
              {sequence.map((logo, i) => (
                <Link
                  href={logo.url}
                  key={`${logo.src}-${i}`}
                  className="flex-none w-[25vw] xl:w-[20vw] flex justify-center"
                  aria-hidden={i >= logos.length ? true : undefined}
                >
                  <Image
                    className="h-[20px] sm:h-[24px] md:h-[36px] lg:h-[40px] w-auto"
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .marquee-track { animation: marquee 40s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-duration: 1ms; animation-iteration-count: 1; }
        }
      `}</style>
    </div>
  );
}
