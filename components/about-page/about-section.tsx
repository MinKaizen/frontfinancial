import Image from "next/image"

export function AboutSection() {
  return (
    <div className="bg-white text-charcoal">
      <div className="px-5 grid lg:grid-cols-2 py-10 gap-20 justify-center justify-items-center max-w-[1400px] mx-auto">
        <div className="py-10 grid gap-7 lg:grid-rows-[150px_150px_auto]">
          <div className="">
            <h2 className="font-heading text-body leading-tight">Less hassle, more hustle</h2>
            <p className="font-heading text-body leading-tight">Let us do the work of making your money work.</p>
          </div>

          <p>
            Whether it's investments, retirement planning, or wealth management, our mission is simple: make your money work harder, make your life easier, and make sure the value you get from us far outweighs what you pay.
          </p>

          <Image 
            className="w-full h-auto aspect-[2/1] lg:aspect-auto object-center object-cover"
            src="/harbour-bridge-low-angle.avif"
            alt="Harbour Bridge"
            width={ 800 }
            height={ 600 }
          />
        </div>

        <div className="w-full hidden lg:block aspect-[10/11] overflow-hidden relative">
          <video className="absolute inset-0 w-full h-full object-cover" src="/metropolis-large.mp4" poster="/metropolis-large.avif" autoPlay loop muted playsInline />
        </div>
      </div>
    </div>
  )
}
