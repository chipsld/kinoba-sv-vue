import Cookies from '../head/define-global-cookies';

// Cookie-based consent utilities with lightweight DOM event dispatch
const COOKIE_NAME = 'kinoba_consent_v1';

function isHttps() {
  return typeof window !== 'undefined' && window.location?.protocol === 'https:';
}

function dispatchConsentChanged(status) {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(new window.CustomEvent('consent:changed', { detail: { status } }));
}

// By default we return 'postpone' to avoid loading Google Tag Manager before the user has consented
export function getConsent() {
  const cookie = Cookies.get(COOKIE_NAME);
  return cookie || 'postpone';
}

export function setConsent(status) {
  if (status === 'postpone') {
    Cookies.remove(COOKIE_NAME, { path: '/' });
  } else {
    Cookies.set(COOKIE_NAME, status, {
      expires: 365,
      sameSite: 'Lax',
      secure: isHttps(),
      path: '/'
    });
  }
  dispatchConsentChanged(status);
}

export const consent = { getConsent, setConsent };
