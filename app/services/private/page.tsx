import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "./hero-section"
import { ContactSection } from "@/components/service-template/contact-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { JsonldServicePrivate } from "@/components/jsonld-service-private"

export const metadata: Metadata = {
  title: "Private Lending",
  description:
    "When the banks can't deliver, we do. Fast, flexible and direct - private lending is built for time-sensitive deals, complex scenarios and borrowers who need smart, tailored solutions.",
  alternates: { canonical: "/services/private" },
  openGraph: {
    title: "Private Lending | FRONT Financial",
    description:
      "When the banks can't deliver, we do. Fast, flexible and direct - private lending is built for time-sensitive deals, complex scenarios and borrowers who need smart, tailored solutions.",
    url: "/services/private",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-private-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Lending | FRONT Financial",
    description:
      "When the banks can't deliver, we do. Fast, flexible and direct - private lending is built for time-sensitive deals, complex scenarios and borrowers who need smart, tailored solutions.",
    images: ["/og-private-min.png"],
  },
};

export default function Contact() {
  return (
    <div className="bg-white">
      <JsonldServicePrivate />
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <HeroSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
