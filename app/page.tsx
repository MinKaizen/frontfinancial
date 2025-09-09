import Image from "next/image";
import { HeroSection } from "./hero-section";
import { ContactSection } from "./contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContactSection />
    </>
  );
}
