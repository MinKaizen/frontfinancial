import { ServiceCard } from "./service-card"

export function ServicesSection() {
  return (
    <div className="bg-white text-charcoal px-5 py-12 lg:py-25">
      <h2 className="text-body uppercase">At your service</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-8 mt-5">
        <ServiceCard
          backgroundImg="/residential-service-card.avif"
          innerImg="/f-residential-white.svg"
          width={228}
          url="/services/residential"
          alt="Residential"
        />
        <ServiceCard
          backgroundImg="/commercial-service-card.avif"
          innerImg="/f-commercial-white.svg"
          width={224}
          url="/services/commercial"
          alt="Commercial"
        />
        <ServiceCard
          backgroundImg="/business-service-card.avif"
          innerImg="/f-business-white.svg"
          width={183}
          url="/services/business"
          alt="Business"
        />
        <ServiceCard
          backgroundImg="/private-service-card.avif"
          innerImg="/f-private-white.svg"
          width={154}
          url="/services/private"
          alt="Private"
        />
      </div>
    </div>
  )
}
