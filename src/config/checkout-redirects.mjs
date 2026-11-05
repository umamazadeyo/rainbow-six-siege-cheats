/** Single checkout destination for Rainbow Six Siege cheat tier. */
export const R6_CHECKOUT_URL =
  'https://zadeyo.com/go/UMAMA?to=%2Fproducts%2Frainbow-six-siege';

/** HWID Spoofer checkout (dedicated product URL). */
export const HWID_SPOOFER_CHECKOUT_URL =
  'https://zadeyo.com/go/UMAMA?to=%2Fproducts%2Fhwid-spoofer';

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  r6: R6_CHECKOUT_URL,
  skinChanger: R6_CHECKOUT_URL,
  hwidSpoofer: HWID_SPOOFER_CHECKOUT_URL,
  ugc: R6_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/r6-siege', R6_CHECKOUT_URL],
  ['/go/r6-siege/', R6_CHECKOUT_URL],
  ['/go/dota-2', R6_CHECKOUT_URL],
  ['/go/dota-2/', R6_CHECKOUT_URL],
  ['/go/skin-changer', R6_CHECKOUT_URL],
  ['/go/skin-changer/', R6_CHECKOUT_URL],
  ['/go/hwid-spoofer', HWID_SPOOFER_CHECKOUT_URL],
  ['/go/hwid-spoofer/', HWID_SPOOFER_CHECKOUT_URL],
  ['/go/ugc', R6_CHECKOUT_URL],
  ['/go/ugc/', R6_CHECKOUT_URL],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
