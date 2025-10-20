import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="bg-center bg-cover text-white relative">
      <div className="px-5 py-10 min-h-[500px] lg:min-h-[670px] grid justify-center justify-items-center content-center">
        <h2 className="text-body text-center uppercase">Available whenever you need us <br className="hidden sm:block"/>— 365 days a year, 366 on leap years.</h2>
        <Link href="/contact" className="block w-max relative cursor-pointer mt-[45px] lg:mt-[70px]">
          <div className="pr-3 text-[14px]">Contact Us</div>
          <div
            className="arrow absolute left-0 bottom-3"
            style={{
              ["--len" as any]: "100%",
              ["--thick" as any]: "1px",
              ["--head" as any]: "4px",
              color: "#fff",
            }}
          />
        </Link>
      </div>
      <Image 
        className="object-center object-cover w-full h-full absolute top-0 left-0 -z-1"
        src={"/harbour-bridge-sunset.avif"}
        alt=""
        quality={100}
        width={1920}
        height={577}
        priority
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
      />
    </div>
  )
}
