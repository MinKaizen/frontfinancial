import Link from "next/link"
import Image from "next/image"
import type { MenuInfo } from "@/types/menu-info"

type Props = {
  menuInfo: MenuInfo,
  bgColor?: string,
  textColor?: string,
  sticky?: boolean,
}

export function Header({menuInfo, bgColor = "transparent", textColor = "white", sticky = false}: Props) {
  const bgClass = `bg-${bgColor}`
  const textClass = `text-${textColor}`
  const containerClass = `${bgClass} ${textClass} `

  return (
    <div className={"group hidden md:block h-[80px] data-[sticky=true]:${bgClass}/90 data-[sticky=true]:h-[65px] transition duration text-[18px] grid content-center " + containerClass} data-sticky={sticky}>
      <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] px-5">
        <div className="flex flex-row gap-12">
          {menuInfo[0].map((linkInfo, index) => (
            <Link key={index} href={linkInfo.url}>{linkInfo.title}</Link>
          ))}
        </div>
        <Link href="/" className="grid place-items-center">
          <Image
            className="w-full max-w-[220px] h-auto group-data-[sticky=true]:max-w-[200px]"
            src={ `/frontfinancial-logo-primary-${textColor}.svg` }
            alt="FRONT Financial Logo"
            width={220}
            height={15}
            priority
        />
        </Link>
        <div className="flex flex-row gap-12 justify-end">
          {menuInfo[1].map((linkInfo, index) => (
            <Link key={index} href={linkInfo.url}>{linkInfo.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
