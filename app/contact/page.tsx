import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header"
import { ContactSection } from "@/components/contact-page/contact-section"
import { FooterSection } from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch for a confidential, no-obligation consultation with our finance team.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <StickyHeader bgColor="soft-navy" textColor="white"></StickyHeader>
      <ContactSection />
      <FooterSection />
    </>
  );
}
