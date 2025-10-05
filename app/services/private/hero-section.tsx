import Image from "next/image"

const service = {
  slug: "private",
  title: "Private Lending",
  subtitle: "We make it happen.",
  logoWidth: 154,
  features: [
    {
      title: "Full Flexibility",
      description: "Every deal is structured around your timeline, risk appetite and financial goals - designed to work for you, not the bank.",
    },
    {
      title: "Rapid Execution",
      description: "Time-sensitive deals demand speed. We fast-track approvals, cut the red tape and deliver funding when the opportunity is live- not after it's gone.",
    },
    {
      title: "Discreet Expertise",
      description: "Complex transactions require discretion and experience. We navigate challenges, structure smart solutions, and provide guidance you can trust - all in confidence",
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
            <div className="mt-7 lg:mt-[40px] xl:mt-[75px] text-[18px] leading-tight">
              <div className="max-w-[500px]">
                When the banks can't deliver, we do. Fast, flexible and direct - private lending is built for time-sensitive deals, complex scenarios and borrowers who need smart, tailored solutions.
              </div>
              <br />
              <div className="max-w-[500px]">
                No bureaucracy, no delays, just capital structured to get the job done, every time.
              </div>
            </div>
          </div>
          <div className="grid gap-5 text-[14px] leading-tight">
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
