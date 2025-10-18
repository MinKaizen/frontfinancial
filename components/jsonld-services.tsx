export function JsonldServices() {
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
        "@type": ["WebPage", "CollectionPage"],
        "@id": "https://frontfinancial.com.au/services#webpage",
        "url": "https://frontfinancial.com.au/services",
        "name": "Services - FRONT Financial",
        "description": "Explore residential, commercial, business, and private finance solutions tailored to your needs.",
        "isPartOf": { "@id": "https://frontfinancial.com.au#website" },
        "about": { "@id": "https://frontfinancial.com.au#org" },
        "mainEntity": { "@id": "https://frontfinancial.com.au/services#itemlist" },
        "inLanguage": "en-AU"
      },

      /* Optional but helpful: explicit ItemList of the services */
      {
        "@type": "ItemList",
        "@id": "https://frontfinancial.com.au/services#itemlist",
        "name": "FRONT Financial Services",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": { "@id": "https://frontfinancial.com.au/services/residential#service" }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": { "@id": "https://frontfinancial.com.au/services/commercial#service" }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": { "@id": "https://frontfinancial.com.au/services/business#service" }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": { "@id": "https://frontfinancial.com.au/services/private#service" }
          }
        ]
      },

      /* Lightweight Service nodes (kept concise; link to their pages) */
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/residential#service",
        "serviceType": "Residential Lending",
        "name": "Residential Lending",
        "description": "First and second mortgages, lender selection, and end-to-end deal management for Australian borrowers.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": { "@type": "Country", "name": "Australia" },
        "url": "https://frontfinancial.com.au/services/residential"
      },
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/commercial#service",
        "serviceType": "Commercial Lending",
        "name": "Commercial Lending",
        "description": "Development funding, second mortgages, and short-term secured finance for Australian businesses.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": { "@type": "Country", "name": "Australia" },
        "url": "https://frontfinancial.com.au/services/commercial"
      },
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/business#service",
        "serviceType": "Business Finance",
        "name": "Business Finance",
        "description": "Growth funding, equipment finance, and cash flow support tailored to Australian companies.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": { "@type": "Country", "name": "Australia" },
        "url": "https://frontfinancial.com.au/services/business"
      },
      {
        "@type": "Service",
        "@id": "https://frontfinancial.com.au/services/private#service",
        "serviceType": "Private Lending",
        "name": "Private Lending",
        "description": "Fast, flexible private lending for time-sensitive or complex scenarios in Australia.",
        "provider": { "@id": "https://frontfinancial.com.au#org" },
        "areaServed": { "@type": "Country", "name": "Australia" },
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

