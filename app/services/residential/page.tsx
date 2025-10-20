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
      "@id": "https://frontfinancial.com.au/services/residential#webpage",
      "url": "https://frontfinancial.com.au/services/residential",
      "name": "Residential Lending - FRONT Financial",
      "description": "Learn about our residential lending services, including first and second mortgages, lender selection, and end-to-end deal management for Australian borrowers.",
      "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
      "about": { "@id": "https://frontfinancial.com.au#org" },
      "inLanguage": "en-AU"
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/residential#service",
      "serviceType": "Residential Lending",
      "name": "Residential Lending",
      "description": "Residential lending solutions covering first and second mortgages, lender selection, and full deal management for Australian borrowers.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "url": "https://frontfinancial.com.au/services/residential"
    }
  ]
};

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
