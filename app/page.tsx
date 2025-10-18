import type { Metadata } from "next";
import { HeroSection } from "@/components/home-page/hero-section";
import { AboutSection } from "@/components/home-page/about-section";
import { ServiceSection } from "@/components/home-page/service-section";
import { ServiceLogosSection } from "@/components/home-page/service-logos-section";
import { ContactSection } from "@/components/contact-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FooterSection } from "@/components/footer-section";
import { JsonldHome } from "@/components/jsonld-home";

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
};

export default function Home() {
  return (
    <>
      <JsonldHome />
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
