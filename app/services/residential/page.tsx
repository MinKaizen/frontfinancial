import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "./hero-section"
import { ContactSection } from "@/components/service-template/contact-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { JsonldServiceResidential } from "@/components/jsonld-service-residential"

export const metadata: Metadata = {
  title: "Residential Lending",
  description:
    "From first to second mortgages, we structure the deal, secure the right lender, and manage every detail from start to finish.",
  alternates: { canonical: "/services/residential" },
  openGraph: {
    title: "Residential Lending | FRONT Financial",
    description:
      "From first to second mortgages, we structure the deal, secure the right lender, and manage every detail from start to finish.",
    url: "/services/residential",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-residential-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Lending | FRONT Financial",
    description:
      "From first to second mortgages, we structure the deal, secure the right lender, and manage every detail from start to finish.",
    images: ["/og-residential-min.png"],
  },
};

export default function Contact() {
  return (
    <div className="bg-white">
      <JsonldServiceResidential />
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <HeroSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
