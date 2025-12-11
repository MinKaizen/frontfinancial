"use client"

import { ChevronDown } from 'lucide-react';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Faq = {
  question: string,
  answer: string,
}

const faqs: Faq[] = [
  {
    question: `What exactly is "using my property equity" to access funds?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna pellentesque, vehicula urna quis, imperdiet libero. Aenean maximus sem id tempor accumsan. Integer nec ligula laoreet, blandit leo et, fermentum turpis.`,
  },
  {
    question: `How do I know if I qualify?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna pellentesque, vehicula urna quis, imperdiet libero. Aenean maximus sem id tempor accumsan. Integer nec ligula laoreet, blandit leo et, fermentum turpis.`,
  },
  {
    question: `How fast can you get me approved?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna pellentesque, vehicula urna quis, imperdiet libero. Aenean maximus sem id tempor accumsan. Integer nec ligula laoreet, blandit leo et, fermentum turpis.`,
  },
  {
    question: `What other services do you provide?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna pellentesque, vehicula urna quis, imperdiet libero. Aenean maximus sem id tempor accumsan. Integer nec ligula laoreet, blandit leo et, fermentum turpis.`,
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
