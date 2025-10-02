import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-page/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function Contact() {
  return (
    <>
      <div className="bg-soft-navy">
        <Header />
      </div>
      <ContactSection />
      <FooterSection />
    </>
  );
}
