"use client"

import { ChevronDown } from 'lucide-react';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Faq = {
  question: string,
  answer: React.ReactNode,
}

const faqs: Faq[] = [
  {
    question: `What exactly is "using my property equity" to access funds?`,
    answer: <p>It means unlocking the available equity in your home, investment property, or land to raise capital - without needing full tax returns or traditional bank paperwork. We use your property as security, allowing you to access funds quickly for things like ATO debt, cash flow, consolidating liabilities, or supporting your business.</p>,
  },
  {
    question: `How do I know if I qualify?`,
    answer: <>
      <p>You likely qualify if you:</p>
      <ul className="list-disc list-inside space-y-1 my-2">
        <li>Own real estate with usable equity</li>
        <li>Are self-employed or run a small business</li>
        <li>Have been declined by a bank</li>
        <li>Need quick access to funds for ATO, cash flow, or restructuring</li>
      </ul>
      <p>Our only firm deal-breaker: no property security = no approval. If you own property, we can usually structure a solution.</p>
    </>,
  },
  {
    question: `How fast can you get me approved?`,
    answer: <p>Once we receive your documents, we can typically provide an outcome within days. Most clients move from first enquiry to settlement within 2–4 weeks, depending on complexity and document turnaround. Speed and certainty are our top priorities.</p>,
  },
  {
    question: `What other services do you provide?`,
    answer: <>
      <p>Alongside property equity lending, we help clients with:</p>
      <ul className="list-disc list-inside space-y-1 my-2">
        <li>ATO debt solutions</li>
        <li>Business debt consolidation</li>
        <li>Short-term bridging loans</li>
        <li>Cash flow support</li>
        <li>Business restructuring and advisory</li>
        <li>Preparing for refinance once your position improves</li>
      </ul>
      <p>Please reach out and we'll be able to see if we can help you</p>
    </>
  },
]


export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="max-w-md">
      {faqs.map((faq, index) => (
        <div key={index} className="">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full py-4 border-b border-black grid grid-cols-[1fr_auto] justify-between gap-x-4 cursor-pointer text-left"
          >
            <div>{index + 1}. {faq.question}</div>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="text-charcoal" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="py-4 text-neutral-700">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      ))}
    </div>
  )
}
