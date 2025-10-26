import type { Metadata } from "next";
import "./globals.css";
import { HubspotTrackingScript } from "@/components/scripts/hubspot-tracking-script";
import { MetaPixel } from "@/components/scripts/meta-pixel";
import localFont from "next/font/local";
import IntercomFin from "@/components/intercom-fin";

const kento = localFont({
  src: [
    { path: "../public/fonts/kento-light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/kento-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/kento-bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: true,
  variable: "--font-kento",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://frontfinancial.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FRONT Financial",
    template: "%s | FRONT Financial",
  },
  description:
    "Sharp-minded, never-sleeping, tech-driven financial partners who make your money work as hard as we do.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FRONT Financial",
    description:
      "Sharp-minded, never-sleeping, tech-driven financial partners who make your money work as hard as we do.",
    url: "/",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-home-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRONT Financial",
    description:
      "Sharp-minded, never-sleeping, tech-driven financial partners who make your money work as hard as we do.",
    images: ["/og-home-min.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kento.variable}>
      <body className="antialiased">
        <MetaPixel />
        {children}
        <HubspotTrackingScript />
        <IntercomFin></IntercomFin>
      </body>
    </html>
  );
}
