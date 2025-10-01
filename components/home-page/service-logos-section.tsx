import Image from "next/image";

export function ServiceLogosSection() {
  return (
    <div className="bg-tan-light">
      <div className="grid grid-cols-[auto_auto_auto_auto] gap-3 lg:gap-4 justify-between py-5 md:py-7 px-5 max-w-[1400px] mx-auto">
        <Image
          className="h-[20px] sm:h-[24px] md:h-[36px] lg:h-[40px] w-auto"
          src="/f-residential.svg"
          alt="Residential"
          width={228}
          height={60}
          loading="lazy"
        />
        <Image
          className="h-[20px] sm:h-[24px] md:h-[36px] lg:h-[40px] w-auto"
          src="/f-commercial.svg"
          alt="Residential"
          width={224}
          height={60}
          loading="lazy"
        />
        <Image
          className="h-[20px] sm:h-[24px] md:h-[36px] lg:h-[40px] w-auto"
          src="/f-business.svg"
          alt="Residential"
          width={183}
          height={60}
          loading="lazy"
        />
        <Image
          className="h-[20px] sm:h-[24px] md:h-[36px] lg:h-[40px] w-auto"
          src="/f-private.svg"
          alt="Residential"
          width={154}
          height={60}
          loading="lazy"
        />
      </div>
    </div>
  );
}
