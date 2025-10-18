import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/about-page/hero-section"
import { AboutSection } from "@/components/about-page/about-section"
import { ProcessSection } from "@/components/about-page/process-section"
import { TeamSection } from "@/components/about-page/team-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about FRONT Financial’s mission, approach, and team delivering tech-driven finance outcomes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | FRONT Financial",
    description:
      "Learn about FRONT Financial’s mission, approach, and team delivering tech-driven finance outcomes.",
    url: "/about",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-about-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | FRONT Financial",
    description:
      "Learn about FRONT Financial’s mission, approach, and team delivering tech-driven finance outcomes.",
    images: ["/og-about-min.png"],
  },
};

export default function Contact() {
  return (
    <div className="bg-white">
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      <FaqSection bgColor="tan-light"/>
      <FooterSection />
    </div>
  );
}
