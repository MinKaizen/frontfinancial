import { Header } from "@/components/header"
import { HeroSection } from "@/components/about-page/hero-section"
import { AboutSection } from "@/components/about-page/about-section"
import { FooterSection } from "@/components/footer-section"

export default function Contact() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
