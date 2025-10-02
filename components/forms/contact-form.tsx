'use client';

import { metaPixel } from '@/utils/metaPixel';
import { useState, useEffect } from 'react';

const noValidationErrors = {}

export default function ContactForm() {
  // form fields
  const [firstname, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contact_source, setContactSource] = useState<string>('');
  const [enquiryType, setEnquiryType] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // meta
  const [pageUrl, setPageUrl] = useState<string>('');
  const [pageName, setPageName] = useState<string>('');
  const [hutk, setHutk] = useState<string | null>(null);

  // error handling
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [formError, setFormError] = useState('');
  const [validationErrors, setValidationErrors] = useState<{
    firstname?: string[],
    phone?: string[],
    email?: string[],
    enquiryType?: string[],
    message?: string[],
    contact_source?: string[],
  }>(noValidationErrors);

  useEffect(() => {
    const href = window.location.href ?? '';
    const pathname = window.location.pathname ?? '';

    setPageUrl(href);
    setContactSource(href);
    setPageName(pathname);

    const hutkMatch = document.cookie.match(/hubspotutk=([^;]+)/);
    if (hutkMatch) setHutk(decodeURIComponent(hutkMatch[1]));
  }, []);


  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    const payload = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          email,
          firstname,
          phone,
          contact_source,
          enquiryType,
          message,
        },
        meta: {
          pageUrl,
          pageName,
          ...(hutk ? { hutk } : {}),
        },
      })
    }
    console.log({ payload })
    const res = await fetch('/api/contact-form', payload);
    const json = await res.json()
    console.log({ responseJson: json })

    if (res.ok) {
      setStatus('ok');
      setFirstName('');
      setPhone('');
      setEmail('');

      // fire the meta pixel!
      metaPixel('track', 'Lead', { email });
    } else {
      setValidationErrors(json.formErrors)
      setStatus('err');
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      {status !== 'ok' && (
        <>
          <div className="grid grid-cols-1 gap-x-6 md:gap-x-9 lg:gap-x-12 gap-y-4 md:grid-cols-2">
            <div className="relative border-b pt-3 pb-1">
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                placeholder=" "
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="peer w-full bg-transparent outline-none"
                autoComplete="given-name"
              />
              <label
                htmlFor="firstname"
                className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
              >
                Your Name
              </label>
            </div>

            <div className="relative border-b pt-3 pb-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full bg-transparent outline-none"
                autoComplete="email"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
              >
                Your Email Address
              </label>
            </div>

            <div className="relative border-b pt-3 pb-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder=" "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="peer w-full bg-transparent outline-none"
                autoComplete="tel"
                inputMode="tel"
              />
              <label
                htmlFor="phone"
                className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
              >
                Phone Number
              </label>
            </div>

            <div className="relative border-b pt-3 pb-1">
              <input
                id="enquiryType"
                name="enquiryType"
                type="text"
                required
                placeholder=" "
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                className="peer w-full bg-transparent outline-none"
              />
              <label
                htmlFor="enquiryType"
                className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
              >
                Enquiry Type
              </label>
            </div>

            <div className="relative border-b pt-3 pb-1 col-span-full">
              <textarea
                id="message"
                name="message"
                required
                placeholder=" "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer w-full bg-transparent outline-none pt-2"
                rows={4}
              >
              </textarea>
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
              >
                Type an introductory message here.
              </label>
            </div>
          </div>

          <input type="hidden" name="contact_source" value={contact_source} />
          <input type="hidden" name="0-1/contact_source" value={contact_source} />

          <div className="flex pt-4 col-span-full justify-center mt-8">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="pt-2 capitalize tracking-wide cursor-pointer disabled:opacity-60 text-[14px]"
            >
              {status === 'loading' ? 'Sending…' : 'Submit'}
              <div
                className="arrow absolute left-0 bottom-2 px-3"
                style={{
                  ["--len" as any]: "100%",
                  ["--thick" as any]: "1px",
                  ["--head" as any]: "4px",
                  color: "#fff",
                }}
              />
            </button>
          </div>
        </>
      )}

      {status === 'ok' && (
        <p className="mx-auto mt-4 text-base italic text-emerald-700 bg-emerald-200 px-4 py-2 max-w-max border-l-4 border-emerald-700" role="status">
          Thank you. We’ll be in touch shortly.
        </p>
      )}

      {status === 'err' && (
        <p className="mt-4 text-base italic text-red-500 bg-red-100 px-4 py-2 max-w-max border-l-4 border-red-500" role="alert">
          Sorry, something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
