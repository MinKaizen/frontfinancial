import type { Metadata } from "next";
import { HeroSection } from "@/components/home-page/hero-section";
import { AboutSection } from "@/components/home-page/about-section";
import { ServiceSection } from "@/components/home-page/service-section";
import { ServiceLogosSection } from "@/components/home-page/service-logos-section";
import { ContactSection } from "@/components/contact-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FooterSection } from "@/components/footer-section";

export const metadata: Metadata = {
  description:
    "Sharp minded, performance focused, tech driven financial partners",
  alternates: { canonical: "/" },
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
