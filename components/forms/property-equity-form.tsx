'use client';

import { metaPixel } from '@/utils/metaPixel';
import { useState, useEffect, useCallback, useMemo } from 'react';

// Types
type FormData = {
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
  ownsProperty: string;
  businessStructure: string;
  debtLevel: string;
  urgency: string;
  companyName: string;
  contact_source: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

// Constants
const INITIAL_FORM_DATA: FormData = {
  email: '',
  phone: '',
  firstname: '',
  lastname: '',
  ownsProperty: '',
  businessStructure: '',
  debtLevel: '',
  urgency: '',
  companyName: '',
  contact_source: '',
};

// Validation utilities
const toAuMobileE164 = (input: string) => {
  const d = input.replace(/\D/g, '');
  if (d.startsWith('04') && d.length === 10) return `+61${d.slice(1)}`;
  if (d.startsWith('614') && d.length === 11) return `+${d}`;
  if (d.startsWith('61') && d.length === 11 && d[2] === '4') return `+${d}`;
  if (d.startsWith('4') && d.length === 9) return `+61${d}`;
  return `+${d}`;
};

const AU_MOBILE_E164 = /^\+614\d{8}$/;

const validateField = (field: keyof FormData, value: string): string | null => {
  switch (field) {
    case 'firstname':
      return value.trim().length === 0 ? 'First name is required' : null;
    case 'lastname':
      return value.trim().length === 0 ? 'Last name is required' : null;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value.trim()) ? 'Valid email required' : null;
    case 'phone':
      const normalized = toAuMobileE164(value.trim());
      return !AU_MOBILE_E164.test(normalized)
        ? 'Phone must be an Australian mobile (e.g. 04xx xxx xxx or +61 4xx xxx xxx).'
        : null;
    case 'ownsProperty':
      return value.length === 0 ? 'Please indicate whether you own property' : null;
    case 'businessStructure':
      return value.length === 0 ? 'Please select your business structure' : null;
    case 'debtLevel':
      return value.length === 0 ? 'Please select your debt level' : null;
    case 'urgency':
      return value.length === 0 ? 'Please select urgency level' : null;
    case 'companyName':
      return value.trim().length === 0 ? 'Company name is required' : null;
    default:
      return null;
  }
};

const SELECT_OPTIONS = {
  ownsProperty: [
    { value: 'Yes', label: 'Yes, I own property' },
    { value: 'No', label: 'No, I do not own property' },
  ],
  businessStructure: [
    { value: 'Sole Trader', label: 'Sole Trader' },
    { value: 'Partnership', label: 'Partnership' },
    { value: 'Company (Pty Ltd)', label: 'Company (Pty Ltd)' },
    { value: 'Trust', label: 'Trust' },
    { value: 'Other', label: 'Other' },
  ],
  debtLevel: [
    { value: 'No debt currently', label: 'No debt currently' },
    { value: 'Under $100,000', label: 'Under $100,000' },
    { value: '$100,000 - $500,000', label: '$100,000 - $500,000' },
    { value: '$500,000 - $1,000,000', label: '$500,000 - $1,000,000' },
    { value: 'Over $1,000,000', label: 'Over $1,000,000' },
  ],
  urgency: [
    { value: 'Within a week', label: 'Within a week' },
    { value: 'Within a month', label: 'Within a month' },
    { value: 'Within 3 months', label: 'Within 3 months' },
  ],
} as const;

// Reusable Components
const FloatingLabelInput = ({
  id,
  type,
  label,
  value,
  onChange,
  onBlur,
  autoComplete,
  inputMode,
  error
}: {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  autoComplete?: string;
  inputMode?: 'text' | 'tel' | 'email';
  error?: string;
}) => (
  <div className="relative">
    <div className={`relative border-b pt-3 pb-1 ${error ? 'border-red-500' : ''}`}>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="peer w-full bg-transparent outline-none"
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-0 translate-y-0 text-xs opacity-100 italic transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-70 peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:opacity-100"
      >
        {label}
      </label>
    </div>
    {error && (
      <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
        {error}
      </p>
    )}
  </div>
);

const ChevronIcon = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
  </svg>
);

const SelectField = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  options,
  error
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: readonly { value: string; label: string }[];
  error?: string;
}) => (
  <div className="relative">
    <div className={`relative border-b pt-3 pb-1 ${error ? 'border-red-500' : ''}`}>
      <select
        id={id}
        name={id}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="peer w-full bg-transparent outline-none appearance-none pr-8"
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option className="bg-royal-navy text-tan py-2" value="" disabled hidden>
          {label}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} className="bg-royal-navy text-tan py-2" value={value}>
            {label}
          </option>
        ))}
      </select>
      <ChevronIcon />
    </div>
    {error && (
      <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
        {error}
      </p>
    )}
  </div>
);

export default function PropertyEquityForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [pageUrl, setPageUrl] = useState('');
  const [pageName, setPageName] = useState('');
  const [hutk, setHutk] = useState<string | null>(null);
  // const status = 'ok'
  // const setStatus = () => { }
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  useEffect(() => {
    const href = window.location.href;
    const pathname = window.location.pathname;

    setPageUrl(href);
    setFormData(prev => ({ ...prev, contact_source: href }));
    setPageName(pathname);

    const hutkMatch = document.cookie.match(/hubspotutk=([^;]+)/);
    if (hutkMatch) setHutk(decodeURIComponent(hutkMatch[1]));
  }, []);

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Validate on change if field was already touched
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error || undefined }));
    }
  }, [touched]);

  const handleBlur = useCallback((field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error || undefined }));
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({ ...INITIAL_FORM_DATA, contact_source: formData.contact_source });
    setErrors({});
    setTouched({});
  }, [formData.contact_source]);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      if (field !== 'contact_source') {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          hasErrors = true;
        }
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (hasErrors) {
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/property-equity-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: formData,
          meta: {
            pageUrl,
            pageName,
            ...(hutk && { hutk }),
          },
        }),
      });

      if (res.ok) {
        setStatus('ok');
        resetForm();
        metaPixel('track', 'Lead', { email: formData.email });
      } else {
        setStatus('err');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('err');
    }
  }, [formData, pageUrl, pageName, hutk, resetForm]);

  const buttonStyle = useMemo(() => ({
    ['--len' as string]: '100%',
    ['--thick' as string]: '1px',
    ['--head' as string]: '4px',
  }), []);

  return (
    <>
      {status !== 'ok' && (
        <h2 className="text-tan text-body text-center uppercase max-w-[32em] mx-auto">Book a free consult today and see if your property can unlock equity to clear your business debt.</h2>
      )}
      <div className="max-w-3xl w-full mx-auto mt-8">
        <form onSubmit={onSubmit} className="w-full">
          {status !== 'ok' && (
            <>
              <div className="grid grid-cols-1 gap-x-6 md:gap-x-9 lg:gap-x-12 gap-y-4 md:grid-cols-2">
                <FloatingLabelInput
                  id="email"
                  type="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={(value) => updateField('email', value)}
                  onBlur={() => handleBlur('email')}
                  autoComplete="email"
                  inputMode="email"
                  error={errors.email}
                />

                <FloatingLabelInput
                  id="phone"
                  type="tel"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(value) => updateField('phone', value)}
                  onBlur={() => handleBlur('phone')}
                  autoComplete="tel"
                  inputMode="tel"
                  error={errors.phone}
                />

                <FloatingLabelInput
                  id="firstname"
                  type="text"
                  label="First Name"
                  value={formData.firstname}
                  onChange={(value) => updateField('firstname', value)}
                  onBlur={() => handleBlur('firstname')}
                  autoComplete="given-name"
                  error={errors.firstname}
                />

                <FloatingLabelInput
                  id="lastname"
                  type="text"
                  label="Last Name"
                  value={formData.lastname}
                  onChange={(value) => updateField('lastname', value)}
                  onBlur={() => handleBlur('lastname')}
                  autoComplete="surname"
                  error={errors.lastname}
                />

                <SelectField
                  id="ownsProperty"
                  label="Do you own property?"
                  value={formData.ownsProperty}
                  onChange={(value) => updateField('ownsProperty', value)}
                  onBlur={() => handleBlur('ownsProperty')}
                  options={SELECT_OPTIONS.ownsProperty}
                  error={errors.ownsProperty}
                />

                <SelectField
                  id="businessStructure"
                  label="How is your business currently structured in Australia?"
                  value={formData.businessStructure}
                  onChange={(value) => updateField('businessStructure', value)}
                  onBlur={() => handleBlur('businessStructure')}
                  options={SELECT_OPTIONS.businessStructure}
                  error={errors.businessStructure}
                />

                <SelectField
                  id="debtLevel"
                  label="What's your current level of business debt?"
                  value={formData.debtLevel}
                  onChange={(value) => updateField('debtLevel', value)}
                  onBlur={() => handleBlur('debtLevel')}
                  options={SELECT_OPTIONS.debtLevel}
                  error={errors.debtLevel}
                />

                <SelectField
                  id="urgency"
                  label="How urgent is your inquiry?"
                  value={formData.urgency}
                  onChange={(value) => updateField('urgency', value)}
                  onBlur={() => handleBlur('urgency')}
                  options={SELECT_OPTIONS.urgency}
                  error={errors.urgency}
                />

                <div className="col-span-full">
                  <FloatingLabelInput
                    id="companyName"
                    type="text"
                    label="What's your company name?"
                    value={formData.companyName}
                    onChange={(value) => updateField('companyName', value)}
                    onBlur={() => handleBlur('companyName')}
                    error={errors.companyName}
                  />
                </div>
              </div>

              <input type="hidden" name="contact_source" value={formData.contact_source} />

              <div className="flex pt-4 col-span-full justify-center mt-8">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="pt-2 capitalize tracking-wide cursor-pointer disabled:opacity-60 text-[14px]"
                >
                  {status === 'loading' ? 'Sending…' : 'Submit'}
                  <div className="arrow absolute left-0 bottom-2 px-3" style={buttonStyle} />
                </button>
              </div>
            </>
          )}

          {status === 'ok' && (
            <>
              <p className="font-heading text-center text text-tan" role="status">
                Thanks, you're all set. <br /><br />We look forward to speaking with you. One of our team members will be in touch within 24 hours to confirm your details and check your eligibility. <br /><br />If your request is urgent and you want to express your application please fill in this form and our team will book you in for a discovery call <br /><br /><a href="https://app.middle.finance/ref/94255485-f0db-4f17-b14c-c86b32934c06" className="underline font-bold">Express Form</a>
              </p>
            </>
          )}

          {status === 'err' && (
            <p className="mt-4 text-base italic text-red-500 bg-red-100 px-4 py-2 max-w-max border-l-4 border-red-500" role="alert">
              Sorry, something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </>
  );   
}
