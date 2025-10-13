import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  const instagramUrl = process.env.INSTAGRAM_URL ?? '';
  const linkedInUrl = process.env.LINKED_IN_URL ?? '';

  return (
    <div className="grid justify-items-center py-10 px-5 h-[600px] grid-rows-[auto_1fr_auto] items-center">
      <p className="text-right leading-none justify-self-end">Sharp-minded, never-sleeping, tech-driven <br className="hidden sm:inline-block" /> financial partners who make your money <br className="hidden sm:inline-block" />work as hard as we do.</p>
      <Image
        className="w-full max-w-[331px] h-auto"
        src="/frontfinancial-logo-script-tan.svg"
        alt="Front Financial logo"
        width={331}
        height={53}
      />
      <div className="grid sm:grid-cols-[auto_auto_1fr] justify-self-stretch gap-x-20">
        <div className="flex flex-col">
          <Link href={instagramUrl}>Instagram</Link>
          <Link href={linkedInUrl}>LinkedIn</Link>
        </div>
        <div className="flex flex-col">
          <Link href="/">Privacy</Link>
          <Link href="/">FAQ's</Link>
          <Link href="/">T&C's</Link>
        </div>
        <div className="justify-self-end self-end">
          <div>Front Financial 2025©</div>
        </div>
      </div>
    </div>
  );
}
