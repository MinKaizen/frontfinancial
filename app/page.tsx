import type { Metadata } from "next";
import { HeroSection } from "@/components/home-page/hero-section";
import { AboutSection } from "@/components/home-page/about-section";
import { ServiceSection } from "@/components/home-page/service-section";
import { ServiceLogosSection } from "@/components/home-page/service-logos-section";
import { ContactSection } from "@/components/contact-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FooterSection } from "@/components/footer-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://frontfinancial.com.au#org",
      "name": "FRONT Financial",
      "url": "https://frontfinancial.com.au",
      "logo": "https://frontfinancial.com.au/frontfinancial-logo-primary-royal-navy.svg",
      "sameAs": [
        "https://www.linkedin.com/company/front-financial",
        "https://www.instagram.com/frontfinancial.au/",
        "https://www.facebook.com/share/i2NiRH9ZcRf7fPAY/?mibextid=LQQJ4d"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://frontfinancial.com.au#website",
      "url": "https://frontfinancial.com.au",
      "name": "FRONT Financial",
      "publisher": { "@id": "https://frontfinancial.com.au#org" },
      "inLanguage": "en-AU"
    },
    {
      "@type": "WebPage",
      "@id": "https://frontfinancial.com.au/#webpage",
      "url": "https://frontfinancial.com.au/",
      "name": "FRONT Financial",
      "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
      "about": { "@id": "https://frontfinancial.com.au#org" },
      "inLanguage": "en-AU"
    }
  ]
};

export const metadata: Metadata = {
  description:
    "Sharp minded, performance focused, tech driven financial partners",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FRONT Financial",
    description:
      "Sharp minded, performance focused, tech driven financial partners",
    url: "/",
    siteName: "FRONT Financial",
    type: "website",
    images: [
      {
        url: "/og-home-min.png",
        width: 1200,
        height: 630,
        alt: "FRONT Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRONT Financial",
    description:
      "Sharp minded, performance focused, tech driven financial partners",
    images: ["/og-home-min.png"],
  },
  other: {
    "script:ld+json": JSON.stringify(jsonLd),
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ServiceLogosSection />
      <ContactSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}
