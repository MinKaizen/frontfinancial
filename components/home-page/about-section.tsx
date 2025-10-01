import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <div className="bg-white text-royal-navy pt-5">
      <div className="grid lg:grid-cols-2 gap-5 mx-auto max-w-[1400px]">
        <div className="px-5 pt-[80px] lg:pt-[45px] xl:pt-[80px] pb-[45px]">
          <h2 className="uppercase text-[15px] font-bold">True leadership isn’t about reacting, it’s about looking in front.</h2>
          <p className="uppercase text-[15px] font-heading font-light mt-[1.5em]">That’s why we stay by your side 24/7, guiding the way forward before challenges even appear.</p>
          <Link href="/about" className="block w-max relative cursor-pointer mt-[45px] xl:mt-[120px]">
            <div className="pr-3 text-[14px]">About Us</div>
            <div
              className="arrow absolute left-0 bottom-3"
              style={{
                ["--len" as any]: "100%",
                ["--thick" as any]: "1px",
                ["--head" as any]: "4px",
                color: "#333",
              }}
            />
          </Link>
        </div>
        <Image
          className="w-full h-auto"
          src="/opera-house.avif"
          alt="Sydney Opera House"
          width={930}
          height={581}
          loading="lazy"
        />
      </div>
    </div>
  );
}
