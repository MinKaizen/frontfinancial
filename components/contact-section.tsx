import Link from "next/link"

export function ContactSection() {
  const style = {
    backgroundImage: 'url("/harbour-bridge-sunset.avif")'
  }

  return (
    <div style={style} className="bg-center bg-cover text-white">
      <div className="px-5 py-10 min-h-[500px] lg:min-h-[850px] grid justify-center justify-items-center content-center">
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
    </div>
  )
}
