import Image from "next/image"

type ProcessCardProps = {
  img: string,
  title: string,
  description: string,
}
const ProcessCard = ({img, title, description}: ProcessCardProps) => {
  return (
    <article>
      <Image
        className="object-center object-cover"
        src={img}
        alt={title}
        width={360}
        height={372}
      />
      <h3 className="!font-body text-body mt-4">{title}</h3>
      <p className="font-body text-body mt-[1.5em]">{description}</p>
    </article>
  )
}

export function ProcessSection() {
  return (
    <div className="bg-off-white text-royal-navy">
      <div className="px-5 py-20">
        <h2 className="text-body font-heading">Our process</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          <ProcessCard
            img="/process1.avif"
            title="One. Consultation & Understanding"
            description="We define your goals with precision: focused, actionable, and designed to deliver."
          />
          <ProcessCard
            img="/process2.avif"
            title="Two. Research & Analysis"
            description="We do all the due diligence on your situation, analyse it from multiple angles, review our internal funding structures, and uncover the smartest opportunities available."
          />
          <ProcessCard
            img="/process3.avif"
            title="Three. Presenting Options."
            description="Only the best options. Expertly selected. Positioned for maximum advantage."
          />
          <ProcessCard
            img="/process4.avif"
            title="Four. Execution & Settlement."
            description="Applications, approvals, and settlement handled flawlessly. Every detail managed to perfection."
          />
          <ProcessCard
            img="/process5.avif"
            title="Five. Post-Settlement Support."
            description="Our commitment extends beyond settlement. We provide ongoing insight and strategy to protect and grow your position."
          />
        </div>
      </div>
    </div>
  )
}
