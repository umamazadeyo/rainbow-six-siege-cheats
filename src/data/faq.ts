import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const elite = link('Rainbow Six Siege Elite', productPath('elite'));
const eliteCheckout = link('Elite checkout page', productPath('elite'));
const eliteModules = link('Elite combat modules', productPath('elite'));
const eliteBots = link('Elite bot automation tier', productPath('elite'));
const lite = link('Lite tier (ESP suite & ESP)', ROUTES.products);
const pro = link('Pro tier (scripts included)', ROUTES.products);
const productsHub = link('Rainbow Six Siege products', ROUTES.products);
const productsCatalog = link('R6 Siege products catalog', ROUTES.products);
const productsOverview = link('products overview hub', ROUTES.products);
const productsListings = link('live product listings', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('UGC', productPath('ugc'));
const skin = link('Skin Changer', productPath('unlock-all'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Rainbow Six Siege cheats are online?',
    a: a('The live status banner is on r6siegecheat.com and in the Discord #status channel. Always check after a Rainbow Six Siege or BattlEye update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Rainbow Six Siege.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party R6 Siege cheats?',
    a: a('Yes—any modification carries risk. BattlEye and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Rainbow Six Siege via Ubisoft Connect on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists cheat tiers, ${hwid}, ${ugc}, and ${skin} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Rainbow Six Siege ESP suite / ESP?',
    a: `ESP suite and operator ESP show defender positions, gadgets and rotates through walls. ${lite} covers awareness overlays. ${pro} and ${elite} add combat modules on top.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP suite and scripts?',
    a: `ESP suite and ESP are information overlays—they do not cast abilities. Recoil control, Trigger timing and Smart Cast are scripts on ${pro} and ${elite}. You can run awareness-only on ${lite}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier do I need for ESP suite only?',
    a: `${lite} is awareness only: operator ESP, gadget locator, rotate timers and FOV tools. ${pro} adds scripts. ${elite} adds bots, kill steal and Skin Changer.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes Recoil control scripts?',
    a: `${pro} ships Recoil control, Trigger timing, Smart Cast and Activator. ${elite} includes everything in Pro plus Utility automation and Trigger assist. ${lite} has no script automation.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `Map awareness only → ${lite}. Ranked gunfights with scripts → ${pro}. Full bot suite and priority patches → ${eliteBots}. Compare on each cheat page or the ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${lite}, ${pro} and ${elite} hides overlays from OBS and Discord share. Test a local recording before going live.`,
  },
  {
    id: 'live-status',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'How do I check if Rainbow Six Siege cheats are online?',
    a: a('Use the live status banner on r6siegecheat.com and Discord #status. Status reflects the current build—not a permanent guarantee. Pause if the banner shows updating, testing, or offline.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP suite safer than scripts?',
    a: a('ESP is quieter in replay than obvious bot patterns, but it is still a cheat. BattlEye does not ignore overlays because you left scripts off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh Ubisoft Connect accounts fail instantly on one PC but work elsewhere—hardware enforcement. Not for account-only BattlEye cases; see ${ugc} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for Ubisoft Connect restrictions and BattlEye bans—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Changer modify my Ubisoft Connect inventory?',
    a: `${skin} previews cosmetics locally on your client. Other players see your real inventory. Included with ${elite}; available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the Ubisoft Connect folder?',
    a: `R6SiegeCheat runs external with cloud config sync—no files injected into the Rainbow Six Siege directory. BattlEye risk still applies. See ${productsCatalog}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog cheat codes the same as ranked cheats?',
    a: `No. Blog articles about Ubisoft console commands apply only in custom lobbies with cheats enabled. Ranked R6 Siege cheats are separate products—see ${lite}, ${pro} and ${elite}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and ${productsOverview}. Checkout runs through our secure partner—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. The ${faqPage} collects product, cheat and blog answers in one place.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who only want map awareness—ESP, wards, runes—and will not touch script automation. If you keep enabling combo scripts, buy ${pro} instead.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `Ranked players who want Recoil control, Trigger timing and Activator with ESP suite included. Pro is the most popular tier at r6siegecheat.com.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Operators who want Utility automation, Trigger assist, Skin Changer and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'BattlEye-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a BattlEye update?',
    a: a('Check r6siegecheat.com status and Discord #status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows version and Rainbow Six Siege client build. Staff walk through loader setup live.'),
  },
  {
    id: 'turbo-ranked',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do tiers work in Turbo and ranked?',
    a: `Yes—${lite}, ${pro} and ${elite} include Turbo and ranked presets in the portal. Tune distance caps and script delay before your first queue.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes FOV tools?',
    a: `FOV tools ships on ${lite} and carries through ${pro} and ${elite}. Extended camera helps lane vision without ward investment.`,
    scopes: ['lite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier includes Utility automation?',
    a: `Utility automation, Lane Control AI and Auto Courier Manager are ${eliteCheckout} only. ${pro} covers combat scripts without bot farming.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Rainbow Six Siege cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. R6SiegeCheat ships portal delivery for ESP, scripts and ESP suite tiers.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title:
    'Siege Cheats FAQ — live status banner on r6siegecheat; products, setup & checkout',
  subtitle: 'Filter plans, ESP, aim tools, products, setup and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'live-status', 'BattlEye-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use console cheat codes in ranked?',
      a: a('No. Ubisoft lobby cheat codes only work in custom games with cheats enabled. Ranked requires separate R6 Siege cheats from r6siegecheat.com tiers.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Awareness guides → ${lite}. Script and combo guides → ${pro}. Bot and kill-steal topics → ${elite}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a lobby first?',
      a: a('Yes. Load conservative presets in a lobby or Turbo before ranked. Tune script delay and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-BattlEye',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee live status?',
      a: a('No article replaces the live status banner. Online/offline labels are point-in-time—stop if status shows updating or offline.'),
    },
  ],
  'Buying Guides': [
    {
      id: 'blog-buying-checkout',
      topic: 'blog',
      icon: 'faqBlogDefault1',
      q: 'Where do I complete purchase after reading this guide?',
      a: `Use the product checkout panel on ${elite}, ${hwid}, ${skin}, or ${ugc}—plans show live USD amounts before Buy now.`,
    },
    {
      id: 'blog-buying-risk',
      topic: 'blog',
      icon: 'faqBlogDefault2',
      q: 'Do these articles guarantee results or safety?',
      a: a('No. Articles explain products and link to official pages. Third-party tools can break after updates and may violate Ubisoft Terms of Use.'),
    },
  ],
  Features: [
    {
      id: 'blog-features-elite',
      topic: 'blog',
      icon: 'faqBlogSlugEsp',
      q: 'Are feature articles only for Elite?',
      a: `Combat features map to ${elite}. Unlock topics map to ${skin}. HWID and UGC articles link to their utility pages when hardware or appeals are the blocker.`,
    },
  ],
  Updates: [
    {
      id: 'blog-updates-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'What should I do when status shows updating?',
      a: a('Pause ranked, download the newest portal loader when available, import fresh presets, and test in a low-stakes mode before returning.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${lite}, ${pro}, ${eliteModules} and ${productsListings}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Rainbow Six Siege update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (
    slug.includes('map-hack') ||
    slug.includes('esp') ||
    slug.includes('wallhack') ||
    slug.includes('ward')
  ) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers ESP suite from this article?',
      a: `${lite} includes operator ESP, gadget locator and rotate timers. ${pro} adds combat scripts on the same overlay stack.`,
    });
  }
  if (
    slug.includes('script') ||
    slug.includes('combo') ||
    slug.includes('auto-combo') ||
    slug.includes('aimbot') ||
    slug.includes('recoil')
  ) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes the scripts in this article?',
      a: `${pro} and ${elite} ship Recoil control and related modules. ${lite} is ESP suite only.`,
    });
  }
  if (
    slug.includes('hwid') ||
    slug.includes('ban') ||
    slug.includes('BattlEye') ||
    slug.includes('dma') ||
    slug.includes('unlock')
  ) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or UGC products?',
      a: `Recovery guides complement ${hwid} and ${ugc}—read product pages for workflow scope and realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP & hero boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Gadget & camera locator', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Rotate objective timers', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'FOV tools', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'MiniESP suite overlay', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Recoil control scripts', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Trigger timing & Smart Cast', icon: 'compareTrigger timing' as const, lite: false, pro: true, elite: true },
  { feature: 'Target Selector', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Utility gadget activator', icon: 'compareActivator' as const, lite: false, pro: true, elite: true },
  { feature: 'Ability radius drawing', icon: 'compareAbilityRadius' as const, lite: false, pro: true, elite: true },
  { feature: 'Smoke alert integration', icon: 'compareSmokeAlert' as const, lite: false, pro: true, elite: true },
  { feature: 'Utility automation', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Trigger assist', icon: 'compareAutoKillSteal' as const, lite: false, pro: false, elite: true },
  { feature: 'Gadget timing', icon: 'compareAutoDagon' as const, lite: false, pro: false, elite: true },
  { feature: 'Full ESP suite suite', icon: 'compareFullMapHack' as const, lite: false, pro: false, elite: true },
  { feature: 'Skin Changer (Unlock All)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct dev Discord support', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
