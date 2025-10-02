import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  const instagramUrl = process.env.INSTAGRAM_URL ?? '';
  const linkedInUrl = process.env.LINKED_IN_URL ?? '';

  return (
    <div className="grid py-10 px-5 min-h-[600px] md:grid-cols-[1fr_auto_1fr] content-stretch gap-y-8">
      <Image
        className="w-full max-w-[331px] h-auto justify-self-center self-center md:hidden"
        src="/frontfinancial-logo-script-tan.svg"
        alt="Front Financial logo"
        width={331}
        height={53}
        priority
      />
      <div className="flex flex-row md:flex-col justify-between justify-self-stretch justify-items-start">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/services/residential">Residential</Link>
            <Link href="/services/commercial">Commercial</Link>
            <Link href="/services/business">Business</Link>
            <Link href="/services/equity">Equity</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <Link href={instagramUrl}>Instagram</Link>
            <Link href={linkedInUrl}>LinkedIn</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/">Privacy</Link>
            <Link href="/">FAQ's</Link>
            <Link href="/">T&C's</Link>
          </div>
        </div>
      </div>
      <Image
        className="hidden md:block w-full max-w-[331px] h-auto justify-self-center self-center"
        src="/frontfinancial-logo-script-tan.svg"
        alt="Front Financial logo"
        width={331}
        height={53}
        loading="lazy"
      />
      <div className="grid justify-self-end gap-x-20">
        <p className="text-right leading-none justify-self-end">Sharp-minded, never-sleeping, tech-driven <br className="hidden md:inline-block" /> financial partners.</p>
        <div className="justify-self-end self-end">
          <div>Front Financial 2025©</div>
        </div>
      </div>
    </div>
  );
}
