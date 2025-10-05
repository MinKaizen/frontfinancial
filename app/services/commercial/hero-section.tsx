import Image from "next/image"

const service = {
  title: "Commercial Lending",
  slug: "commercial",
  logoWidth: 224,
  features: [
    {
      title: "Smarter Structures",
      description: "We engineer finance solutions that support growth - not hold it back.",
    },
    {
      title: "Scalable Deals",
      description: "From small balance loans to multi-million-dollar projects, we build structures that scale with you.",
    },
    {
      title: "Full Oversight",
      description: "We handle negotiations, complianc and execution - you stay focused on the business.",
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
          />
          <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
            <Image
              className="object-center object-cover max-w-[180px] lg:max-w-[50%]"
              alt={service.title}
              src={`/f-${service.slug}-white.svg`}
              width={service.logoWidth}
              height={60}
            />
          </div>
        </div>

        {/* Right Col */}
        <div className="grid self-stretch grid-rows-[1fr_auto] gap-10">
          <div >
            <h1 className="font-heading text-body leading-tight uppercase">{service.title}</h1>
            <div className="font-heading text-body leading-tight uppercase">We cut through the noise</div>
            <div className="mt-7 lg:mt-[40px] xl:mt-[75px] text-[18px]">
              Bid deals demand smart structures - and we deliver.
              <div className="max-w-[515px]">
                From development funding to second mortgages and short-term secured finance, we create commercial loans that actually work. Complext projects, tight deadlines, high stakes. We handle it all so you can focus on growth and execution.
              </div>
              Fast, precise and results-driven
            </div>
          </div>
          <div className="grid gap-5 text-[14px]">
            {service.features.map((feature, index) => (
              <div key={index}>
                <div>{feature.title}</div>
                <div>{feature.description}</div>
                <hr className="mt-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
