import { HeroSection } from "@/components/home-page/hero-section";
import { AboutSection } from "@/components/home-page/about-section";
import { ServiceSection } from "@/components/home-page/service-section";
import { ServiceLogosSection } from "@/components/home-page/service-logos-section";
import { ContactSection } from "@/components/contact-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FooterSection } from "@/components/home-page/footer-section";

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
