import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_INVITE_URL } from '../config/discord';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Rainbow Six Siege Cheats',
    domain: 'r6siegecheat.com',
    title: 'Rainbow Six Siege Cheats & Features | R6 Siege Cheat',
    description:
      'Explore Rainbow Six Siege cheats, features, pricing and available products. Compare R6 cheat options and find the right package for you.',
    discord: DISCORD_INVITE_URL,
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: `${productBase}`, label: 'Products' },
    { href: '/reviews/', label: 'Review' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'R6 Siege — season build online',
    eyebrow: 'BUILT FOR RAINBOW SIX SIEGE',
    titleLine1: 'Rainbow Six Siege Cheats',
    titleLine2: '',
    subtitle:
      'Explore Rainbow Six Siege cheat features, available products, and pricing. Compare your options and find the right setup for your needs.',
    ctaPrimary: 'View products',
    ctaDiscord: 'See Discord',
    modesLabel: 'R6 Siege modes',
    modes: ['Ranked', 'Unranked', 'Quick Match', 'Custom'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Aim & Recoil, map control and utility tools for Rainbow Six Siege, maintained every patch.',
    items: [
      {
        title: 'Aim & Recoil',
        subtitle: 'Combo. Cast. Win.',
        desc: 'Full script engine for ranked and quick match— tuned for Ash, Lion, PA and dozens of entry operators.',
        bullets: [
          'Recoil control chains for Ash, Lion, PA and burst cores',
          'Smart trigger timing and trigger timing for entry fraggers',
          'Smart Cast with humanized delay sliders',
          'Prediction modules for lean peeks and quick scopes',
          'Portal presets per operator, role and game mode',
        ],
        tags: ['Rainbow Six Siege Aim & Recoil', 'Recoil control', 'smart cast'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'ESP / ESP',
        subtitle: 'See pushes before they hit.',
        desc: 'Vision advantage without guessing—ESP stays readable in teamfights and when multiple defenders swing your push.',
        bullets: [
          'operator boxes, HP bars and cooldown readouts',
          'Gadget and camera locator with range hints',
          'Smoke, TP and missing-enemy alerts',
        ],
        tags: ['Rainbow Six Siege ESP', 'Rainbow Six Siege esp', 'gadget esp'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Minimap & rotates',
        subtitle: 'Map control without droning.',
        desc: 'Timers and minimap overlays so you rotate on objectives, rotates, and push timing—not guesswork.',
        bullets: ['Objective and rotate countdowns', 'Enemy last-seen on miniESP', 'Flank and hatch reminders'],
        tags: ['miniESP', 'rotate timer', 'map awareness'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Recoil control',
        subtitle: 'Land Combos Like a Pro.',
        desc: 'One-key bursts with sane defaults for ranked—tighten timings as you get comfortable.',
        bullets: ['Target Selector for focus fire', 'Activator for utility gadgets and secondary fire', 'Per-operator recoil chains in portal'],
        tags: ['Recoil control', 'activator', 'target selector'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Clutch Moments.',
        desc: 'Operator Skins, kill steal, Gadget timing and more—beyond raw Aim & Recoil and ESP.',
        bullets: [
          'Operator Skins: Preview elite skins and weapon finishes locally',
          'Trigger assist: Finish low-HP enemies with perfect timing',
          'Gadget timing: Lethal item activation at combo end',
          'Stream Proof: Hide overlays from OBS capture',
        ],
        tags: ['Operator Skins', 'kill steal', 'stream proof'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Utility automation',
        subtitle: 'Efficient Farm. Zero Tilt.',
        desc: 'Recover net worth when lanes go wrong—automation stays humanized to avoid obvious bot paths.',
        bullets: [
          'Site hold and utility timing under pressure',
          'Roaming pathing with stack timing',
          'Safe retreat when defenders show on ESP',
          'Quick Match-friendly farm presets',
        ],
        tags: ['auto farm', 'last hit bot', 'stack timing'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'FOV tools',
        subtitle: 'See More of the Fight.',
        desc: 'Pull camera back for map awareness without losing recoil control in narrow angles.',
        bullets: ['Distance caps per game mode', 'Quick reset to default FOV', 'Pairs with minimap ESP'],
        tags: ['FOV tools', 'camera', 'vision'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC—portal updates track Rainbow Six Siege and BattlEye patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches—not promises',
    subtitle:
      'Most Rainbow Six Siege cheat shops ship stale loaders, obvious automation, and ticket bots. We built r6siegecheat.com around patch-day delivery, humanized Aim & Recoil, and live operators.',
    usLabel: 'R6SiegeCheat',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'BattlEye-aware builds pushed within hours of Rainbow Six Siege updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized Aim & Recoil & delays',
        desc: 'Delay Setting, Target Selector and conservative defaults mimic high-rank timing—not instant bot bursts that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, operator configs and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Rainbow Six Siege process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Ranked, Quick Match and per-Operator profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Rainbow Six Siege or BattlEye changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Ubisoft Connect PC players running Aim & Recoil, ESP and utilities on r6siegecheat.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue Rainbow Six Siege on Ubisoft Connect PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import ranked or Quick Match presets, and tune Aim & Recoil plus ESP sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Rainbow Six Siege',
        desc: 'Check the live status banner, launch Ubisoft Connect Rainbow Six Siege, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Rainbow Six Siege after updates.',
    items: ['Windows 10 & 11', 'Ubisoft Connect', 'Rainbow Six Siege client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Rainbow Six Siege Elite cheats',
    subtitle: 'Full ranked suite—ESP, Aim & Recoil, bots, Operator Skins, and priority patch delivery.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Rainbow Six Siege Elite',
        desc: 'Private Rainbow Six Siege cheats build with Utility automation, Trigger assist, Gadget timing, Operator Skins and direct dev support.',
        features: ['Utility automation', 'Trigger assist', 'Gadget timing', 'Full ESP suite', 'Operator Skins', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Rainbow Six Siege products',
    subtitle: 'Elite R6 Siege cheats plus HWID, UGC recovery, Operator Skins, and utility tools.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching Rainbow Six Siege.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Ubisoft Connect restrictions, BattlEye bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Operator Skins',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Lightweight Operator Skins for operator outfits, weapon skins and rare variants—local preview without Ubisoft Connect store purchases.',
        features: ['Operator skin swap', 'Weapon & effect customizer', 'Elite skin preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Buying guides, feature comparisons, setup walkthroughs, and patch-day checks for Rainbow Six Siege cheats.',
    latestTitle: 'All Blogs',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Buying Guides',
        title: 'Rainbow Six Siege Cheats: Compare Features, Products & Pricing',
        slug: 'rainbow-six-siege-cheats-compare-features-pricing',
        image: '/images/blog/r6s-multihack-s1.webp',
        desc: 'Side-by-side look at Elite, HWID spoofer, Operator Skins, and UGC—features, pricing, and fit.',
        date: 'Nov 5, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Buying Guides',
        title: 'Buy R6 Siege Cheats: What to Check Before Choosing a Package',
        slug: 'buy-r6-siege-cheats-before-you-choose',
        image: '/images/blog/1.webp',
        desc: 'Status, compatibility, plan choice, and support paths before you buy r6 cheats.',
        date: 'Oct 12, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Buying Guides',
        title: 'Best R6 Cheats: Comparing Available Features and Packages',
        slug: 'best-r6-cheats-features-packages',
        image: '/images/blog/2.webp',
        desc: 'How to evaluate the best r6 cheats option by modules, utilities, and maintenance.',
        date: 'Sep 17, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Buying Guides',
        title: 'Rainbow Six Siege Cheats Price: Plans, Features & Value Compared',
        slug: 'rainbow-six-siege-cheats-price-plans-value',
        image: '/images/blog/4.webp',
        desc: 'Published USD plans for Elite, HWID, Operator Skins, and UGC.',
        date: 'Aug 9, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Setup',
        title: 'R6 Cheat Download: Product Compatibility, Requirements & Setup',
        slug: 'r6-cheat-download-compatibility-setup',
        image: '/images/blog/6.webp',
        desc: 'Portal delivery, Windows requirements, and loader setup for Rainbow Six Siege.',
        date: 'Jul 21, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Features',
        title: 'R6 Aimbot: Features, Settings & Available Options',
        slug: 'r6-aimbot-features-settings',
        image: '/images/blog/7.webp',
        desc: 'Aim assist and recoil tuning on Elite—settings and realistic expectations.',
        date: 'Jul 2, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Features',
        title: 'R6 ESP Cheats: Player ESP, Visual Features & Product Options',
        slug: 'r6-esp-cheats-player-visuals',
        image: '/images/blog/1r61.png',
        desc: 'Operator ESP, gadget cues, and ranked readability on Elite.',
        date: 'Jun 14, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Features',
        title: 'Rainbow Six Siege Wallhack: Features & Available Options',
        slug: 'rainbow-six-siege-wallhack-options',
        image: '/images/blog/1r62.png',
        desc: 'Through-wall awareness as part of Elite ESP—tuning and limits.',
        date: 'May 26, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Features',
        title: 'R6 No Recoil Cheats: Weapon Support, Settings & Options',
        slug: 'r6-no-recoil-cheats-weapon-support',
        image: '/images/blog/r6s3 (1).webp',
        desc: 'Recoil profiles inside Elite and post-patch config hygiene.',
        date: 'May 7, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Features',
        title: 'R6 DMA Cheats: Hardware Requirements, Features & Compatibility',
        slug: 'r6-dma-cheats-hardware-requirements',
        image: '/images/blog/1r63.webp',
        desc: 'DMA market context vs our external Elite loader—honest boundaries.',
        date: 'Apr 18, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Features',
        title: 'R6 Unlock All: Cosmetic Unlocker Features & Product Details',
        slug: 'r6-unlock-all-cosmetic-unlocker',
        image: '/images/blog/r6s5 (1).webp',
        desc: 'Operator Skins utility, Elite bundling, and local preview rules.',
        date: 'Mar 29, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Setup',
        title: 'R6 Cheats for PC: Windows Compatibility & System Requirements',
        slug: 'r6-cheats-for-pc-windows-requirements',
        image: '/images/blog/r65 (1).webp',
        desc: 'Windows 10/11, Ubisoft Connect, and baseline PC requirements.',
        date: 'Mar 11, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Buying Guides',
        title: 'Rainbow Six Siege Cheat Packages: Which Features Are Included?',
        slug: 'rainbow-six-siege-cheat-packages-included',
        image: '/images/blog/zadeyo-rainbowsixsiege-1-visuals.webp',
        desc: 'Decode Elite vs utility packages before checkout.',
        date: 'Feb 22, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Updates',
        title: 'R6 Cheats After Game Updates: Compatibility, Maintenance & Status',
        slug: 'r6-cheats-after-game-updates-compatibility',
        image: '/images/blog/zadeyo-rainbowsixsiege-2-aimbot.webp',
        desc: 'Patch-day status checks, loader reloads, and config resets.',
        date: 'Feb 3, 2026',
        readTime: '3 min read',
      },
      {
        tag: 'Buying Guides',
        title: 'Rainbow Six Siege Cheats: Product Support, Setup & Purchase Information',
        slug: 'rainbow-six-siege-cheats-support-setup-purchase',
        image: '/images/blog/levo-rainbowsixsiege-1-visuals.webp',
        desc: 'Purchase flow, Discord support, FAQ links, and transparency.',
        date: 'Jan 14, 2026',
        readTime: '3 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Aim & Recoil', title: 'Recoil profiles that adapt to your operator', desc: 'Recoil control, Smart trigger timing, Smart Cast and Delay Setting in one Aim & Recoil tab.' },
      { num: '02', label: 'Vision', title: 'ESP that stays readable', desc: 'Filter by distance, team color, ward type and smoke alert sensitivity.' },
      { num: '03', label: 'Minimap', title: 'Runes and rotates on lock', desc: 'Rotate timers, enemy hints and miniESP on a compact overlay.' },
      { num: '04', label: 'Heroes', title: 'Per-operator config profiles', desc: 'Save Ash, Lion, PA and support Aim & Recoil and swap with hotkeys.' },
      { num: '05', label: 'Bots', title: 'Utility automation', desc: 'Utility automation, stack timer and config sync for efficient farming.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, Quick Match and casual presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Rainbow Six Siege profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check BattlEye status',
        desc: 'Read the live banner on r6siegecheat.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches your ranked goals.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save ranked and quick match presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Rainbow Six Siege plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or operator configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  discordSection: {
    eyebrow: 'Community',
    title: 'Join our Discord',
    subtitle:
      'Live operators, patch status, and setup help—talk to the team before and after checkout.',
    cardTitle: 'R6SiegeCheat Discord server',
    cardLead:
      'Join the community for loader walkthroughs, #status updates after Siege patches, and hands-on support from engineers—not copy-paste ticket bots.',
    bullets: [
      'Patch-day build notes and maintenance alerts',
      'Loader, HWID, and portal setup help from live staff',
      'Conservative config tips for ranked and Quick Match',
    ],
    note: 'Opens Discord in a new tab. You must be signed in to Discord to accept the invite.',
    cta: 'Join Discord',
  },
  support: {
    eyebrow: 'Support',
    title: 'R6SiegeCheat support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'messageCircle',
        title: 'Discord support',
        desc: 'Discord engineers on shift 24/7 for loader, HWID, and account issues.',
        linkLabel: 'Join Discord',
        href: DISCORD_INVITE_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on r6siegecheat.com or via our secure checkout.' },
      { title: 'Platform', desc: 'Ubisoft Connect on Windows 10 or 11—and your Rainbow Six Siege client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Ubisoft Connect.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Rainbow Six Siege cheats are online?',
        a: 'The live status banner is on r6siegecheat.com and in the Discord #status channel. Always check after a Rainbow Six Siege or BattlEye update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Rainbow Six Siege.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party R6 Siege cheats?',
        a: 'Yes—any modification carries risk. BattlEye and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Rainbow Six Siege via Ubisoft Connect on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Operator Skins live at r6siegecheat.com/products/rainbow-six-siege-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Rainbow Six Siege cheats — Aim & Recoil, ESP and tools for PC. r6siegecheat.com',
    explore: 'Explore',
    exploreLinks: [
      { href: '/#features', label: 'Feature overview', ariaLabel: 'Features' },
      { href: '/#setup-guide', label: 'Setup guide', ariaLabel: 'Setup guide' },
      { href: '/#products-title', label: 'Products section', ariaLabel: 'Products on homepage' },
      { href: '/products/rainbow-six-siege-cheats/elite/', label: 'Elite R6 Siege cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/rainbow-six-siege-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About R6SiegeCheat',
      description:
        'R6SiegeCheat provides Rainbow Six Siege cheat tiers, utility tools and PC support resources at r6siegecheat.com.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'R6SiegeCheat is a PC-focused resource for Rainbow Six Siege players exploring Aim & Recoil, ESP, FOV tools and Operator Skins workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate R6 Siege cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Elite combat access and utility products, HWID utilities, Operator Skins and account recovery workflows. Blog articles explain ranked-safe configs, patch-day checks, and BattlEye update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Ubisoft Connect account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How R6SiegeCheat handles analytics, cookies, and contact data when you use r6siegecheat.com.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on r6siegecheat.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for R6SiegeCheat products and r6siegecheat.com.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using r6siegecheat.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Rainbow Six Siege cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Operator Skins / Unlock All) delivered through an operator portal and loader for Ubisoft Connect on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Rainbow Six Siege or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. r6siegecheat.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Rainbow Six Siege.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, BattlEye penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Ubisoft Connect Rainbow Six Siege on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Rainbow Six Siege build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Rainbow Six Siege can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'R6SiegeCheat Support',
      description:
        'Get support for loader, HWID, and checkout questions at r6siegecheat.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'R6SiegeCheat home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join R6SiegeCheat on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
