'use client';

import { useState } from 'react';
import Image from 'next/image';

// Define our sections
const HeroSection = () => (
  <section className="relative min-h-[600px] md:min-h-[800px] flex flex-col items-center justify-center px-4 py-12 md:py-24 text-center" id="hero">
    <div className="absolute inset-0 bg-[var(--color-royal-navy)] opacity-90 z-0"></div>
    <div className="relative z-10 max-w-5xl mx-auto">
      <Image
        src="/frontfinancial-logo-primary-white.svg"
        alt="Front Financial"
        width={220}
        height={50}
        className="mb-8 mx-auto"
      />
      <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase font-heading font-bold mb-8 tracking-wide leading-tight">
        When the ATO is knocking,<br />your property could be the solution
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Preserve your business and personal assets with our equity solution. 
        A dignified alternative to liquidation for company directors.
      </p>
      <a 
        href="#contact" 
        className="inline-block px-8 py-4 bg-[var(--color-tan)] text-[var(--color-royal-navy)] font-heading font-bold uppercase tracking-wider transition-all hover:bg-[var(--color-tan-light)]"
      >
        Learn More
      </a>
    </div>
  </section>
);

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Free Consultation",
      description: "We assess your situation and determine if our equity solution is right for you with a confidential, no-obligation discussion.",
      icon: "/file.svg"
    },
    {
      title: "Property Valuation",
      description: "We provide a fair market valuation of your property assets and explain how they can be leveraged to settle your tax debt.",
      icon: "/window.svg"
    },
    {
      title: "Solution Design",
      description: "Our experts create a tailored equity solution that protects your business operations while addressing ATO obligations.",
      icon: "/globe.svg"
    },
    {
      title: "Implementation",
      description: "We handle all negotiations with the ATO and implement the solution, allowing you to continue operating with confidence.",
      icon: "/file.svg"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[var(--color-charcoal)]" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-heading text-center mb-16 uppercase tracking-wide">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-[var(--color-royal-navy)]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[var(--color-tan)] rounded-full">
                <Image 
                  src={step.icon} 
                  alt={`Step ${index + 1}`} 
                  width={32} 
                  height={32}
                />
              </div>
              <h3 className="text-xl font-heading mb-3">{step.title}</h3>
              <p>{step.description}</p>
              <div className="text-[var(--color-tan)] mt-4 font-heading text-2xl">0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const comparisonData = [
    {
      aspect: "Business Continuity",
      equity: "Continue operating your business",
      liquidation: "Business operations cease entirely"
    },
    {
      aspect: "Personal Reputation",
      equity: "Maintain professional standing",
      liquidation: "Potential damage to business reputation"
    },
    {
      aspect: "Asset Protection",
      equity: "Preserve essential assets",
      liquidation: "Forced sale of all business assets"
    },
    {
      aspect: "Future Opportunities",
      equity: "Retain ability to rebuild and grow",
      liquidation: "Restricted business opportunities"
    },
    {
      aspect: "Staff & Suppliers",
      equity: "Maintain relationships",
      liquidation: "Immediate termination of all relationships"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4" id="comparison">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-heading text-center mb-6 uppercase tracking-wide">
          Why An Equity Solution Is The Better Option For Directors
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-16">
          Our approach helps you maintain dignity and control while addressing your tax obligations,
          unlike the devastating effects of liquidation.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-[var(--color-royal-navy)]"></th>
                <th className="text-left p-4 bg-[var(--color-tan)] text-[var(--color-royal-navy)] font-heading">Equity Solution</th>
                <th className="text-left p-4 bg-[var(--color-soft-navy)] font-heading">Liquidation</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-[var(--color-royal-navy)] bg-opacity-50" : ""}>
                  <td className="p-4 font-heading">{row.aspect}</td>
                  <td className="p-4 text-[var(--color-tan-light)]">{row.equity}</td>
                  <td className="p-4 text-[var(--color-off-white)]">{row.liquidation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The equity solution provided by Front Financial saved my business when I thought all was lost. I was able to settle my ATO debt and keep my company running.",
      author: "Michael T.",
      role: "Construction Company Director"
    },
    {
      quote: "The team guided me through the entire process with professionalism and care. Their solution allowed me to maintain my dignity while resolving a stressful tax situation.",
      author: "Sarah L.",
      role: "Retail Business Owner"
    },
    {
      quote: "When liquidation seemed like the only option, Front Financial showed me another way. Their equity solution was the lifeline my business needed.",
      author: "James R.",
      role: "Hospitality Group Director"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[var(--color-charcoal)]" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-heading text-center mb-16 uppercase tracking-wide">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-[var(--color-royal-navy)] flex flex-col">
              <div className="text-5xl text-[var(--color-tan)] mb-4">"</div>
              <p className="italic mb-6 flex-grow">{testimonial.quote}</p>
              <div>
                <p className="font-heading text-lg">{testimonial.author}</p>
                <p className="text-[var(--color-tan-light)]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How does the equity solution work?",
      answer: "Our equity solution allows company directors to leverage their property assets to settle ATO debts. We create a structured arrangement that satisfies tax obligations while allowing your business to continue operating."
    },
    {
      question: "Will I lose my property completely?",
      answer: "No. Our solutions are designed to utilize the equity in your property while preserving your ownership interests. The specific arrangement depends on your situation, but our goal is always to protect your assets as much as possible."
    },
    {
      question: "How long does the process take?",
      answer: "Typically, we can implement a solution within 4-6 weeks. However, this timeline can vary based on the complexity of your situation and the urgency of your ATO matters."
    },
    {
      question: "Can this work if I've already received ATO enforcement notices?",
      answer: "Yes. We specialize in helping directors who are facing imminent ATO action. The sooner you contact us, the more options we'll have available, but we can often assist even in advanced enforcement situations."
    },
    {
      question: "What types of tax debts can be addressed with this solution?",
      answer: "Our equity solutions can address various tax obligations including company tax, GST, PAYG withholding, and superannuation guarantee charges. We'll review your specific tax situation during our initial consultation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-heading text-center mb-16 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[var(--color-soft-navy)]">
              <button
                className="w-full text-left p-4 flex justify-between items-center font-heading"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className="text-[var(--color-tan)] text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`px-4 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // This would need to be updated to handle the additional fields
      const res = await fetch('/api/email-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('ok');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus('err');
      }
    } catch (error) {
      setStatus('err');
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[var(--color-charcoal)]" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-heading text-center mb-6 uppercase tracking-wide">
          Take The First Step Towards A Solution
        </h2>
        <p className="text-center mb-12">
          Complete the form below for a confidential, no-obligation consultation with our team.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-heading">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-[var(--color-royal-navy)] border border-[var(--color-soft-navy)] focus:border-[var(--color-tan)] outline-none transition-colors"
              aria-describedby={status === 'err' ? 'form-error' : undefined}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-heading">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[var(--color-royal-navy)] border border-[var(--color-soft-navy)] focus:border-[var(--color-tan)] outline-none transition-colors"
              aria-describedby={status === 'err' ? 'form-error' : undefined}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-2 font-heading">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-[var(--color-royal-navy)] border border-[var(--color-soft-navy)] focus:border-[var(--color-tan)] outline-none transition-colors"
              aria-describedby={status === 'err' ? 'form-error' : undefined}
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-[var(--color-tan)] text-[var(--color-royal-navy)] font-heading font-bold uppercase tracking-wider transition-all hover:bg-[var(--color-tan-light)] disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : 'Request Consultation'}
          </button>
          
          {status === 'ok' && (
            <p className="mt-4 text-center text-green-500" role="status">
              Thank you. We'll be in touch shortly to discuss your situation.
            </p>
          )}
          
          {status === 'err' && (
            <p id="form-error" className="mt-4 text-center text-red-500" role="alert">
              Sorry, something went wrong. Please try again or call us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 px-4 bg-[var(--color-royal-navy)] border-t border-[var(--color-soft-navy)]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <Image
          src="/frontfinancial-logo-script-tan.svg"
          alt="Front Financial"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </div>
      <div className="text-center md:text-right text-sm text-[var(--color-tan-light)]">
        <p>&copy; {new Date().getFullYear()} Front Financial. All rights reserved.</p>
        <p>Confidential and professional tax resolution services.</p>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
