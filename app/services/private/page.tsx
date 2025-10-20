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
      "@id": "https://frontfinancial.com.au/services/private#webpage",
      "url": "https://frontfinancial.com.au/services/private",
      "name": "Private Lending - FRONT Financial",
      "description": "Learn about our private lending services designed for time-sensitive transactions and complex borrower scenarios, including flexible, tailored funding options in Australia.",
      "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
      "about": { "@id": "https://frontfinancial.com.au#org" },
      "inLanguage": "en-AU"
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/private#service",
      "serviceType": "Private Lending",
      "name": "Private Lending",
      "description": "Private lending solutions for Australian borrowers requiring fast, flexible funding for time-sensitive or complex scenarios, delivered by FRONT Financial.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "url": "https://frontfinancial.com.au/services/private"
    }
  ]
};

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
