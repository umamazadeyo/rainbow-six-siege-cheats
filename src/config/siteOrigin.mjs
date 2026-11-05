/** Default production origin when PUBLIC_SITE_ORIGIN is unset at build time. */
export const DEFAULT_SITE_ORIGIN = 'https://r6siegecheat.com';

/** Workers preview origin when Cloudflare builds omit PUBLIC_SITE_ORIGIN. */
export const CLOUDFLARE_WORKERS_ORIGIN =
  'https://rainbow-six-siege-cheats.umaimaroziroti.workers.dev';

/** Build-time site origin (Astro `site`, sitemap, robots, canonical). */
export function resolveSiteOrigin() {
  const raw = process.env.PUBLIC_SITE_ORIGIN || process.env.SITE_URL;
  if (raw && String(raw).trim()) {
    return String(raw).replace(/\/$/, '');
  }
  if (process.env.ASTRO_ADAPTER === 'cloudflare') {
    return CLOUDFLARE_WORKERS_ORIGIN;
  }
  return DEFAULT_SITE_ORIGIN;
}
