/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Rainbow Six Siege Cheats & Features | R6 Siege Cheat',
    description:
      'Explore Rainbow Six Siege cheats, features, pricing and available products. Compare R6 cheat options and find the right package for you.',
  },
  '/reviews/': {
    title: 'Rainbow Six Siege Cheat Reviews | R6SiegeCheat',
    description:
      'Read and share customer reviews for Rainbow Six Siege cheats, utilities and support at r6siegecheat.com.',
  },
  '/products/rainbow-six-siege-cheats/': {
    title: 'Rainbow Six Siege Elite Cheats & Utility Products',
    description:
      'Elite Rainbow Six Siege cheats plus HWID spoofer, UGC tools, and Skin Changer utilities for Ubisoft Connect ranked on r6siegecheat.com.',
  },
  '/products/rainbow-six-siege-cheats/elite/': {
    title: 'Rainbow Six Siege Elite Cheats | Bots & Full Map Hack',
    description:
      'Elite tier: auto farm bot, kill steal, skin changer, full map hack suite, and priority patch delivery.',
  },
  '/products/rainbow-six-siege-cheats/utilities/': {
    title: 'Rainbow Six Siege Utilities | HWID, UGC & Skin Changer',
    description:
      'Choose HWID Spoofer, UGC, or Skin Changer—when each utility fits and links to full product pages.',
  },
  '/blog/': {
    title: 'Rainbow Six Siege Cheats Guides & Patch Notes',
    description:
      'Setup guides, Lite vs Pro comparisons, BattlEye patch checklists, and ranked config tips for R6 Siege cheats.',
  },
  '/forum/': {
    title: 'Rainbow Six Siege Community Forum | R6SiegeCheat',
    description: 'Join R6 Siege players to discuss operators, strats, patch changes, guides, and community moments.',
  },
  '/faq/': {
    title: 'FAQ | Rainbow Six Siege Cheats, Products & Setup',
    description:
      'Answers on cheat tiers, map hack, scripts, HWID tools, checkout, and blog guides at r6siegecheat.com.',
  },
  '/terms/': {
    title: 'Terms & Conditions | R6SiegeCheat',
    description:
      'Purchase terms, license use, and refund policy for R6SiegeCheat products sold through r6siegecheat.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | R6SiegeCheat',
    description:
      'How r6siegecheat.com uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About R6SiegeCheat',
    description:
      'What R6SiegeCheat publishes: Rainbow Six Siege cheat tiers, utilities, guides, and status notes at r6siegecheat.com.',
  },
  '/support/': {
    title: 'Support | R6SiegeCheat',
    description:
      'Get help with loader setup, HWID, and checkout for Rainbow Six Siege cheat tiers and utilities.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
