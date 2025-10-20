import Image from "next/image"
import type { Service } from "@/types/service-template/Service";

export function HeroImage({service}: {service: Service}) {
  return (
    <div className="aspect-[91/92] w-full relative">
      <Image 
        className="object-center object-cover w-full h-full"
        src={`/service-${service.slug}.avif`}
        alt={service.title}
        sizes="(max-width: 640px) 600px, 50vw"
        width={ 910 }
        height={ 920 }
        quality={75}
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
        <Image
          className="object-center object-cover max-w-[180px] sm:max-w-[50%]"
          alt={service.title}
          src={`/f-${service.slug}-white.svg`}
          width={service.logoWidth}
          height={60}
        />
      </div>
    </div>
  );
}
