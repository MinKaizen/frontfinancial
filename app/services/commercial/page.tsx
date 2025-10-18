import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "./hero-section"
import { ContactSection } from "@/components/service-template/contact-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { JsonldServiceCommercial } from "@/components/jsonld-service-commercial"

export const metadata: Metadata = {
  title: "Commercial Lending",
  description:
    "From development funding to second mortgages and short-term secured finance, we create commercial loans that actually work. Complext projects, tight deadlines, high stakes. We handle it all so you can focus on growth and execution.",
  alternates: { canonical: "/services/commercial" },
  openGraph: {
    title: "Commercial Lending | FRONT Financial",
    description:
      "From development funding to second mortgages and short-term secured finance, we create commercial loans that actually work. Complext projects, tight deadlines, high stakes. We handle it all so you can focus on growth and execution.",
    url: "/services/commercial",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-commercial-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Lending | FRONT Financial",
    description:
      "From development funding to second mortgages and short-term secured finance, we create commercial loans that actually work. Complext projects, tight deadlines, high stakes. We handle it all so you can focus on growth and execution.",
    images: ["/og-commercial-min.png"],
  },
};

export default function Contact() {
  return (
    <div className="bg-white">
      <JsonldServiceCommercial />
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <HeroSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
