'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return { ref, isInView };
};

// Hero Section with parallax effect and animated elements
const HeroSection = () => {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  
  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 py-12 overflow-hidden" 
      id="hero"
    >
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/metropolis.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a38cc] to-[#3f404fee]"></div>
      </div>
      
      {/* Floating elements */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-[var(--color-tan)] opacity-10 top-1/4 left-1/4 animate-pulse"
        style={{ animationDuration: '7s' }}
      />
      
      <div 
        className="absolute w-24 h-24 rounded-full bg-[var(--color-soft-navy)] opacity-10 bottom-1/4 right-1/3 animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div
          className={`flex flex-col items-center text-center transition-opacity duration-1000 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="mb-8 mx-auto">
            <Image
              src="/frontfinancial-logo-primary-white.svg"
              alt="Front Financial"
              width={220}
              height={50}
              className="mb-8 mx-auto"
            />
          </div>
          
          <h1 
            className={`text-3xl md:text-5xl lg:text-7xl uppercase font-heading font-bold mb-8 tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--color-tan-light)] transition-all duration-700 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            When the ATO is knocking,<br />your property could be the solution
          </h1>
          
          <p 
            className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[var(--color-off-white)] transition-all duration-700 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Preserve your business and personal assets with our equity solution. 
            A dignified alternative to liquidation for company directors.
          </p>
          
          <div
            className={`relative hover:scale-105 active:scale-95 transition-all duration-300 ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <a 
              href="#contact" 
              className="inline-block px-10 py-5 bg-gradient-to-r from-[var(--color-tan)] to-[var(--color-tan-light)] text-[var(--color-royal-navy)] font-heading font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all"
            >
              Get Started
            </a>
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-tan)] to-[var(--color-tan-light)] rounded-lg blur opacity-30 -z-10 group-hover:opacity-50 transition-all"></div>
          </div>
          
          <div
            className="absolute bottom-10 animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            <a href="#how-it-works" className="flex flex-col items-center">
              <span className="text-sm text-[var(--color-tan-light)] mb-2">Scroll to learn more</span>
              <span className="text-[var(--color-tan)] text-2xl">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// How it Works Section with interactive cards
const HowItWorksSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  const [activeStep, setActiveStep] = useState(0);
  
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
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 px-4 bg-[var(--color-charcoal)]" 
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 
            className="text-3xl md:text-5xl font-heading text-center mb-16 uppercase tracking-wide"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-tan)] to-[var(--color-tan-light)]">
              How It Works
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps navigation */}
            <div className={`order-2 lg:order-1 transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all hover:scale-102 active:scale-98 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r from-[var(--color-royal-navy)] to-[#2a2a38] shadow-lg border-l-4 border-[var(--color-tan)]' 
                        : 'bg-[#2a2a38] hover:bg-[#323244]'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        activeStep === index ? 'bg-[var(--color-tan)]' : 'bg-[var(--color-soft-navy)]'
                      }`}>
                        <span className="font-heading font-bold text-[var(--color-royal-navy)]">0{index + 1}</span>
                      </div>
                      <h3 className={`font-heading text-xl transition-colors ${
                        activeStep === index ? 'text-white' : 'text-[var(--color-tan-light)]'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step details */}
            <div className={`order-1 lg:order-2 transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-[var(--color-royal-navy)] p-8 rounded-2xl shadow-2xl h-full">
                <div
                  key={activeStep}
                  className="flex flex-col items-center text-center h-full transition-opacity duration-300"
                >
                  <div className="w-20 h-20 mb-6 flex items-center justify-center bg-[var(--color-tan)] rounded-full">
                    <Image 
                      src={steps[activeStep].icon} 
                      alt={steps[activeStep].title} 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-2xl font-heading mb-4">{steps[activeStep].title}</h3>
                  <p className="text-[var(--color-off-white)] text-lg">{steps[activeStep].description}</p>
                  
                  <div className="mt-auto pt-8 flex space-x-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeStep === index ? 'bg-[var(--color-tan)] w-6' : 'bg-[var(--color-soft-navy)]'
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Comparison Section with animated cards
const ComparisonSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  
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
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 px-4 relative overflow-hidden" 
      id="comparison"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-[#3f404f20] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 
            className="text-3xl md:text-5xl font-heading text-center mb-6 uppercase tracking-wide"
          >
            Why An Equity Solution Is The <span className="text-[var(--color-tan)]">Better Option</span>
          </h2>
          
          <p 
            className="text-center max-w-3xl mx-auto mb-20 text-lg"
          >
            Our approach helps you maintain dignity and control while addressing your tax obligations,
            unlike the devastating effects of liquidation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div 
              className={`bg-gradient-to-br from-[var(--color-tan)] to-[var(--color-tan-light)] p-1 rounded-xl shadow-xl transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="bg-[var(--color-royal-navy)] p-8 rounded-lg h-full">
                <h3 className="text-2xl font-heading mb-6 text-center text-[var(--color-tan)]">
                  Equity Solution
                </h3>
                <ul className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <li 
                      key={index}
                      className={`flex items-start transition-all duration-500 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="text-[var(--color-tan)] text-xl mr-3">✓</span>
                      <div>
                        <h4 className="font-heading text-lg mb-1">{item.aspect}</h4>
                        <p className="text-[var(--color-off-white)]">{item.equity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div 
              className={`bg-gradient-to-br from-[var(--color-soft-navy)] to-[#555565] p-1 rounded-xl shadow-xl transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="bg-[var(--color-royal-navy)] p-8 rounded-lg h-full">
                <h3 className="text-2xl font-heading mb-6 text-center text-[var(--color-soft-navy)]">
                  Liquidation
                </h3>
                <ul className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <li 
                      key={index}
                      className={`flex items-start transition-all duration-500 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="text-red-500 text-xl mr-3">✗</span>
                      <div>
                        <h4 className="font-heading text-lg mb-1">{item.aspect}</h4>
                        <p className="text-[var(--color-off-white)]">{item.liquidation}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section with modern carousel
const TestimonialsSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 px-4 bg-[var(--color-charcoal)]" 
      id="testimonials"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 
            className="text-3xl md:text-5xl font-heading text-center mb-20 uppercase tracking-wide"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-tan)] to-[var(--color-tan-light)]">
              What Our Clients Say
            </span>
          </h2>
          
          <div className="relative">
            <div className="absolute -top-16 -left-16 w-32 h-32 text-9xl text-[var(--color-tan)] opacity-20 font-serif">
              "
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[var(--color-royal-navy)]">
              <div className="flex flex-col md:flex-row h-full">
                {/* Decorative element */}
                <div className="w-full md:w-1/3 bg-gradient-to-br from-[var(--color-tan)] to-[var(--color-tan-light)] p-8 flex items-center justify-center">
                  <div className="text-[var(--color-royal-navy)] text-9xl font-serif">
                    "
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="w-full md:w-2/3 p-8 md:p-12">
                  <div
                    key={currentIndex}
                    className="h-full flex flex-col transition-opacity duration-300"
                  >
                    <p className="italic text-lg md:text-xl mb-8">{testimonials[currentIndex].quote}</p>
                    <div className="mt-auto">
                      <p className="font-heading text-xl text-[var(--color-tan)]">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-[var(--color-tan-light)]">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="mt-10 flex justify-between items-center">
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentIndex === index ? 'bg-[var(--color-tan)] w-6' : 'bg-[var(--color-soft-navy)]'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full bg-[var(--color-soft-navy)] flex items-center justify-center text-white hover:bg-[var(--color-tan)] transition-colors hover:scale-110 active:scale-95"
                        aria-label="Previous testimonial"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full bg-[var(--color-soft-navy)] flex items-center justify-center text-white hover:bg-[var(--color-tan)] transition-colors hover:scale-110 active:scale-95"
                        aria-label="Next testimonial"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section with smooth animations
const FAQSection = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
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
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 px-4" 
      id="faq"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 
            className="text-3xl md:text-5xl font-heading text-center mb-20 uppercase tracking-wide"
          >
            Frequently Asked <span className="text-[var(--color-tan)]">Questions</span>
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                  openIndex === index ? 'bg-[var(--color-royal-navy)]' : 'bg-[#2a2a38]'
                } ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center font-heading text-lg"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={openIndex === index ? 'text-[var(--color-tan)]' : ''}>
                    {faq.question}
                  </span>
                  <span 
                    className={`text-[var(--color-tan)] text-2xl font-light transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[var(--color-off-white)]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Form with floating labels and animations
const ContactForm = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name: string) => {
    setFocused(name);
  };

  const handleBlur = () => {
    setFocused(null);
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
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 px-4 bg-gradient-to-b from-[var(--color-charcoal)] to-[var(--color-royal-navy)]" 
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 
            className="text-3xl md:text-5xl font-heading text-center mb-6 uppercase tracking-wide"
          >
            Take The First Step <span className="text-[var(--color-tan)]">Towards A Solution</span>
          </h2>
          
          <p 
            className="text-center mb-16 text-lg text-[var(--color-off-white)]"
          >
            Complete the form below for a confidential, no-obligation consultation with our team.
          </p>

          <div 
            className="bg-[var(--color-royal-navy)] rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name field with floating label */}
              <div 
                className="relative hover:scale-101 transition-transform duration-300"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className="w-full p-4 bg-transparent border-b-2 border-[var(--color-soft-navy)] focus:border-[var(--color-tan)] outline-none transition-all peer"
                  aria-describedby={status === 'err' ? 'form-error' : undefined}
                />
                <label 
                  htmlFor="name" 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none text-[var(--color-soft-navy)] ${
                    focused === 'name' || formData.name 
                      ? 'text-xs text-[var(--color-tan)] -translate-y-6' 
                      : 'text-base translate-y-1'
                  }`}
                >
                  Full Name
                </label>
              </div>
              
              {/* Email field with floating label */}
              <div 
                className="relative hover:scale-101 transition-transform duration-300"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="w-full p-4 bg-transparent border-b-2 border-[var(--color-soft-navy)] focus:border-[var(--color-tan)] outline-none transition-all peer"
                  aria-describedby={status === 'err' ? 'form-error' : undefined}
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none text-[var(--color-soft-navy)] ${
                    focused === 'email' || formData.email 
                      ? 'text-xs text-[var(--color-tan)] -translate-y-6' 
                      : 'text-base translate-y-1'
                  }`}
                >
                  Email Address
                </label>
              </div>
              
              {/* Phone field with floating label */}
              <div 
                className="relative hover:scale-101 transition-transform duration-300"
              >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className="w-full p-4 bg-transparent border-b-2 border-[var(--color-soft-navy)] focus:border-[var(--color-tan)] outline-none transition-all peer"
                  aria-describedby={status === 'err' ? 'form-error' : undefined}
                />
                <label 
                  htmlFor="phone" 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none text-[var(--color-soft-navy)] ${
                    focused === 'phone' || formData.phone 
                      ? 'text-xs text-[var(--color-tan)] -translate-y-6' 
                      : 'text-base translate-y-1'
                  }`}
                >
                  Phone Number
                </label>
              </div>
              
              {/* Submit button with animation */}
              <div
                className="relative mt-12 hover:scale-102 active:scale-98 transition-transform duration-300"
              >
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-gradient-to-r from-[var(--color-tan)] to-[var(--color-tan-light)] text-[var(--color-royal-navy)] font-heading font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--color-royal-navy)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Request Consultation'}
                </button>
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-tan)] to-[var(--color-tan-light)] rounded-lg blur opacity-30 group-hover:opacity-50 transition-all -z-10"></div>
              </div>
              
              {/* Status messages */}
              {status === 'ok' && (
                <div 
                  className="mt-4 text-center text-green-500 bg-green-900 bg-opacity-20 p-3 rounded-lg" 
                  role="status"
                >
                  Thank you. We'll be in touch shortly to discuss your situation.
                </div>
              )}
              
              {status === 'err' && (
                <div 
                  id="form-error" 
                  className="mt-4 text-center text-red-500 bg-red-900 bg-opacity-20 p-3 rounded-lg" 
                  role="alert"
                >
                  Sorry, something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Modern footer with animation
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-[var(--color-royal-navy)] border-t border-[var(--color-soft-navy)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div 
            className="mb-8 md:mb-0 transition-all duration-700 opacity-0 animate-fadeIn"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <Image
              src="/frontfinancial-logo-script-tan.svg"
              alt="Front Financial"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 transition-all duration-700 opacity-0 animate-fadeIn"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            <div>
              <h4 className="font-heading text-[var(--color-tan)] mb-4">Contact</h4>
              <ul className="space-y-2 text-[var(--color-tan-light)]">
                <li>info@frontfinancial.com</li>
                <li>1300 123 456</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-[var(--color-tan)] mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[var(--color-tan-light)] hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[var(--color-tan-light)] hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-[var(--color-tan)] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[var(--color-tan-light)] hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-[var(--color-tan-light)] hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-12 pt-8 border-t border-[var(--color-soft-navy)] text-center transition-all duration-700 opacity-0 animate-fadeIn"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          <p className="text-sm text-[var(--color-tan-light)]">
            &copy; {new Date().getFullYear()} Front Financial. All rights reserved. 
            Confidential and professional tax resolution services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
        .hover\:scale-101:hover {
          transform: scale(1.01);
        }
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
        .active\:scale-98:active {
          transform: scale(0.98);
        }
        .active\:scale-95:active {
          transform: scale(0.95);
        }
      `}</style>
      <HeroSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  );
}