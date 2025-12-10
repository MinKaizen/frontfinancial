import Image from "next/image"
import Link from "next/link"

type Props = {
  backgroundImg: string,
  innerImg: string,
  alt?: string,
  width: number,
  content: string,
}

export function ServiceCard({ content, backgroundImg, innerImg, alt, width }: Props) {
  const backgroundStyle = {
    backgroundImage: `url("${backgroundImg}")`
  }

  return (
    <>
      <div className="bg-off-white p-1 lg:p-2 h-full">
        <div
          className="w-full h-full grid justify-items-center gap-5 py-6 px-6 bg-no-repeat bg-cover bg-center grid-rows-[auto_1fr_auto]"
          style={backgroundStyle}
        >
          <Image
            className="h-[60px] w-auto"
            src={innerImg}
            alt={alt || ''}
            width={width}
            height={60}
          />
          <div className="text-sm xl:text-base text-white leading-normal" dangerouslySetInnerHTML={{ __html: content }}></div>
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

