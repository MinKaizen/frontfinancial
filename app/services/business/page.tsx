import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "./hero-section"
import { ContactSection } from "@/components/service-template/contact-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { JsonldServiceBusiness } from "@/components/jsonld-service-business"

export const metadata: Metadata = {
  title: "Business Finance",
  description:
    "Whether you need growth funding, equipment finance, cash flow support, or to seize a strategic opportunity, we deliver fast, tailored solutions that get results",
  alternates: { canonical: "/services/business" },
  openGraph: {
    title: "Business Finance | FRONT Financial",
    description:
      "Whether you need growth funding, equipment finance, cash flow support, or to seize a strategic opportunity, we deliver fast, tailored solutions that get results",
    url: "/services/business",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-business-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Finance | FRONT Financial",
    description:
      "Whether you need growth funding, equipment finance, cash flow support, or to seize a strategic opportunity, we deliver fast, tailored solutions that get results",
    images: ["/og-business-min.png"],
  },
};

export default function Contact() {
  return (
    <div className="bg-white">
      <JsonldServiceBusiness />
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <HeroSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
