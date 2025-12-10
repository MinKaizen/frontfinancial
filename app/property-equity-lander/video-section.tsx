import Link from "next/link"
import Image from "next/image"

export function VideoSection() {
  return (
    <>
      <div className="bg-[#383838]">
        <div className="max-w-[1300px] mx-auto py-20 grid gap-10 justify-items-center">
          <Image
            className="w-full max-w-[220px] h-auto group-data-[sticky=true]:max-w-[200px]"
            src={`/frontfinancial-logo-primary-white.svg`}
            alt="FRONT Financial Logo"
            width={220}
            height={15}
            priority
          />
          <div className="aspect-video w-full bg-black rounded-lg"></div>
          <Link href="#inquire_form" className="block w-max relative cursor-pointer">
            <div className="px-3">Inquire</div>
            <div
              className="arrow absolute left-0 bottom-3"
              style={{
                ["--len" as any]: "100%",
                ["--thick" as any]: "1px",
                ["--head" as any]: "4px",
                color: "white",
              }}
            />
          </Link>
        </div>
      </div>
    </>
  )
}
