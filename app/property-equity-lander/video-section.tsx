import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

export function VideoSection() {
  return (
    <>
      <div className="bg-charcoal">
        <div className="max-w-[1300px] mx-auto py-20 grid gap-10 justify-items-center">
          <Image
            className="w-full max-w-[220px] h-auto group-data-[sticky=true]:max-w-[200px]"
            src={`/frontfinancial-logo-primary-white.svg`}
            alt="FRONT Financial Logo"
            width={220}
            height={15}
            priority
          />

          <div className="aspect-video w-full bg-black rounded-lg relative overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1145449656?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Placeholder Video"
            />
          </div>

          <Script src="https://player.vimeo.com/api/player.js" />

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

