export function JsonldServicePrivate() {
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
        "@id": "https://frontfinancial.com.au/services/private#webpage",
        "url": "https://frontfinancial.com.au/services/private",
        "name": "Private Lending - FRONT Financial",
        "description": "Learn about our private lending services designed for time-sensitive transactions and complex borrower scenarios, including flexible, tailored funding options in Australia.",
        "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
        "about": { "@id": "https://frontfinancial.com.au#org" },
        "inLanguage": "en-AU"
      },
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/private#service",
        "serviceType": "Private Lending",
        "name": "Private Lending",
        "description": "Private lending solutions for Australian borrowers requiring fast, flexible funding for time-sensitive or complex scenarios, delivered by FRONT Financial.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "url": "https://frontfinancial.com.au/services/private"
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

