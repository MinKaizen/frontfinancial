'use client';

import { metaPixel } from '@/utils/metaPixel';
import { useState, useEffect } from 'react';
import { contactSchema } from '@/app/api/eligibility-form/route';

export default function EligibilityForm() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [owns_property_string, setOwnProperty] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [errors, setErrors] = useState<{ owns_property_string?: string }>({});
  const [contact_source, setContactSource] = useState<string>('');
  const [pageUrl, setPageUrl] = useState<string>('');
  const [pageName, setPageName] = useState<string>('');
  const [hutk, setHutk] = useState<string | null>(null);

  useEffect(() => {
    setPageUrl(window.location.href ?? '');
    setContactSource(pageUrl)
    setPageName(window.location.pathname)

    const hutkMatch = document.cookie.match(/hubspotutk=([^;]+)/);
    if (hutkMatch) setHutk(hutkMatch[1]);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Validate required custom field before submit
    if (!owns_property_string) {
      setErrors({ owns_property_string: 'Please select whether you currently own a property.' });
      return;
    }
    if (!email) return;
    setStatus('loading');

    const payload = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          email,
          firstname,
          lastname,
          phone,
          owns_property_string,
          contact_source,
        },
        meta: {
          pageUrl,
          pageName,
          ...(hutk ? {hutk} : {}),
        },
      })
    }
    console.log({payload})
    const res = await fetch('/api/eligibility-form', payload);
    const json = await res.json()
    console.log({responseJson: json})

    if (res.ok) {
      setStatus('ok');
      setErrors({});
      setFirstName('');
      setLastName('');
      setPhone('');
      setOwnProperty('');
      setEmail('');

      // fire the meta pixel!
      metaPixel('track', 'Lead', { email });
    } else {
      setStatus('err');
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm lg:max-w-3xl">
      {status !== 'ok' && (
        <>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
            <div className="relative border-b pt-3 pb-1">
              <input
                id="firstname"
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
                First Name
              </label>
            </div>

            <div className="relative border-b pt-3 pb-1">
              <input
                id="lastname"
                type="text"
                required
                placeholder=" "
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="peer w-full bg-transparent outline-none"
                autoComplete="family-name"
              />
              <label
                htmlFor="lastname"
                className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
              >
                Last Name
              </label>
            </div>

            <div className="relative border-b pt-3 pb-1 md:col-span-2">
              <input
                id="email"
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

            <div className="relative border-b pt-3 pb-1 md:col-span-2">
              <input
                id="phone"
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

            <div className="pt-3 pb-1 col-span-full">
              <span
                id="owns_property_string-label"
                className="text-base italic opacity-100"
              >
                Do you currently own a property?
              </span>

              <div className="flex flex-row content-center items-center gap-4 mt-2">

                <div
                  role="radiogroup"
                  aria-labelledby="owns_property_string-label"
                  aria-invalid={!!errors.owns_property_string}
                  aria-describedby={errors.owns_property_string ? 'owns_property_string-error' : undefined}
                  className="inline-flex rounded-full overflow-hidden border"
                >
                  <button
                    type="button"
                    role="radio"
                    aria-checked={owns_property_string === 'false'}
                    tabIndex={owns_property_string === '' || owns_property_string === 'no' ? 0 : -1}
                    onClick={() => {
                      setOwnProperty('false');
                      if (errors.owns_property_string) setErrors({});
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setOwnProperty('false');
                        if (errors.owns_property_string) setErrors({});
                      }
                    }}
                    className={`px-4 py-1 text-sm italic transition-colors ${owns_property_string === 'false' ? 'bg-soft-navy' : 'hover:bg-royal-navy'}`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={owns_property_string === 'true'}
                    tabIndex={owns_property_string === 'true' ? 0 : -1}
                    onClick={() => {
                      setOwnProperty('true');
                      if (errors.owns_property_string) setErrors({});
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setOwnProperty('true');
                        if (errors.owns_property_string) setErrors({});
                      }
                    }}
                    className={`px-4 py-1 text-sm italic transition-colors ${owns_property_string === 'true' ? 'bg-soft-navy' : 'hover:bg-royal-navy'}`}
                  >
                    Yes
                  </button>
                </div>
                {errors.owns_property_string && (
                  <p id="owns_property_string-error" className="text-sm italic text-red-600">
                    {errors.owns_property_string}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex pt-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 bg-soft-navy capitalize tracking-wide cursor-pointer italic disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending…' : 'Submit'}
            </button>
          </div>
        </>
      )}

      {errors.owns_property_string && (
        <p className="mt-4 text-base italic text-red-500 bg-red-100 px-4 py-2 max-w-max border-l-4 border-red-500" role="alert">
          Please select whether you currently own a property.
        </p>
      )}

      {status === 'ok' && (
        <p className="mt-4 text-base italic text-emerald-500 bg-emerald-100 px-4 py-2 max-w-max border-l-4 border-emerald-500" role="status">
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
