import { ServiceCard } from "./service-card"
import { services } from "./services"

export function ServicesSection() {
  return (
    <>
      <div className="bg-white">
        <div className="px-5 py-8 lg:py-12 xl:py-18">
          <h2 className="text-body uppercase text-charcoal">Our Services For You</h2>

          <div className="grid items-stretch content-stretch md:grid-cols-2 xl:grid-cols-4 gap-7 mt-5">
            {services.map((service, index) => (
              <div key={index} className="h-full">
                <ServiceCard
                  backgroundImg={service.backgroundImg}
                  innerImg={service.innerImg}
                  width={service.width}
                  content={service.content}
                  alt={service.alt}
                />
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg: grid-cols-4">

          </div>
        </div>

      </div>
    </>
  )
}
