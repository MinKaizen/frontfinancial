import Image from "next/image"
import Link from "next/link"

type Props = {
  bgColor?: string,
  textColor?: string,
}

export function FaqSection({bgColor = "white", textColor = "royal-navy"}: Props) {
  const bgClass = `bg-${bgColor}`
  const textClass = `text-${textColor}`
  const containerClass = `${bgClass} ${textClass}`
  return (
    <div className={containerClass}>
      <div className="flex flex-col-reverse lg:grid grid-cols-2">
        <div className="px-5 py-8 lg:py-12 xl:py-18 lg:grid grid-rows-[auto_1fr_1fr]">
          <h2 className="pb-12 text-body">Frequently asked questions.</h2>
          <div className="text-[14px]">
            <p className="">Truth be told, the most common question we get is <br />"When do we start?"</p>
            <p className="mt-[1.5em]">Luckily for you, the answer lives on our contact page</p>
          </div>
          <Link href="/contact" className="block w-max relative cursor-pointer mt-[45px] lg:mt-5 xl:mt-[45px]">
            <div className="pr-3 text-[14px]">Explore</div>
            <div
              className="arrow absolute left-0 bottom-3"
              style={{
                ["--len" as any]: "100%",
                ["--thick" as any]: "1px",
                ["--head" as any]: "4px",
                color: "#393838",
              }}
            />
          </Link>
        </div>
        <div className="aspect-[960/648] w-full">
          <Image
            className="object-center object-cover h-full w-full"
            src="/old-building.avif"
            alt="Old building"
            height={648}
            width={960}
          />
        </div>
      </div>
    </div>
  )
}
