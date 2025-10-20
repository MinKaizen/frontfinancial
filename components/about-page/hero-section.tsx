import Image from "next/image"

export function HeroSection() {
  return (
    <div className="h-[400px] md:h-[435px] bg-center bg-cover text-white relative">
      <Image 
        className="object-center object-cover w-full h-full"
        src={"/sydney-sunset.avif"}
        alt=""
        sizes="100vw"
        quality={75}
        width={1920}
        height={577}
        priority
        fetchPriority="high"
        loading="eager"
      />
      <div className="grid place-items-center absolute w-full h-full left-0 top-0 px-5">
        <div>
          <h1 className="text-center text-body leading-tight">We're front-facing</h1>
          <p className="text-center text-body leading-tight font-heading">Ready to tell you when your finances are going well... <br className="hidden sm:block" />or very well.</p>
        </div>
      </div>
    </div>
  )
}
