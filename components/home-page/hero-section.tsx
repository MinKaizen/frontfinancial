import Image from "next/image";
import { Header } from "@/components/header";

export function HeroSection() {
  return (
    <div className="grid justify-items-center py-15 px-10 relative min-h-[100vh] place-items-center bg-[url('/home-hero-image.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute left-0 top-0 w-full">
        <Header></Header>
      </div>
      <p className="uppercase text-sm md:text-base lg:text-lg font-heading text-center">sharp-minded, never-sleeping, tech-driven financial partners</p>
    </div>
  );
}
