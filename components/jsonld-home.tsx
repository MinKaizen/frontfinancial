export function JsonldHome() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://frontfinancial.com.au#org",
        "name": "FRONT Financial",
        "url": "https://frontfinancial.com.au",
        "logo": "https://frontfinancial.com.au/frontfinancial-logo-primary-royal-navy.svg",
        "sameAs": [
          "https://www.linkedin.com/company/front-financial",
          "https://www.instagram.com/frontfinancial.au/",
          "https://www.facebook.com/share/i2NiRH9ZcRf7fPAY/?mibextid=LQQJ4d"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://frontfinancial.com.au#website",
        "url": "https://frontfinancial.com.au",
        "name": "FRONT Financial",
        "publisher": { "@id": "https://frontfinancial.com.au#org" },
        "inLanguage": "en-AU"
      },
      {
        "@type": "WebPage",
        "@id": "https://frontfinancial.com.au/#webpage",
        "url": "https://frontfinancial.com.au/",
        "name": "FRONT Financial",
        "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
        "about": { "@id": "https://frontfinancial.com.au#org" },
        "inLanguage": "en-AU"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

