import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/about-page/hero-section"
import { AboutSection } from "@/components/about-page/about-section"
import { ProcessSection } from "@/components/about-page/process-section"
import { TeamSection } from "@/components/about-page/team-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function Contact() {
  return (
    <div className="bg-white">
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      <FaqSection bgColor="tan-light"/>
      <FooterSection />
    </div>
  );
}
