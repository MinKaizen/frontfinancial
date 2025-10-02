import Image from "next/image"
import Link from "next/link"

type Props = {
  backgroundImg: string,
  innerImg: string,
  url: string,
  alt?: string,
  width: number,
}

export function ServiceCard({backgroundImg, innerImg, url, alt, width}: Props) {
  const backgroundStyle = {
    backgroundImage: `url("${backgroundImg}")`
  }

  return (
    <>
      <Link href={url}>
        <div className="bg-off-white p-1 lg:p-2 aspect-[34/41]">
          <div className="w-full h-full grid place-items-center bg-no-repeat bg-cover bg-center" style={backgroundStyle}>
            <Image
              className="h-[60px] max-h-[15%] w-auto"
              src={innerImg}
              alt={alt || ''}
              width={width}
              height={60}
              priority
            />
          </div>
        </div>
      </Link>
    </>
  )
}
