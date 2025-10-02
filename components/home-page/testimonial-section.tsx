import TestimonialCarousel from "./testimonial-carousel";

export function TestimonialSection() {
  return (
    <div className="bg-tan-light text-charcoal text-[18px]">
      <div className="py-20 md:py-30 lg:py-48 px-5">
        <div className="max-w-[480px] mx-auto">
          <div className="text-center mb-[1em]">They said it:</div>
          <TestimonialCarousel

          />
        </div>
      </div>
    </div>
  );
}
