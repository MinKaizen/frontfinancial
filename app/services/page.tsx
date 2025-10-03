import { ContactSection } from "@/components/contact-section"
import { ServicesSection } from "@/components/services-page/services-section"
import { FooterSection } from "@/components/footer-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FaqSection } from "@/components/faq-section"

export default function Contact() {
  return (
    <>
      <ContactSection />
      <ServicesSection />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </>
  );
}
