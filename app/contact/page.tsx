import { StickyHeader } from "@/components/sticky-header"
import { ContactSection } from "@/components/contact-page/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function Contact() {
  return (
    <>
      <StickyHeader bgColor="soft-navy" textColor="white"></StickyHeader>
      <ContactSection />
      <FooterSection />
    </>
  );
}
