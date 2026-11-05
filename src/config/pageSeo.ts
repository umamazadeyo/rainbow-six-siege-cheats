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
    title: 'Rainbow Six Siege Cheats – pricing and available products',
    description:
      'Explore Rainbow Six Siege cheats, features, pricing and available products. Compare R6 cheat options and find the right package for you.',
  },
  '/reviews/': {
    title: 'Rainbow Six Siege Cheat Reviews | R6SiegeCheat',
    description:
      'Read and share customer reviews for Rainbow Six Siege cheats, utilities and support at r6siegecheat.com.',
  },
  '/products/rainbow-six-siege-cheats/': {
    title: 'Esp Aimbot – RAINBOW SIX SIEGE Cheats — Product Details',
    description:
      'Undetected RAINBOW SIX SIEGE cheats with player ESP, aimbot, and recoil control. Monthly and lifetime access. Updated for current patches.',
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
    title: 'Blogs – Rainbow Six Siege Cheats Guides & Patch Notes',
    description:
      'Blogs: Setup guides, Lite vs Pro comparisons, BattlEye patch checklists, and ranked config tips for R6 Siege cheats on Ubisoft Connect PC.',
  },
  '/forum/': {
    title: 'Community – Join R6 Siege players to discuss operators',
    description:
      'Join R6 Siege players to discuss operators, strats, patch changes, guides, and community moments. Rainbow Six Siege community forum at R6SiegeCheat.',
  },
  '/faq/': {
    title: 'Siege Cheats – The live status banner is on r6siegecheat',
    description:
      'Siege Cheats: Answers on cheat tiers, map hack, scripts, HWID tools, checkout, and blog guides at r6siegecheat.com for PC players.',
  },
  '/terms/': {
    title: 'Terms & Conditions | R6SiegeCheat',
    description:
      'Purchase terms, license use, and refund policy for R6SiegeCheat products sold through r6siegecheat.com.',
  },
  '/privacy/': {
    title: 'Privacy – analytics, cookies & contact data | R6SiegeCheat',
    description:
      'Privacy: How r6siegecheat.com uses analytics, cookies, and contact data when you browse or request support. R6 Siege Cheat policy summary.',
  },
  '/about/': {
    title: 'R6siegecheat – tier comparisons, setup guides & status',
    description:
      'What R6SiegeCheat publishes: Rainbow Six Siege cheat tiers, utilities, guides, and live status notes for PC players at r6siegecheat.com.',
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
