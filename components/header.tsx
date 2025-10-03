import Link from "next/link"
import Image from "next/image"

type Props = {
  bgColor?: string,
  textColor?: string,
}

export function Header({bgColor = "transparent", textColor = "white"}: Props) {
  const bgClass = `bg-${bgColor}`
  const textClass = `text-${textColor}`
  const containerClass = `${bgClass} ${textClass} `

  return (
    <div className={"h-[80px] backdrop-blur group-data-[sticky=true]:${bgClass}/90 group-data-[sticky=true]:h-[50px] transition duration text-[18px] group-data-[sticky=true]:text-body grid content-center " + containerClass}>
      <div className="grid grid-cols-[1fr_auto_1fr] px-5">
        <div className="flex flex-row gap-12">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
        </div>
        <Link href="/" className="grid place-items-center">
          <Image
            className="w-full max-w-[220px] h-auto group-data-[sticky=true]:max-w-[180px]"
            src={ `/frontfinancial-logo-primary-${textColor}.svg` }
            alt="Next.js logo"
            width={220}
            height={15}
            priority
        />
        </Link>
        <div className="flex flex-row gap-12 justify-end">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}
