import EligibilityForm from "@/components/forms/eligibility-form";

export function ContactSection() {
  return (
    <div className="bg-tan-light">
      <div className="py-15 px-5">
        <div className="flex flex-col-reverse lg:grid md:grid-cols-[1fr_auto] content-center items-center gap-x-20">
          <div className="grid gap-15">
            <h2 className="uppercase text-base leading-snug">
              Contact us <br />
              Available Whenever you need us<br className="hidden sm:inline-block" />
              - 365 days a year, 366 days on leap years.
            </h2>
            <p className="lg:max-w-[32rem] text-lg italic leading-snug">
              We keep it simple: clear conversations, decisive action, lasting impact.
              Across residential, commercial, private, and business finance, we deliver tailored solutions that move you forward. With deep market expertise, trusted networks, and a sharp strategic lens, we cut through the complexity so you can focus on what matters most: results.
            </p>
            <EligibilityForm />
          </div>
          <div className="self-start w-full md:w-[1000px] md:max-w-[500px] mb-15 aspect-[3/2] lg:aspect-[10/11] relative overflow-hidden">
            <video className="absolute inset-0 w-full h-full object-cover" src="/metropolis-small.mp4" poster="/metropolis-small.avif" autoPlay loop muted playsInline />
          </div>
        </div>
      </div>
    </div>
  );
}
