import type { ProductSlide } from './products';

/** Site-wide favicon / brand mark */
export const SITE_FAVICON = '/images/blog/r6favicon.png';

const B = '/images/blog';

/** Hero, blog cards, and homepage carousel pool */
export const BLOG_CAROUSEL_IMAGES = [
  `${B}/r6s-multihack-s1.webp`,
  `${B}/1.webp`,
  `${B}/2.webp`,
  `${B}/4.webp`,
  `${B}/6.webp`,
  `${B}/7.webp`,
  `${B}/1r61.png`,
  `${B}/1r62.png`,
  `${B}/r6s3 (1).webp`,
  `${B}/1r63.webp`,
  `${B}/r6s5 (1).webp`,
  `${B}/r65 (1).webp`,
] as const;

export function blogHeroImage(index: number): string {
  return BLOG_CAROUSEL_IMAGES[index % BLOG_CAROUSEL_IMAGES.length]!;
}

function slide(src: string, alt: string, caption: string, captionDesc: string): ProductSlide {
  return { src, alt, caption, captionDesc };
}

export const ELITE_PRODUCT_IMAGES: ProductSlide[] = [
  slide(
    `${B}/zadeyo-rainbowsixsiege-1-visuals.webp`,
    'Rainbow Six Siege Elite cheat ESP and operator visuals overlay on Siege gameplay',
    'ESP & visuals',
    'Operator outlines, gadget cues and readable ESP tuned for ranked Siege matches.',
  ),
  slide(
    `${B}/zadeyo-rainbowsixsiege-2-aimbot.webp`,
    'Rainbow Six Siege Elite aim assist and recoil control settings in the cheat menu',
    'Aim & recoil',
    'Smooth aim assist, recoil profiles and humanized timing for rifle and SMG metas.',
  ),
  slide(
    `${B}/zadeyo-rainbowsixsiege-3-misc.webp`,
    'Rainbow Six Siege Elite misc modules: radar, configs and stream-safe overlay options',
    'Misc & configs',
    'Radar helpers, cloud configs and overlay toggles for long Siege sessions.',
  ),
];

export const LEVO_UTILITY_IMAGES: ProductSlide[] = [
  slide(
    `${B}/levo-rainbowsixsiege-1-visuals.webp`,
    'Rainbow Six Siege utility suite player ESP and map awareness visuals',
    'Utility visuals',
    'Clean ESP layers for supports and flex players who prioritize information.',
  ),
  slide(
    `${B}/levo-rainbowsixsiege-2-aimbot.webp`,
    'Rainbow Six Siege utility aim tuning panel for controlled assist strength',
    'Controlled aim tools',
    'Light assist and recoil tools for players upgrading from awareness-only setups.',
  ),
  slide(
    `${B}/levo-rainbowsixsiege-3-misc.webp`,
    'Rainbow Six Siege utility misc features and operator QoL modules',
    'QoL modules',
    'Misc helpers, presets and overlay controls bundled with utility access.',
  ),
];

export const HWID_SPOOFER_IMAGES: ProductSlide[] = [
  slide(
    `${B}/spoofer12.webp`,
    'HWID spoofer dashboard showing hardware serial and MAC profile rotation for PC',
    'Hardware profiles',
    'Rotate disk, MAC and GPU identifiers with a guided spoof workflow.',
  ),
  slide(
    `${B}/spoofer13.webp`,
    'HWID spoofer compatibility scan and restore-point checklist before Rainbow Six Siege',
    'Safety checks',
    'Run compatibility scans and restore-point steps before applying spoof profiles.',
  ),
  slide(
    `${B}/spoofer14.webp`,
    'HWID spoofer verification screen confirming identifier changes after reboot',
    'Post-spoof verify',
    'Confirm identifiers changed after a cold reboot before launching Siege.',
  ),
];

export const UNLOCK_ALL_IMAGES: ProductSlide[] = [
  slide(
    `${B}/1r62.png`,
    'Rainbow Six Siege operator skin preview and local cosmetic unlock interface',
    'Operator skins',
    'Browse and preview elite skins locally on your Siege client.',
  ),
  slide(
    `${B}/1r63.webp`,
    'Rainbow Six Siege weapon and attachment cosmetic preview in unlock tool',
    'Weapon cosmetics',
    'Preview weapon skins and charms without Ubisoft store purchases.',
  ),
  slide(
    `${B}/r6s5 (1).webp`,
    'Rainbow Six Siege loadout favorites and cosmetic export in unlock module',
    'Loadout favorites',
    'Save favorite cosmetic combos and export loadouts for content creation.',
  ),
];

export const UGC_IMAGES: ProductSlide[] = [
  slide(
    `${B}/levo-rainbowsixsiege-3-misc.webp`,
    'UGC appeal workspace for Rainbow Six Siege account restrictions and case tracking',
    'Appeal workspace',
    'Organize restriction evidence, templates and follow-ups in one dashboard.',
  ),
  slide(
    `${B}/6.webp`,
    'UGC case documentation templates for Ubisoft and BattlEye dispute workflows',
    'Case templates',
    'Structured templates for appeals, identity checks and timeline notes.',
  ),
  slide(
    `${B}/7.webp`,
    'UGC status tracking for Rainbow Six Siege account recovery progress',
    'Status tracking',
    'Track appeal stages and next actions without losing thread history.',
  ),
];

export const HERO_CAROUSEL_SLIDES: ProductSlide[] = [
  slide(
    `${B}/r6s-multihack-s1.webp`,
    'Rainbow Six Siege multihack overlay showing ESP, radar and aim modules together',
    'Multihack suite',
    'ESP, radar and combat modules in one Siege-focused build.',
  ),
  slide(
    `${B}/1r61.png`,
    'Rainbow Six Siege cheat ESP highlighting defenders through walls during a ranked push',
    'Ranked ESP',
    'Defender positions and distance readouts for clutch site takes.',
  ),
  slide(
    `${B}/zadeyo-rainbowsixsiege-1-visuals.webp`,
    'Rainbow Six Siege operator ESP and gadget awareness overlay',
    'Operator ESP',
    'Gadget and operator cues layered for readable ranked vision.',
  ),
  slide(
    `${B}/zadeyo-rainbowsixsiege-2-aimbot.webp`,
    'Rainbow Six Siege aim assist and recoil control in action',
    'Aim control',
    'Humanized recoil and aim profiles for rifle duels.',
  ),
  slide(
    `${B}/1.webp`,
    'Rainbow Six Siege cheat menu with module toggles for PC',
    'Module control',
    'Toggle ESP, aim and misc modules from one operator portal sync.',
  ),
  slide(
    `${B}/2.webp`,
    'Rainbow Six Siege radar and minimap helper overlay',
    'Radar helper',
    'Minimap cues and rotate timers without cluttering the HUD.',
  ),
  slide(
    `${B}/4.webp`,
    'Rainbow Six Siege stream-safe overlay hiding cheat UI from capture',
    'Stream-safe',
    'Hide overlays from OBS and capture cards while you play.',
  ),
];
