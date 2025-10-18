export function JsonldServiceCommercial() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://frontfinancial.com.au#org",
        "name": "FRONT Financial",
        "url": "https://frontfinancial.com.au"
      },
      {
        "@type": "WebSite",
        "@id": "https://frontfinancial.com.au#website",
        "url": "https://frontfinancial.com.au",
        "name": "FRONT Financial"
      },
      {
        "@type": "WebPage",
        "@id": "https://frontfinancial.com.au/services/commercial#webpage",
        "url": "https://frontfinancial.com.au/services/commercial",
        "name": "Commercial Lending - FRONT Financial",
        "description": "We provide commercial lending solutions including development funding, second mortgages, and short-term secured finance for Australian businesses.",
        "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
        "about": { "@id": "https://frontfinancial.com.au#org" },
        "inLanguage": "en-AU"
      },
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/commercial#service",
        "serviceType": "Commercial Lending",
        "name": "Commercial Lending",
        "description": "Tailored commercial lending: development funding, second mortgages, and short-term secured finance designed to meet timeline and security constraints.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "url": "https://frontfinancial.com.au/services/commercial"
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

