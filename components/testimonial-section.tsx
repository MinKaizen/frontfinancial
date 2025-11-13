import TestimonialCarousel from "./testimonial-carousel";

export function TestimonialSection() {
  return (
    <div className="bg-tan text-white text-[18px]">
      <div className="py-24 md:min-h-[400px] lg:min-h-[520px] px-5 grid place-items-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-[1em]">They said it:</div>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}
