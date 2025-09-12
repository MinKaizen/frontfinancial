"use client";
import { useEffect } from "react";

type Fbq = {
  (...args: any[]): void;
  callMethod?: (...args: any[]) => void;
  push?: (...args: any[]) => void;
  loaded?: boolean;
  version?: string;
  queue?: any[];
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    if (typeof window === "undefined" || !pixelId) return;
    if (window.fbq) {
      // already loaded
      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
      return;
    }

    // create a minimal fbq shim (typed) before script loads
    const fbq: Fbq = function (...args: any[]) {
      (fbq.callMethod ? fbq.callMethod(...args) : (fbq.queue ||= []).push(args));
    } as Fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  }, [pixelId]);

  // noscript fallback
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${pixelId ?? ""}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}

