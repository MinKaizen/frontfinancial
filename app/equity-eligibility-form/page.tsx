import EligibilityForm from '@/components/forms/eligibility-form';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Equity Eligibility Form",
  description: "Find out if you’re eligible to access equity and discuss options with our team.",
  alternates: { canonical: "/equity-eligibility-form" },
};

const ContactForm = () => {
  return (
    <section 
      className="py-24 md:py-32 px-4 bg-soft-navy min-h-[100vh]" 
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <div>
          <div className="w-[180px] h-auto lg:w-[220px] mb-8 mx-auto">
            <Image
              src="/frontfinancial-logo-primary-white.svg"
              alt="Front Financial"
              width={220}
              height={50}
              className="mb-16 mx-auto"
            />
          </div>
          <h2 
            className="text-lg font-heading text-center mb-2 uppercase "
          >
            Take The First Step <span className="text-white">Towards A Solution</span>
          </h2>
          
          <p 
            className="text-center mb-12 text-lg text-white"
          >
            Complete the form below for a confidential, no-obligation consultation with our team.
          </p>

          <div 
            className="bg-royal-navy p-8 md:p-12"
          >
            <EligibilityForm />
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
