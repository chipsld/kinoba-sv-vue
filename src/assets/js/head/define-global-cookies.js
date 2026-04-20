// This file exposes a lightweight Cookie helper as a global for *early* head usage

function encode(value) {
  return encodeURIComponent(String(value));
}

function decode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function get(name) {
  if (typeof document === 'undefined') return undefined;

  const key = `${encode(name)}=`;
  const parts = document.cookie ? document.cookie.split('; ') : [];

  for (const part of parts) {
    if (part.startsWith(key)) {
      return decode(part.slice(key.length));
    }
  }

  return undefined;
}

function set(name, value, options = {}) {
  if (typeof document === 'undefined') return;

  const {
    expires,
    path,
    domain,
    sameSite,
    secure,
  } = options;

  let cookie = `${encode(name)}=${encode(value)}`;

  if (typeof expires === 'number') {
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    cookie += `; Expires=${date.toUTCString()}`;
  } else if (expires instanceof Date) {
    cookie += `; Expires=${expires.toUTCString()}`;
  }

  if (path) cookie += `; Path=${path}`;
  if (domain) cookie += `; Domain=${domain}`;
  if (sameSite) cookie += `; SameSite=${sameSite}`;
  if (secure) cookie += '; Secure';

  document.cookie = cookie;
}

function remove(name, options = {}) {
  set(name, '', { ...options, expires: new Date(0) });
}

const Cookies = { get, set, remove };

if (typeof window !== 'undefined') {
  window.Cookies = Cookies;
}

export default Cookies;
