import ContactForm from "../forms/contact-form"

export function ContactSection() {
  return (
    <div className="bg-soft-navy px-5 py-20 lg:h-[80vh] grid place-items-center">
      <div className="w-full max-w-[850px] mx-auto">
        <h1 className="text-center text-[15px]">Contact Us</h1>
        <p className="text-center font-heading text-[15px]">
          Available whenever you need us
          <br className="hidden sm:block" />
          — 365 days a year, 366 on leap years.
        </p>
        <div className="mt-[80px]">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  )
}
