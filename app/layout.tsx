import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HubspotTrackingScript } from "@/components/scripts/hubspot-tracking-script";
import { MetaPixel } from "@/components/scripts/meta-pixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MetaPixel />
        {children}
        <HubspotTrackingScript />
      </body>
    </html>
  );
}
