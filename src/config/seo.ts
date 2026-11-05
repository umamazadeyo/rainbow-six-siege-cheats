import { t } from '../i18n';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME } from './site';
import { getPageSeoEntry } from './pageSeo';

const envOrigin = import.meta.env.PUBLIC_SITE_ORIGIN as string | undefined;
const siteBuild = import.meta.env.SITE as string | undefined;

/** Must match `<link rel="canonical">` (Astro `site` first). */
export const SITE_ORIGIN = (
  siteBuild?.replace(/\/$/, '') ||
  envOrigin?.replace(/\/$/, '') ||
  `https://${t.site.domain}`
) as string;

export function getSiteOrigin(): string {
  return SITE_ORIGIN;
}

export const DEFAULT_OG_IMAGE = '/images/blog/r6s-multihack-s1.webp';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @R6SiegeCheat */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

function resolveSiteBase(origin?: string): string {
  if (origin) return origin.replace(/\/$/, '');
  const site = import.meta.env.SITE as string | undefined;
  if (site?.trim()) return site.replace(/\/$/, '');
  return SITE_ORIGIN.replace(/\/$/, '');
}

export function canonicalUrl(pathname: string, origin?: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  const base = resolveSiteBase(origin);
  return `${base}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(pathname: string): { title: string; description: string } {
  const entry = getPageSeoEntry(pathname);
  if (entry) return entry;
  return { title: t.site.title, description: t.site.description };
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

/** Document `<title>` for blog posts — avoids duplicate brand words and over-long titles. */
const BLOG_DOCUMENT_TITLES: Record<string, string> = {
  'rainbow-six-siege-cheats-compare-features-pricing':
    'Rainbow Six Siege: Compare Features, Products & Pricing',
  'best-r6-cheats-features-packages': 'Best R6 Cheats – features, utilities & packages compared',
  'buy-r6-siege-cheats-before-you-choose': 'Buy R6 – checklist before choosing a Siege package',
};

export function blogDocumentTitle(slug: string, postTitle: string): string {
  const base = BLOG_DOCUMENT_TITLES[slug] ?? postTitle;
  if (base.length <= 60) return base;
  return base.slice(0, 60).trim();
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
