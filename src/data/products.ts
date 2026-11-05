import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import {
  ELITE_PRODUCT_IMAGES,
  HWID_SPOOFER_IMAGES,
  HERO_CAROUSEL_SLIDES,
  LEVO_UTILITY_IMAGES,
  UGC_IMAGES,
  UNLOCK_ALL_IMAGES,
} from './siteImages';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: [
    'r6-esp-cheats-player-visuals',
    'rainbow-six-siege-wallhack-options',
    'r6-cheats-for-pc-windows-requirements',
  ],
  pro: [
    'r6-aimbot-features-settings',
    'r6-no-recoil-cheats-weapon-support',
    'best-r6-cheats-features-packages',
  ],
  elite: [
    'rainbow-six-siege-cheats-compare-features-pricing',
    'best-r6-cheats-features-packages',
    'r6-esp-cheats-player-visuals',
    'r6-cheats-after-game-updates-compatibility',
    'buy-r6-siege-cheats-before-you-choose',
  ],
  'hwid-spoofer': [
    'buy-r6-siege-cheats-before-you-choose',
    'r6-cheats-for-pc-windows-requirements',
    'r6-cheats-after-game-updates-compatibility',
    'r6-dma-cheats-hardware-requirements',
  ],
  ugc: [
    'rainbow-six-siege-cheats-support-setup-purchase',
    'buy-r6-siege-cheats-before-you-choose',
    'r6-cheats-after-game-updates-compatibility',
  ],
  'unlock-all': [
    'r6-unlock-all-cosmetic-unlocker',
    'rainbow-six-siege-cheats-price-plans-value',
    'rainbow-six-siege-cheat-packages-included',
  ],
};

const productBase = '/products/rainbow-six-siege-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on r6siegecheat.com and Discord #status before purchase—especially after a Rainbow Six Siege or BattlEye update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite R6 Siege cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Ubisoft Connect platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue ranked or Turbo.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Rainbow Six Siege and BattlEye receive frequent updates. Confirm module availability on the live status panel at r6siegecheat.com before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Rainbow Six Siege can violate Ubisoft Terms of Use and lead to BattlEye bans or account action. You use this software at your own risk. Compatibility and availability can change after game, BattlEye, or Windows updates without notice.';

const siegeSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Rainbow Six Siege client via Ubisoft Connect with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Rainbow Six Siege published hardware requirements.' },
];

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'rainbow-six-siege-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Rainbow Six Siege Lite is built for players who want map awareness first. In ranked, knowing defender positions, gadget placements and rotate timing wins more fights than raw mechanics—Lite gives you that edge without combat automation.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Recoil control and bot modules entirely. Your gameplay looks natural while ESP overlays and FOV tools and rotate timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Rainbow Six Siege Pro is the sweet spot for ranked grinders. Recoil control, Trigger timing and Smart Cast help you win teamfights without obvious bot patterns—when you tune Delay Setting using our portal presets.',
    },
    { type: 'h2', text: 'Scripts + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Recoil control, Target Selector, Activator and ability radius drawing. You see the fight before it starts and win it with scripts that stay human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Rainbow Six Siege Elite is the private build for players who want everything—Utility automation, Trigger assist, Gadget timing, Skin Changer, full ESP suite and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first ranked queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Operator ESP with distance and name tags, gadget and camera locator, rotate objective timers, FOV tools, and stream-safe overlay hiding. Config presets for ranked and Quick Match ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Scripts and automation' },
    {
      type: 'p',
      text: 'Recoil control, Trigger timing, Smart Cast with Prediction, Target Selector and Activator for utility gadgets. Delay Setting tunes cast timing so scripts stay natural in ranked. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at r6siegecheat.com—enough firepower for high-MMR lobbies without Elite slot limits. Pair with our scripts guide in the blog before your first ranked session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Utility automation, site control helpers, Trigger assist, Gadget timing, Skin Changer and full ESP suite with smoke alerts. Use custom games before ranked—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Ubisoft Connect accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only BattlEye cases; see [UGC](/products/rainbow-six-siege-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Ubisoft Connect restrictions, BattlEye bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some BattlEye bans cannot be reversed. UGC organizes evidence and follow-ups for Ubisoft review. Pair with [HWID Spoofer](/products/rainbow-six-siege-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: LEVO_UTILITY_IMAGES,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: siegeSystemRequirements,
    fullFeatures: [
      'Player ESP & hero boxes',
      'Gadget & camera locator',
      'Jungle camp awareness',
      'Ability cooldown tracking',
      'MiniESP suite overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Rotate objective timers',
      'FOV tools',
      'Turbo preset config',
      'Ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear Rainbow Six Siege awareness workflow',
      paragraphs: [
        'Rainbow Six Siege Lite focuses on operator ESP, gadget locator, rotate timers and FOV tools—everything you need to track flanks and map control without script automation. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before your first queue.',
        'Lite is the entry path for ranked and quick match players who want map awareness with minimal report risk. No Recoil control, no bots—just readable overlays maintained every patch at r6siegecheat.com.',
      ],
    },
  },
  pro: {
    images: LEVO_UTILITY_IMAGES,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: siegeSystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP suite modules',
      'Recoil control scripts',
      'Trigger timing',
      'Smart Cast & Prediction',
      'Target Selector',
      'Utility gadget activator',
      'Auto Heal',
      'Ability radius drawing',
      'Delay Setting tuning',
      'Hero-specific script profiles',
      'Smoke alert integration',
      'Ranked-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear Rainbow Six Siege scripts workflow',
      paragraphs: [
        'Rainbow Six Siege Pro adds Recoil control, Trigger timing, Smart Cast and Activator on top of every Lite module. Operator profiles, delay tuning and activation keys live in one scripts tab—tuned for ranked lobbies when you start with portal presets, not max sliders.',
        'Pro is the most popular tier: enough firepower for ranked and quick match without Elite slot limits. Target Selector and Activator keep you efficient mid-fight while scripts stay human at default settings.',
      ],
    },
  },
  elite: {
    images: ELITE_PRODUCT_IMAGES,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: siegeSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Utility automation',
      'Lane Control AI',
      'Stack timer',
      'Auto Courier Manager',
      'Trigger assist',
      'Gadget timing',
      'Full ESP suite suite',
      'Smoke alert system',
      'Vision detector',
      'Skin Changer (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full Rainbow Six Siege operator workflow',
      paragraphs: [
        'Rainbow Six Siege Elite is the private build with Utility automation, Trigger assist, Gadget timing, Skin Changer, full ESP suite and priority patch delivery. Every Lite and Pro module is included—no caps, no upsells inside the loader.',
        'Elite slots are limited so patch cycles stay fast and builds stay maintainable. Direct dev support in Discord helps you tune conservative profiles before ranked. Check the status banner on r6siegecheat.com before purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: HWID_SPOOFER_IMAGES,
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Rainbow Six Siege.',
    limitations:
      'Spoofing does not help account-only BattlEye cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Rainbow Six Siege after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps Rainbow Six Siege players recover when BattlEye flags PC hardware but the Ubisoft Connect account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only BattlEye cases. After spoof, load a conservative cheat profile from r6siegecheat.com before queuing ranked.',
      ],
    },
  },
  ugc: {
    images: UGC_IMAGES,
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent BattlEye bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on r6siegecheat.com or at checkout on r6siegecheat.com.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: UNLOCK_ALL_IMAGES,
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Ubisoft Connect inventory or store state. Other players cannot see previewed arcanas or sets.',
    systemRequirements: siegeSystemRequirements,
    fullFeatures: [
      'Operator skin swap',
      'Elite skin preview',
      'Weapon & effect customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Ward & courier replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse operator elite skins and finishes and exclusive sets locally in Rainbow Six Siege—searchable catalog, favorites, and loadout export without modifying live Ubisoft Connect purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Rainbow Six Siege Lite' : cheat.name === 'Pro' ? 'Rainbow Six Siege Pro' : 'Rainbow Six Siege Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = HERO_CAROUSEL_SLIDES;

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Elite R6 Siege cheats, HWID spoofer, UGC recovery, and cosmetic utilities for Rainbow Six Siege on PC.',
  buyUrl: checkoutPath('r6'),
};
