export function JsonldServiceResidential() {
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
        "@id": "https://frontfinancial.com.au/services/residential#webpage",
        "url": "https://frontfinancial.com.au/services/residential",
        "name": "Residential Lending - FRONT Financial",
        "description": "Learn about our residential lending services, including first and second mortgages, lender selection, and end-to-end deal management for Australian borrowers.",
        "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
        "about": { "@id": "https://frontfinancial.com.au#org" },
        "inLanguage": "en-AU"
      },
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/residential#service",
        "serviceType": "Residential Lending",
        "name": "Residential Lending",
        "description": "Residential lending solutions covering first and second mortgages, lender selection, and full deal management for Australian borrowers.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "url": "https://frontfinancial.com.au/services/residential"
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

