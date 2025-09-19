'use client';

import { metaPixel } from '@/utils/metaPixel';
import { useState } from 'react';

export default function EligibilityForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [ownProperty, setOwnProperty] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [errors, setErrors] = useState<{ ownProperty?: string }>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Validate required custom field before submit
    if (!ownProperty) {
      setErrors({ ownProperty: 'Please select whether you currently own a property.' });
      return;
    }
    if (!email) return;
    setStatus('loading');

    const res = await fetch('/api/email-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName, lastName, phone, ownProperty }),
    });
    console.log(res)

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
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
        <div className="relative border-b pt-3 pb-1">
          <input
            id="firstName"
            type="text"
            required
            placeholder=" "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="peer w-full bg-transparent outline-none"
            autoComplete="given-name"
          />
          <label
            htmlFor="firstName"
            className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
          >
            First Name
          </label>
        </div>

        <div className="relative border-b pt-3 pb-1">
          <input
            id="lastName"
            type="text"
            required
            placeholder=" "
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="peer w-full bg-transparent outline-none"
            autoComplete="family-name"
          />
          <label
            htmlFor="lastName"
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
            id="ownProperty-label"
            className="text-base italic opacity-100"
          >
            Do you currently own a property?
          </span>

          <div className="flex flex-row content-center items-center gap-4 mt-2">

            <div
              role="radiogroup"
              aria-labelledby="ownProperty-label"
              aria-invalid={!!errors.ownProperty}
              aria-describedby={errors.ownProperty ? 'ownProperty-error' : undefined}
              className="inline-flex rounded-full overflow-hidden border"
            >
              <button
                type="button"
                role="radio"
                aria-checked={ownProperty === 'no'}
                tabIndex={ownProperty === '' || ownProperty === 'no' ? 0 : -1}
                onClick={() => {
                  setOwnProperty('no');
                  if (errors.ownProperty) setErrors({});
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOwnProperty('no');
                    if (errors.ownProperty) setErrors({});
                  }
                }}
                className={`px-4 py-1 text-sm italic transition-colors ${ownProperty === 'no' ? 'bg-soft-navy' : 'hover:bg-royal-navy'}`}
              >
                No
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={ownProperty === 'yes'}
                tabIndex={ownProperty === 'yes' ? 0 : -1}
                onClick={() => {
                  setOwnProperty('yes');
                  if (errors.ownProperty) setErrors({});
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOwnProperty('yes');
                    if (errors.ownProperty) setErrors({});
                  }
                }}
                className={`px-4 py-1 text-sm italic transition-colors ${ownProperty === 'yes' ? 'bg-soft-navy' : 'hover:bg-royal-navy'}`}
              >
                Yes
              </button>
            </div>
            {errors.ownProperty && (
              <p id="ownProperty-error" className="text-sm italic text-red-600">
                {errors.ownProperty}
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

      {errors.ownProperty && (
        <p className="mt-2 text-sm italic text-red-600" role="alert">
          Please select whether you currently own a property.
        </p>
      )}

      {status === 'ok' && (
        <p className="mt-2 text-sm italic text-green-400" role="status">
          Thank you. We’ll be in touch shortly.
        </p>
      )}
      {status === 'err' && (
        <p className="mt-2 text-base italic text-red-400" role="alert">
          Sorry, something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
