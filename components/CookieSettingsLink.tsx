"use client";

import { OPEN_COOKIES_EVENT } from "./CookieConsent";

// Footer link that reopens the consent banner so visitors can change their choice.
export default function CookieSettingsLink() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event(OPEN_COOKIES_EVENT));
      }}
    >
      Cookies
    </a>
  );
}
