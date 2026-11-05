import { CHECKOUT_URLS, R6_CHECKOUT_URL } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  r6: 'r6-siege',
  skinChanger: 'r6-siege',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover). */
export function checkoutPath(product: CheckoutProduct = 'r6'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout redirect. */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('r6');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
      return checkoutPath('ugc');
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('r6');
  }
}

function internalPathOnly(href: string): string {
  const q = href.indexOf('?');
  const hash = href.indexOf('#');
  let end = href.length;
  if (q >= 0) end = Math.min(end, q);
  if (hash >= 0) end = Math.min(end, hash);
  let path = href.slice(0, end);
  if (!path.startsWith('/')) return path;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    const path = internalPathOnly(href);
    if (path.startsWith('/go/hwid-spoofer')) return checkoutPath('hwidSpoofer');
    if (path.startsWith('/go/ugc')) return checkoutPath('ugc');
    if (path.startsWith('/go/')) return checkoutPath('r6');
    if (path.includes('/hwid-spoofer/')) return checkoutPath('hwidSpoofer');
    if (path.startsWith('/products/rainbow-six-siege-cheats/')) return checkoutPath('r6');
    return href.startsWith('/') ? href : `/${href}`;
  }

  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }

  if (href.includes('zadeyo.com') || href.includes('rainbow-six-siege')) {
    return checkoutPath('r6');
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (
    href.includes('%2Fproducts%2F') ||
    href.includes('/products/cloud-dma') ||
    href.includes('/products/skin-changer') ||
    href.includes('/products/ugc') ||
    href.includes('/products/dota-2') ||
    href.includes('/products/rainbow-six-siege')
  ) {
    return checkoutPath('r6');
  }

  return checkoutPath('r6');
}

export { R6_CHECKOUT_URL };
