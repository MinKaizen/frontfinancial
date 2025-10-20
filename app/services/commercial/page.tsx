import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "./hero-section"
import { ContactSection } from "@/components/service-template/contact-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://frontfinancial.com.au#org",
      "name": "FRONT Financial",
      "url": "https://frontfinancial.com.au"
    },
    {
      "@type": "WebSite",
      "@id": "https://frontfinancial.com.au#website",
      "url": "https://frontfinancial.com.au",
      "name": "FRONT Financial"
    },
    {
      "@type": "WebPage",
      "@id": "https://frontfinancial.com.au/services/commercial#webpage",
      "url": "https://frontfinancial.com.au/services/commercial",
      "name": "Commercial Lending - FRONT Financial",
      "description": "We provide commercial lending solutions including development funding, second mortgages, and short-term secured finance for Australian businesses.",
      "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
      "about": { "@id": "https://frontfinancial.com.au#org" },
      "inLanguage": "en-AU"
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/commercial#service",
      "serviceType": "Commercial Lending",
      "name": "Commercial Lending",
      "description": "Tailored commercial lending: development funding, second mortgages, and short-term secured finance designed to meet timeline and security constraints.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "url": "https://frontfinancial.com.au/services/commercial"
    }
  ]
};

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
  other: {
    "script:ld+json": JSON.stringify(jsonLd),
  },
};

export default function Contact() {
  return (
    <div className="bg-white">
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <HeroSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
