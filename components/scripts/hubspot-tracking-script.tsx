import Script from "next/script";

export function HubspotTrackingScript () {
  return (
    <Script
      id="hs-script-loader"
      strategy="afterInteractive"
      src={`//js-ap1.hs-scripts.com/${process.env.HUBSPOT_PORTAL_ID}.js`}
    />
  );
}
