import posthog from 'posthog-js'

const prodDomain = process.env.NEXT_PUBLIC_PROD_DOMAIN || 'frontfinancial.com.au'
const prodDomains = [
  prodDomain,
  `www.${prodDomain}`,
]
const isProdDomain = typeof window !== 'undefined' && prodDomains.includes(window.location.hostname)

if (isProdDomain) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-11-30'
  });
} else {
  console.log(`Not on a prod domain. Skipping Posthog initialization...`)
}


