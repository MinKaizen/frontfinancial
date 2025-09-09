import Image from "next/image";
import EmailOnlyForm from "./email-only-form";

export function ContactSection() {
  return (
    <div className="bg-tan-light">
      <div className="grid grid-cols-[1fr_auto] content-center items-center py-10 px-5">
        <div className="grid gap-15">
          <h2 className="uppercase text-base leading-snug">
            Contact us <br />
            Available Whenever you need us<br />
            - 365 days a year, 366 days on leap years.
          </h2>
          <p className="max-w-[32rem] text-lg italic leading-snug">
            We keep it simple: clear conversations, decisive action, lasting impact.
            Across residential, commercial, private, and business finance, we deliver tailored solutions that move you forward. With deep market expertise, trusted networks, and a sharp strategic lens, we cut through the complexity so you can focus on what matters most: results.
          </p>
          <EmailOnlyForm />
        </div>
        <div className="bg-tan aspect-square w-[500px]"></div>
      </div>
    </div>
  );
}
