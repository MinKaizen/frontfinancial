import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { ContactSection } from "@/components/contact-section"
import { ServicesSection } from "@/components/services-page/services-section"
import { FooterSection } from "@/components/footer-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FaqSection } from "@/components/faq-section"
import { JsonldServices } from "@/components/jsonld-services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore residential, commercial, business, and private finance solutions tailored to your needs.",
  alternates: { canonical: "/services" },
};

export default function Contact() {
  return (
    <>
      <JsonldServices />
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
