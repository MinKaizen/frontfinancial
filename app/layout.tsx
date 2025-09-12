import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HubspotTrackingScript } from "@/components/scripts/hubspot-tracking-script";
import Head from "next/head"
import { MetaPixel } from "@/components/scripts/meta-pixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Front Financial",
  description: "Sharp-minded, never-sleeping, tech-driven financial partners who make your money work as hard as we do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <MetaPixel />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <HubspotTrackingScript />
      </body>
    </html>
  );
}
