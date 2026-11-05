// Sends custom events to Google Tag Manager's dataLayer.
// In GTM each event needs a "Custom Event" trigger + a GA4 Event tag to reach Analytics
// (see the setup notes). Consent Mode applies: without consent GA4 gets cookieless pings.
//
// Events:
//   form_start      first interaction with the contact form (once per page view)
//   generate_lead   form sent successfully            → mark as Key event in GA4
//   form_error      validation or server error        (error_type: validation | server)
//   cta_click       click on any link to /contacto     (cta_text, cta_location)
//   contact_click   click on email / phone links      (contact_method: email | phone)

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
