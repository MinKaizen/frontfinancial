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
      "@id": "https://frontfinancial.com.au/services/business#webpage",
      "url": "https://frontfinancial.com.au/services/business",
      "name": "Business Finance - FRONT Financial",
      "description": "Learn about our business finance services, including growth funding, equipment finance, and cash flow support tailored for Australian businesses",
      "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
      "about": { "@id": "https://frontfinancial.com.au#org" },
      "inLanguage": "en-AU"
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/business#service",
      "serviceType": "Business Finance",
      "name": "Business Finance",
      "description": "We provide tailored business finance solutions including growth funding, equipment finance, and cash flow support for Australian companies.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "url": "https://frontfinancial.com.au/services/business"
    }
  ]
};

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
