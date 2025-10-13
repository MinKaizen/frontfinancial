import Image from "next/image"

const service = {
  slug: "residential",
  title: "Residential Lending",
  subtitle: "We cut through the noise",
  logoWidth: 228,
  features: [
    {
      title: "Speed Without Compromise",
      description: "Timing is everything in property. We fast-track approvals, manage paperwork and liaise with lenders - all while keeping precision and accuracy at the forefront",
    },
    {
      title: "End-to-End Guidance",
      description: "From application to settlement, we're with you every step. We anticipate challenges, handle the heavy lifting and make sure your journey is seamless and stress-free",
    },
    {
      title: "Investments Done Right",
      description: "Smart property investment starts with smart financing. We tailor the deal to maximize borrowing power, minimise risk and position you for long-term growth",
    },
  ],
}

export function HeroSection() {
  return (
    <div className="bg-white text-royal-navy">
      <div className="grid lg:grid-cols-2 gap-10 px-5 py-15">
        {/* Left Col */}
        <div className="aspect-[2/1] lg:aspect-[91/92] w-full relative">
          <Image 
            className="object-center object-cover w-full h-full"
            src={`/service-${service.slug}.avif`}
            alt={service.title}
            width={ 910 }
            height={ 920 }
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
            <Image
              className="object-center object-cover max-w-[180px] lg:max-w-[50%]"
              alt={service.title}
              src={`/f-${service.slug}-white.svg`}
              width={service.logoWidth}
              height={60}
              priority
            />
          </div>
        </div>

        {/* Right Col */}
        <div className="grid self-stretch grid-rows-[1fr_auto] gap-10">
          <div >
            <h1 className="font-heading text-body leading-tight uppercase">{service.title}</h1>
            <div className="font-heading text-body leading-tight uppercase">{service.subtitle}</div>
            <div className="mt-7 lg:mt-[40px] xl:mt-[75px] text-[18px]">
              <div className="max-w-[550px]">
                From first to second mortgages, we structure the deal, secure the right lender, and manage every detail from start to finish.
              </div>
              You move in. We handle the rest.
              <br />
              Fast. Precise. Flawless
            </div>
          </div>
          <div className="grid gap-5 text-[14px]">
            {service.features.map((feature, index) => (
              <div key={index}>
                <div>{feature.title}</div>
                <div className="max-w-[550px]">{feature.description}</div>
                <hr className="mt-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
