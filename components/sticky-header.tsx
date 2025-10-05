"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/header";
import { MobileHeader } from "@/components/mobile-header";
import type { MenuInfo } from "@/types/menu-info"

type Props = {
  bgColor?: string,
  textColor?: string,
}

const menuInfo: MenuInfo = [
  [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "/services",
    },
  ],
  [
    {
      title: "Contact",
      url: "/contact",
    },
  ],
]

export function StickyHeader({bgColor = "transparent", textColor = "white"}: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        const nextSticky = !entries[0].isIntersecting;
        setIsSticky((prev) => (prev !== nextSticky ? nextSticky : prev));
      },
      {
        root: null,
        rootMargin: `100px 0px 0px 0px`,
        threshold: 0,
      }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef}>
        <Header menuInfo={menuInfo} bgColor={bgColor} textColor={textColor}/>
        <MobileHeader menuInfo={menuInfo} bgColor={bgColor} textColor={textColor}/>
      </div>
      <div className={"fixed z-9999 top-0 left-0 w-full transition-all duration-200" + ( isSticky || " -translate-y-full opacity-0")}>
        <Header menuInfo={menuInfo} bgColor="white" textColor="royal-navy" sticky={true} />
        <MobileHeader menuInfo={menuInfo} bgColor="white" textColor="royal-navy" sticky={true} />
      </div>
    </>
  );
}
