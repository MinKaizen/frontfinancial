"use client"

import { Faq } from "./faq";
import { ArrowDown, ArrowRight, ArrowLeft } from "lucide-react";

type StepProps = {
  title: string,
  description: string,
}

const StepCard = (props: { step: StepProps }) => {
  return (
    <article className="grid justify-items-center bg-soft-navy w-full max-w-[180px] h-[200px] rounded-2xl py-5 px-5">
      <h3 className="text-sm text-white text-center">{props.step.title}</h3>
      <div className="text-sm text-white text-center" dangerouslySetInnerHTML={{ __html: props.step.description }}></div>
    </article>
  )
}

const LongArrowRight = ({ className }: { className?: string }) => {
  return (
    <svg width="32" height="6" viewBox="0 0 32 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M32 2.88675L27 -2.14577e-06V5.7735L32 2.88675ZM0 2.88675V3.38675H27.5V2.88675V2.38675H0V2.88675Z" fill="#B2AEA7" />
    </svg>
  );
};

const LongArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg width="7" height="32" viewBox="0 0 6 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2.88672 32L5.77347 27L-3.38436e-05 27L2.88672 32ZM2.88672 0L2.38672 -2.18557e-08L2.38672 27.5L2.88672 27.5L3.38672 27.5L3.38672 2.18557e-08L2.88672 0Z" fill="#B2AEA7" />
    </svg>
  );
};
const steps: StepProps[] = [
  {
    title: `Step 1`,
    description: `Fill out an enquiry form.`
  },
  {
    title: `Step 2`,
    description: `Introduction call & express forms.`
  },
  {
    title: `Step 3`,
    description: `Proposal & approval.`
  },
  {
    title: `Step 4`,
    description: `Discovery call.`
  },
]

export function FaqProcessSection() {
  return (
    <div className="bg-tan-light text-charcoal">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 py-8 lg:py-12 xl:py-18">
          <h2 className="mb-7 text-body">Frequently asked questions.</h2>
          <Faq />
        </div>
        <div className="w-full grid place-items-center px-4 py-14 bg-royal-navy">
          <div className="grid gap-1 md:gap-3 grid-cols-[1fr_auto_1fr] items-center content-center w-auto justify-center justify-items-center">
            <StepCard step={steps[0]} />
            <div>
              <LongArrowRight className="hidden md:block" />
              <ArrowRight className="md:hidden text-tan" />
            </div>
            <StepCard step={steps[1]} />
            <div></div>
            <div></div>
            <div>
              <LongArrowDown className="hidden md:block" />
              <ArrowDown className="md:hidden text-tan" />
            </div>
            <StepCard step={steps[3]} />
            <div>
              <LongArrowRight className="hidden md:block rotate-180" />
              <ArrowLeft className="md:hidden text-tan" />
            </div>
            <StepCard step={steps[2]} />
          </div>
        </div>
      </div>
    </div>
  )
}
