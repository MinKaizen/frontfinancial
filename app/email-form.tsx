'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    const res = await fetch('/api/email-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    console.log(res)

    if (res.ok) {
      setStatus('ok');
      // Fire Meta Pixel event (if pixel is present on the page)
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', { email });
      } else {
        console.warn('No meta pixel was found! "Lead" event was not sent')
      }
      setEmail('');
    } else {
      setStatus('err');
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm lg:max-w-3xl">
      <div className="flex items-center justify-between border-b py-3">
        <input
          type="email"
          required
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent outline-none placeholder:italic"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="ml-4 shrink-0 capitalize tracking-wide cursor-pointer italic"
        >
          {status === 'loading' ? 'Sending…' : 'Submit'}
        </button>
      </div>

      {status === 'ok' && (
        <p className="mt-2 text-sm italic text-green-600" role="status">
          Thank you. We’ll be in touch shortly.
        </p>
      )}
      {status === 'err' && (
        <p className="mt-2 text-sm italic text-red-600" role="alert">
          Sorry, something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
