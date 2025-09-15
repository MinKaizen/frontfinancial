'use client';

import { useState, useRef, useEffect } from 'react';

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
      <div className="max-w-2xl mx-auto">
        <div
          className={`transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 
            className="text-lg font-heading text-center mb-2 uppercase "
          >
            Take The First Step <span className="text-[var(--color-tan)]">Towards A Solution</span>
          </h2>
          
          <p 
            className="text-center mb-12 text-lg text-[var(--color-off-white)]"
          >
            Complete the form below for a confidential, no-obligation consultation with our team.
          </p>

          <div 
            className="bg-[var(--color-royal-navy)] p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name field with floating label */}
              <div 
                className="relative transition-transform duration-300"
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
                      ? 'text-xs text-[var(--color-tan)] -translate-y-2' 
                      : 'text-base translate-y-1'
                  }`}
                >
                  Full Name
                </label>
              </div>
              
              {/* Email field with floating label */}
              <div 
                className="relative transition-transform duration-300"
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
                      ? 'text-xs text-[var(--color-tan)] -translate-y-2' 
                      : 'text-base translate-y-1'
                  }`}
                >
                  Email Address
                </label>
              </div>
              
              {/* Phone field with floating label */}
              <div 
                className="relative transition-transform duration-300"
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
                      ? 'text-xs text-[var(--color-tan)] -translate-y-2' 
                      : 'text-base translate-y-1'
                  }`}
                >
                  Phone Number
                </label>
              </div>
              
              {/* Submit button with animation */}
              <div
                className="relative mt-12 mb-5 active:scale-98 transition-transform duration-300"
              >
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-tan text-white font-heading font-bold uppercase r transition-all disabled:opacity-70 text-sm hover:cursor-pointer hover:bg-tan"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Request Free Consultation'}
                </button>
              </div>
              
              {/* Status messages */}
              {status === 'ok' && (
                <div 
                  className="mt-1 text-center text-emerald-300 bg-emerald-900 bg-opacity-20 p-3" 
                  role="status"
                >
                  Thank you. We will be in touch with you shortly
                </div>
              )}
              
              {status === 'err' && (
                <div 
                  id="form-error" 
                  className="mt-4 text-center text-red-500 bg-red-900 bg-opacity-20 p-3" 
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

export default function Page() {
  return (
    <ContactForm />
  )
}
