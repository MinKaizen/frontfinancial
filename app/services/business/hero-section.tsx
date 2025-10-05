import Image from "next/image"

const service = {
  slug: "business",
  title: "Business Finance",
  subtitle: "We fuel growth.",
  logoWidth: 183,
  features: [
    {
      title: "Capital for Growth",
      description: "Funding designed for momentum - so your business doesn't just move. it rises.",
    },
    {
      title: "Custom Fit",
      description: "Finance designed to match your operations and strategy - never off-the-shelf.",
    },
    {
      title: "Quick Turnaround",
      description: "Speed and precision that keep you ahead - because opportunities don't wait around.",
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
            <div className="font-heading text-body leading-tight uppercase">{service.subtitle}</div>
            <div className="mt-7 lg:mt-[40px] xl:mt-[75px] text-[18px]">
              Capital is the fuel - and we're the engine.
              <div className="max-w-[515px]">
                Whether you need growth funding, equipment finance, cash flow support, or to seize a strategic opportunity, we deliver fast, tailored solutions that get results
              </div>
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
