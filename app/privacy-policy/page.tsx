import type { Metadata } from "next";
import { StickyHeader } from "@/components/sticky-header";
import { FooterSection } from "@/components/footer-section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "FRONT Financial's Privacy Policy outlining how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | FRONT Financial",
    description:
      "FRONT Financial's Privacy Policy outlining how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
    siteName: "FRONT Financial",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | FRONT Financial",
    description:
      "FRONT Financial's Privacy Policy outlining how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <StickyHeader bgColor="white" textColor="royal-navy" />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-royal-navy">
          PRIVACY POLICY
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-royal-navy">
          <p>
            This Privacy Policy sets out our commitment to protecting the
            privacy of personal information provided to us, or otherwise
            collected by us, offline or online, including through our
            www.frontfinancial.com.au (Site). In this Privacy Policy, "we,"
            "us," or "our" means Front Financial.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Personal Information</h2>
          <p>
            The types of personal information we may collect about you include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your name;</li>
            <li>Images of you;</li>
            <li>
              Your contact details, including email address, mailing address,
              street address, and/or telephone number;
            </li>
            <li>Your marital status and/or anniversary;</li>
            <li>Your age and/or date of birth;</li>
            <li>Your credit card details;</li>
            <li>Your demographic information, such as postcode;</li>
            <li>Your preferences and/or opinions;</li>
            <li>Information you provide to us through customer surveys;</li>
            <li>
              Details of products and services we have provided to you and/or
              that you have enquired about, and our response to you;
            </li>
            <li>
              Your browser session and geo-location data, device and network
              information, statistics on page views and sessions, acquisition
              sources, search queries, and/or browsing behavior;
            </li>
            <li>
              Information about your access and use of our Site, including
              through the use of Internet cookies, your communications with our
              Site, the type of browser you are using, the type of operating
              system you are using, and the domain name of your Internet service
              provider;
            </li>
            <li>
              Additional personal information that you provide to us, directly
              or indirectly, through your use of our Site, associated
              applications, associated social media platforms, and/or accounts
              from which you permit us to collect information; and
            </li>
            <li>
              Any other personal information requested by us and/or provided by
              you or a third party.
            </li>
          </ul>
          <p>
            We may collect these types of personal information directly from you
            or from third parties.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Collection and Use of SMS and Phone Numbers
          </h2>
          <p>
            We may collect and hold your phone number for various purposes,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Communication: To send SMS updates related to your orders,
              delivery information, and customer support.
            </li>
            <li>
              Marketing Purposes: Where consent has been provided, to send you
              promotional information via SMS about our products, services, or
              promotions that may be of interest to you.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">
            Consent and Opt-In Requirements
          </h3>
          <p>
            By providing your phone number, you consent to receive SMS
            communications, including marketing messages if opted in, in
            compliance with the Spam Act 2003 (Cth). Consent for SMS
            communications can be withdrawn at any time by following opt-out
            instructions or contacting us directly.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Opt-Out Mechanism</h3>
          <p>
            To stop receiving SMS marketing messages, you may reply with 'STOP'
            or contact us using the details below. We will promptly respect all
            opt-out requests and update our records accordingly.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">
            Third-Party Disclosure for SMS Communications
          </h3>
          <p>
            We may disclose your phone number to third-party service providers
            solely to enable them to send SMS messages on our behalf. These
            providers are required to follow security practices consistent with
            the Australian Privacy Principles (APPs) and cannot use your phone
            number for any other purpose.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Collection and Use of Personal Information
          </h2>
          <p>
            We may collect, hold, use, and disclose personal information for the
            following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To enable you to access and use our Site, associated applications,
              and associated social media platforms;
            </li>
            <li>To contact and communicate with you;</li>
            <li>For internal record keeping and administrative purposes;</li>
            <li>
              For analytics, market research, and business development, including
              to operate and improve our Site, associated applications, and
              associated social media platforms;
            </li>
            <li>
              To run competitions and/or offer additional benefits to you;
            </li>
            <li>
              For advertising and marketing, including to send you promotional
              information about our products and services and information about
              third parties that we consider may be of interest to you;
            </li>
            <li>
              To comply with our legal obligations and resolve any disputes that
              we may have; and
            </li>
            <li>To consider your employment application.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Disclosure of Personal Information to Third Parties
          </h2>
          <p>We may disclose personal information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Third-party service providers for the purpose of enabling them to
              provide their services, including (without limitation) IT service
              providers, data storage, web-hosting, server providers, debt
              collectors, maintenance or problem-solving providers, marketing or
              advertising providers, professional advisors, and payment systems
              operators;
            </li>
            <li>Our employees, contractors, and/or related entities;</li>
            <li>Our existing or potential agents or business partners;</li>
            <li>Sponsors or promoters of any competition we run;</li>
            <li>
              Anyone to whom our business or assets (or any part of them) are,
              or may (in good faith) be, transferred;
            </li>
            <li>
              Courts, tribunals, and regulatory authorities, in the event you
              fail to pay for goods or services we have provided to you;
            </li>
            <li>
              Courts, tribunals, regulatory authorities, and law enforcement
              officers, as required by law, in connection with any actual or
              prospective legal proceedings, or to establish, exercise or defend
              our legal rights; and
            </li>
            <li>
              Third parties, including agents or subcontractors, who assist us in
              providing information, products, services, or direct marketing to
              you. This may include parties located, or that store data, outside
              of Australia.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Overseas Disclosure</h2>
          <p>
            We may store personal information overseas. Where we disclose your
            personal information to the third parties listed above, these third
            parties may also store, transfer, or access personal information
            outside of Australia. Unless we seek and receive your consent to an
            overseas disclosure of your personal information, we will only
            disclose your personal information to countries with laws which
            protect your personal information in a way that is substantially
            similar to the Australian Privacy Principles and/or we will take
            reasonable steps to ensure that overseas recipients protect your
            personal information in accordance with the Australian Privacy
            Principles.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            How We Treat Sensitive Information
          </h2>
          <p>
            Sensitive information is a subset of personal information given a
            higher level of protection under the Australian Privacy Principles.
            Sensitive information means information relating to your racial or
            ethnic origin, political opinions, religion, trade union or other
            professional associations or memberships, philosophical beliefs,
            sexual orientation or practices, criminal records, health
            information, or biometric information.
          </p>
          <p>
            We only collect, hold, use, and disclose sensitive information for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The primary purpose for which it is collected;</li>
            <li>
              Secondary purposes that are directly related to the primary
              purpose, including disclosure to the above-listed third parties as
              reasonably necessary to provide our services to you;
            </li>
            <li>
              Contacting emergency services, or speaking with your family,
              partner, or support person where we reasonably believe there is a
              serious risk to the life, health, or safety of you or another
              person and it is impracticable to obtain your consent; and
            </li>
            <li>If otherwise required or authorised by law.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Your Rights and Controlling Your Personal Information
          </h2>
          <p>
            <strong>Choice and Consent:</strong> By providing personal
            information to us, you understand that we will collect, hold, use,
            and disclose your personal information in accordance with this
            Privacy Policy. You do not have to provide personal information to
            us; however, if you do not, it may affect your use of this Site or
            the products and/or services offered on or through it.
          </p>
          <p>
            <strong>Information from Third Parties:</strong> If we receive
            personal information about you from a third party, we will protect it
            as set out in this Privacy Policy.
          </p>
          <p>
            <strong>Restrict:</strong> You may choose to restrict the collection
            or use of your personal information. If you have previously agreed to
            us using your personal information for direct marketing purposes, you
            may change your mind at any time by contacting us using the details
            below.
          </p>
          <p>
            <strong>Access:</strong> You may request details of the personal
            information that we hold about you. An administrative fee may be
            payable.
          </p>
          <p>
            <strong>Correction:</strong> If you believe that any information we
            hold about you is inaccurate, out of date, incomplete, irrelevant, or
            misleading, please contact us using the details below.
          </p>
          <p>
            <strong>Complaints:</strong> If you believe that we have breached the
            Australian Privacy Principles and wish to make a complaint, please
            contact us using the details below and provide full details of the
            alleged breach. We will promptly investigate your complaint and
            respond in writing.
          </p>
          <p>
            <strong>Unsubscribe:</strong> To unsubscribe from our e-mail database
            or opt-out of communications (including marketing communications),
            please contact us using the details below or use the opt-out
            facilities provided in the communication.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Storage and Security</h2>
          <p>
            We are committed to ensuring that the personal information we
            collect, including SMS numbers, is secure. We have put in place
            suitable physical, electronic, and managerial procedures to safeguard
            and secure personal information and protect it from misuse,
            interference, loss, unauthorized access, modification, and disclosure.
          </p>
          <p>
            Transmission of information is carried out at your own risk. While we
            take reasonable steps to safeguard your personal information, we
            cannot assure you that the personal information we collect will not
            be disclosed in a manner that is inconsistent with this Privacy
            Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Cookies and Web Beacons
          </h2>
          <p>
            We may use cookies on our Site to store your preferences and improve
            your experience. Additionally, third parties (e.g., Google and
            Facebook) may place our advertisements on social media and online
            media feeds as part of our retargeting campaigns.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Links to Other Websites
          </h2>
          <p>
            Our Site may contain links to other websites. We do not have control
            over these sites and are not responsible for the protection and
            privacy of any personal information you provide while visiting them.
            These websites are not governed by this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Amendments</h2>
          <p>
            We may update this Privacy Policy at any time by publishing the
            amended version on our Site. We recommend you check our Site regularly
            to ensure you are aware of our current Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            For any questions or notices, please contact us at:
          </p>
          <p>
            <strong>Front Financial</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:marketing@frontfinancial.com.au"
              className="text-blue-600 hover:underline"
            >
              marketing@frontfinancial.com.au
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.frontfinancial.com.au"
              className="text-blue-600 hover:underline"
            >
              www.frontfinancial.com.au
            </a>
          </p>

          <p className="mt-8">
            <strong>Last Update:</strong> 31.10.2024
          </p>

          <p className="mt-8 text-center font-bold text-xl">
            FRONT FINANCIAL
          </p>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
