export function JsonldServiceBusiness() {
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
        "@id": "https://frontfinancial.com.au/services/business#webpage",
        "url": "https://frontfinancial.com.au/services/business",
        "name": "Business Finance - FRONT Financial",
        "description": "Learn about our business finance services, including growth funding, equipment finance, and cash flow support tailored for Australian businesses",
        "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
        "about": { "@id": "https://frontfinancial.com.au#org" },
        "inLanguage": "en-AU"
      },
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/business#service",
        "serviceType": "Business Finance",
        "name": "Business Finance",
        "description": "We provide tailored business finance solutions including growth funding, equipment finance, and cash flow support for Australian companies.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "url": "https://frontfinancial.com.au/services/business"
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

