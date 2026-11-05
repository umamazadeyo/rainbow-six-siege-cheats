/** Default production origin when PUBLIC_SITE_ORIGIN is unset at build time. */
export const DEFAULT_SITE_ORIGIN = 'https://r6siegecheat.com';

/** Build-time site origin (Astro `site`, sitemap, robots, canonical). */
export function resolveSiteOrigin() {
  const raw = process.env.PUBLIC_SITE_ORIGIN || process.env.SITE_URL;
  if (raw && String(raw).trim()) {
    return String(raw).replace(/\/$/, '');
  }
  return DEFAULT_SITE_ORIGIN;
}
