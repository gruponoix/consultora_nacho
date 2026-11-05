import Script from "next/script";
import { GOOGLE_TAG_ID } from "@/lib/seo";

// Google tag with Consent Mode v2. Analytics/ads storage starts DENIED (no cookies)
// until the visitor accepts in <CookieConsent />, as Spanish law (LSSI/RGPD) requires.
// A previous choice saved in localStorage is applied before the tag loads.
const init = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var granted = false;
try { granted = localStorage.getItem('kietel-consent') === 'granted'; } catch (e) {}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: granted ? 'granted' : 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
`;

export default function GoogleTag() {
  return (
    <>
      <Script id="google-consent" strategy="afterInteractive">
        {init}
      </Script>
      <Script
        id="google-tag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_ID}`}
      />
    </>
  );
}
