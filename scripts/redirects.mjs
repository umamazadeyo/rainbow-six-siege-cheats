/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/rainbow-six-siege-cheats/'],
  ['/cheats/', '/products/rainbow-six-siege-cheats/'],
  ['/cheats/lite', '/products/rainbow-six-siege-cheats/'],
  ['/cheats/lite/', '/products/rainbow-six-siege-cheats/'],
  ['/cheats/pro', '/products/rainbow-six-siege-cheats/'],
  ['/cheats/pro/', '/products/rainbow-six-siege-cheats/'],
  ['/cheats/elite', '/products/rainbow-six-siege-cheats/elite/'],
  ['/cheats/elite/', '/products/rainbow-six-siege-cheats/elite/'],
  ['/cheats/compare', '/blog/rainbow-six-siege-cheats-compare-features-pricing/'],
  ['/cheats/compare/', '/blog/rainbow-six-siege-cheats-compare-features-pricing/'],
  ['/products/rainbow-six-siege-cheats/utilities', '/products/rainbow-six-siege-cheats/utilities/'],
  ['/products/rainbow-six-siege-cheats', '/products/rainbow-six-siege-cheats/'],
  ['/products/rainbow-six-siege-cheats/account-recovery', '/products/rainbow-six-siege-cheats/ugc/'],
  ['/products/rainbow-six-siege-cheats/account-recovery/', '/products/rainbow-six-siege-cheats/ugc/'],
  ['/reviews', '/reviews/'],
  ['/products/dota-2-cheats', '/products/rainbow-six-siege-cheats/'],
  ['/products/dota-2-cheats/', '/products/rainbow-six-siege-cheats/'],
  ['/products/dota-2-cheats/elite', '/products/rainbow-six-siege-cheats/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/rainbow-six-siege-cheats/elite/'],
  ['/products/dota-2-cheats/utilities', '/products/rainbow-six-siege-cheats/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/rainbow-six-siege-cheats/utilities/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
