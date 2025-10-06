import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "./hero-section"
import { ContactSection } from "@/components/service-template/contact-section"
import { FaqSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Private Lending",
  description:
    "When the banks can't deliver, we do. Fast, flexible and direct - private lending is built for time-sensitive deals, complex scenarios and borrowers who need smart, tailored solutions.",
  alternates: { canonical: "/services/private" },
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
