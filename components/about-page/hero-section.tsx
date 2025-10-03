export function HeroSection() {
  const style = {
    backgroundImage: `url("/sydney-sunset.avif")`
  }

  return (
    <div style={style} className="bg-center bg-cover text-white">
      <div className="h-[400px] md:h-[435px] grid place-items-center">
        <div>
          <h1 className="text-center text-body leading-tight">We're front-facing</h1>
          <p className="text-center text-body leading-tight font-heading">Ready to tell you when your finances are going well... <br className="hidden sm:block" />or very well.</p>
        </div>
      </div>
    </div>
  )
}
