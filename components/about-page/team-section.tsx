import Image from "next/image"
import Link from "next/link"

type ProfileCardProps = {
  img: string,
  name: string,
  title: string,
  phone: string,
  email: string,
  linkedin: string,
}
const ProfileCard = ({
  img,
  name,
  title,
  phone,
  email,
  linkedin,
}: ProfileCardProps) => {
  return (
    <article className="grid gap-4">
      <div className="relative grayscale hover:grayscale-0">
        <Image
          className="object-top object-cover w-full sm:w-full h-auto aspect-auto"
          src={img}
          alt={name}
          width={450}
          height={514}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33.33vw, (min-width: 640px) 50vw, 100vw"
          quality={100}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 hover:opacity-0"></div>
      </div>
      <div className="relative grid gap-3 content-start items-start">
        <h3 className="text-[14px] lg:text-body">{name}</h3>
        <Link href={linkedin} className="absolute top-0 right-0 w-[24px] h-auto">
          <Image
            className="w-full h-full"
            src="/icon-linkedin-off-white-on-royal-navy.svg"
            alt="LinkedIn"
            width={31}
            height={31}
          />
        </Link>
        <div>
          <div className="font-body text-[14px]">{title}</div>
          <Link href={`tel:${phone.replace(/\s+/g, "")}`} className="font-body text-[14px] block underline break-all">{phone}</Link>
          <Link href={`mailto:${email}`} className="font-body text-[14px] block underline break-all">{email}</Link>
        </div>
      </div>
    </article>
  )
}

export function TeamSection() {
  return (
    <div className="bg-white text-royal-navy">
      <div className="px-5 py-20">
        <h2 className="text-body font-heading uppercase">The team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
          <ProfileCard
            img="/profile-william-banham-700.avif"
            name="William Banham"
            title="Managing Director"
            phone="0402 148 253"
            email="williambanham@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/william-banham-2a9631214/?originalSubdomain=au"
          />
          <ProfileCard
            img="/profile-ryan-sweeney-700.avif"
            name="Ryan Sweeney"
            title="Chief Executive Officer"
            phone="0466 634 494"
            email="ryansweeney@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/ryan-sweeney-39a389191/"
          />
          <ProfileCard
            img="/profile-dylan-tennyson-700.avif"
            name="Dylan Tennyson"
            title="Lending Partner"
            phone="0400 518 130"
            email="dylantennyson@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/dylan-tennyson-852497267/?originalSubdomain=au"
          />
          <ProfileCard
            img="/profile-cooper-sergis-700.avif"
            name="Cooper Sergis"
            title="Lending Partner"
            phone="0406 135 505"
            email="coopersergis@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/cooper-sergis/"
          />
          <ProfileCard
            img="/profile-lachlan-pegler-700.avif"
            name="Lachlan Pegler"
            title="Lending Partner"
            phone="0415 605 535"
            email="lachlanpegler@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/lachlan-pegler-b352b9309/?originalSubdomain=au"
          />
          <ProfileCard
            img="/profile-angus-fraser-700.avif"
            name="Angus Fraser"
            title="Lending Partner"
            phone="0490 392 170"
            email="angusfraser@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/angus-fraser-7b6795309/"
          />
          <ProfileCard
            img="/profile-bill-de-vries-700.avif"
            name="Bill De Vries"
            title="Associate"
            phone="0438 488 500"
            email="williamdevries@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/willdevries/"
          />
          <ProfileCard
            img="/profile-will-gerstl-700.avif"
            name="Will Gerstl"
            title="Associate"
            phone="0424 383 296"
            email="williamgerstl@frontfinancial.com.au"
            linkedin="https://www.linkedin.com/in/will-gerstl-935b19231/"
          />
        </div>
      </div>
    </div>
  )
}
