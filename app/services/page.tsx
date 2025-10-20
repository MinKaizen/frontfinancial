import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { ContactSection } from "@/components/contact-section"
import { ServicesSection } from "@/components/services-page/services-section"
import { FooterSection } from "@/components/footer-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FaqSection } from "@/components/faq-section"

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
      "@type": ["WebPage", "CollectionPage"],
      "@id": "https://frontfinancial.com.au/services#webpage",
      "url": "https://frontfinancial.com.au/services",
      "name": "Services - FRONT Financial",
      "description": "Explore residential, commercial, business, and private finance solutions tailored to your needs.",
      "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
      "about": { "@id": "https://frontfinancial.com.au#org" },
      "mainEntity": { "@id": "https://frontfinancial.com.au/services#itemlist" },
      "inLanguage": "en-AU"
    },
    {
      "@type": "ItemList",
      "@id": "https://frontfinancial.com.au/services#itemlist",
      "name": "FRONT Financial Services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": { "@id": "https://frontfinancial.com.au/services/residential#service" }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": { "@id": "https://frontfinancial.com.au/services/commercial#service" }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": { "@id": "https://frontfinancial.com.au/services/business#service" }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": { "@id": "https://frontfinancial.com.au/services/private#service" }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/residential#service",
      "serviceType": "Residential Lending",
      "name": "Residential Lending",
      "description": "First and second mortgages, lender selection, and end-to-end deal management for Australian borrowers.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": { "@type": "Country", "name": "Australia" },
      "url": "https://frontfinancial.com.au/services/residential"
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/commercial#service",
      "serviceType": "Commercial Lending",
      "name": "Commercial Lending",
      "description": "Development funding, second mortgages, and short-term secured finance for Australian businesses.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": { "@type": "Country", "name": "Australia" },
      "url": "https://frontfinancial.com.au/services/commercial"
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/business#service",
      "serviceType": "Business Finance",
      "name": "Business Finance",
      "description": "Growth funding, equipment finance, and cash flow support tailored to Australian companies.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": { "@type": "Country", "name": "Australia" },
      "url": "https://frontfinancial.com.au/services/business"
    },
    {
      "@type": "Service",
      "@id": "https://frontfinancial.com.au/services/private#service",
      "serviceType": "Private Lending",
      "name": "Private Lending",
      "description": "Fast, flexible private lending for time-sensitive or complex scenarios in Australia.",
      "provider": { "@id": "https://frontfinancial.com.au#org" },
      "areaServed": { "@type": "Country", "name": "Australia" },
      "url": "https://frontfinancial.com.au/services/private"
    }
  ]
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore residential, commercial, business, and private finance solutions tailored to your needs.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | FRONT Financial",
    description:
      "Explore residential, commercial, business, and private finance solutions tailored to your needs.",
    url: "/services",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-services-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | FRONT Financial",
    description:
      "Explore residential, commercial, business, and private finance solutions tailored to your needs.",
    images: ["/og-services-min.png"],
  },
  other: {
    "script:ld+json": JSON.stringify(jsonLd),
  },
};

export default function Contact() {
  return (
    <>
      <div className="relative">
        <div className="bg-transparent absolute top-0 left-0 w-full z-10">
          <StickyHeader bgColor="transparent" textColor="white"/>
        </div>
        <ContactSection />
      </div>
      <ServicesSection />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </>
  );
}
