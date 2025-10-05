"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { MenuInfo } from "@/types/menu-info"

type Props = {
  menuInfo: MenuInfo,
  bgColor?: string
  textColor?: string
  sticky?: boolean,
}

export function MobileHeader({ menuInfo, bgColor = "transparent", textColor = "white", sticky = false }: Props) {
  const [open, setOpen] = useState(false)

  const menuFlat = menuInfo.flat()
  const bgClass = `bg-${bgColor}`
  const textClass = `text-${textColor}`
  const containerClass = `${bgClass} ${textClass}`

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className={"md:hidden h-[60px] grid content-center z-10 group -mb-px " + containerClass} data-sticky={sticky ? "true" : "false"}>
      <div className="px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Image
            className="w-full max-w-[160px] h-auto"
            src={`/frontfinancial-logo-primary-${textColor}.svg`}
            alt="Front Financial logo"
            width={180}
            height={15}
            priority
          />
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-7 h-7"
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className={`absolute inset-0 bg-black/50`} />
      </div>

      {/* Slide-out menu */}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[300px] bg-white text-royal-navy shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[64px] px-5 flex items-center justify-between border-b border-black/10">
          <Image
            className="w-full max-w-[140px] h-auto"
            src={ `/frontfinancial-logo-primary-royal-navy.svg` }
            alt="Next.js logo"
            width={220}
            height={15}
            priority
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="p-5">
          <ul className="space-y-2 text-lg">
            {menuFlat.map((linkInfo, index) => (
              <li key={index}>
                <Link href={linkInfo.url} onClick={() => setOpen(false)} className="block py-2">{linkInfo.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
