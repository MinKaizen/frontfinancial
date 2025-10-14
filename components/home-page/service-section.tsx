import Image from "next/image";
import Link from "next/link";

export function ServiceSection() {
  return (
    <div className="bg-white text-royal-navy pb-[30px] lg:pb-[45px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="hidden lg:grid grid-cols-2 gap-5 pt-[85px] pb-[45px]">
          <div></div>
          <div className="uppercase text-[15px] font-bold font-heading">At Your Service</div>
        </div>
        <div className="grid lg:grid-cols-2">
          <Image
            className="w-full aspect-[448/414] max-w-[448px] justify-self-end hidden lg:block"
            src="/buildings.avif"
            alt="Sydney Opera House"
            width={450}
            height={414}
            loading="lazy"
          />
          <div className="px-5 pt-[80px] lg:pt-0 pb-[45px]">
            <h2 className="uppercase text-[15px] font-bold lg:hidden">At Your Service</h2>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-5">
              <div className="hidden lg:block self-start aspect-[10/11] w-[250px] xl:w-[250px] relative overflow-hidden">
                <video className="absolute inset-0 w-full h-full object-cover" src="/metropolis-small.mp4" poster="/metropolis.avif" autoPlay loop muted playsInline />
              </div>
              <div>
                <p className="uppercase text-[15px] font-heading font-light mt-[45px] lg:mt-0">From first mortgages to second mortgages, from business loans to refinancing — we’re here to support your financial strategy. Discreet, sharp, and outcome-driven.  Not your everyday broker, but the ones putting in the work every day.</p>
                <Link href="/services" className="block w-max relative cursor-pointer mt-[45px] lg:mt-5 xl:mt-[45px]">
                  <div className="pr-3 text-[14px]">Services</div>
                  <div
                    className="arrow absolute left-0 bottom-3"
                    style={{
                      ["--len" as any]: "100%",
                      ["--thick" as any]: "1px",
                      ["--head" as any]: "4px",
                      color: "#333",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[11fr_9fr] gap-5 w-full lg:hidden">
            <Image
              className="w-full aspect-[300/414]"
              src="/buildings.avif"
              alt="Sydney Opera House"
              width={930}
              height={581}
              loading="lazy"
            />
            <div className="aspect-[10/11] w-full overflow-hidden relative">
              <video className="absolute inset-0 w-full h-full object-cover" src="/metropolis-small.mp4" poster="/metropolis.avif" autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
