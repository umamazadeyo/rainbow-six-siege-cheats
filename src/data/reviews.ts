export type ReviewProductFilter = 'all' | 'elite' | 'hwid-spoofer' | 'ugc' | 'unlock-all' | 'website';

export interface CustomerReview {
  id: string;
  displayName: string;
  product: Exclude<ReviewProductFilter, 'all'>;
  rating: number;
  date: string;
  isoDate: string;
  text: string;
  verifiedPurchase?: boolean;
}

export const REVIEW_PRODUCT_LABELS: Record<Exclude<ReviewProductFilter, 'all'>, string> = {
  elite: 'Rainbow Six Siege Elite',
  'hwid-spoofer': 'HWID Spoofer',
  ugc: 'UGC',
  'unlock-all': 'Operator Skins',
  website: 'Website & support',
};

/** Seed reviews shown on /reviews/ and merged with localStorage submissions in the browser. */
export const seedReviews: CustomerReview[] = [
  {
    id: 'rev-001',
    displayName: 'KiloNine',
    product: 'elite',
    rating: 5,
    date: 'Oct 12, 2025',
    isoDate: '2025-10-12',
    text: 'ESP is clean in ranked—distance slider actually matters. Setup took maybe 15 min with Discord walking me through the loader. Worth it.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-002',
    displayName: 'MiraMain_',
    product: 'elite',
    rating: 4.5,
    date: 'Oct 3, 2025',
    isoDate: '2025-10-03',
    text: 'Recoil control feels natural on AK12, not robotic. Stream proof mode works with OBS on my rig. Minus half star because I had to wait on a patch day.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-003',
    displayName: 'ThermiteFan22',
    product: 'elite',
    rating: 4,
    date: 'Sep 28, 2025',
    isoDate: '2025-09-28',
    text: 'Solid feature set for R6. Map awareness modules helped my callouts more than raw aim. Docs on the site are straight to the point.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-004',
    displayName: 'AshClutch',
    product: 'hwid-spoofer',
    rating: 5,
    date: 'Sep 19, 2025',
    isoDate: '2025-09-19',
    text: 'HWID tool did what it said—followed the portal checklist, rebooted, fresh account stuck. Support stayed on voice until identifiers looked right.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-005',
    displayName: 'DocIce',
    product: 'hwid-spoofer',
    rating: 3.5,
    date: 'Sep 8, 2025',
    isoDate: '2025-09-08',
    text: 'Not gonna lie, first attempt failed because I skipped the restore point step. Second run after support ping = fine. Read the guide lol.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-006',
    displayName: 'SledgeHam',
    product: 'ugc',
    rating: 4,
    date: 'Aug 30, 2025',
    isoDate: '2025-08-30',
    text: 'UGC organized my appeal docs way better than random Reddit threads. No magic unban but my case actually got a human review.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-007',
    displayName: 'ValkCams',
    product: 'unlock-all',
    rating: 4.5,
    date: 'Aug 22, 2025',
    isoDate: '2025-08-22',
    text: 'Operator skins preview locally for clips—other players still see my real inventory which is expected. Favorites list is handy.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-008',
    displayName: 'ZeroHourZ',
    product: 'website',
    rating: 5,
    date: 'Aug 14, 2025',
    isoDate: '2025-08-14',
    text: 'Site layout is easy—products, FAQ, checkout link all obvious. No sketchy popups. Checkout redirect was instant.',
  },
  {
    id: 'rev-009',
    displayName: 'BanditTrick',
    product: 'elite',
    rating: 3.5,
    date: 'Aug 2, 2025',
    isoDate: '2025-08-02',
    text: 'Features are there but you gotta tune settings. Out of the box felt a bit strong for ranked—dialed ESP down and it\'s smooth now.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-010',
    displayName: 'FuzeMain',
    product: 'website',
    rating: 4,
    date: 'Jul 25, 2025',
    isoDate: '2025-07-25',
    text: 'Blog guides helped me pick Elite vs utilities. Wish there were more R6-specific screenshots but info matched what I got.',
  },
  {
    id: 'rev-011',
    displayName: 'IQDrone',
    product: 'elite',
    rating: 5,
    date: 'Jul 11, 2025',
    isoDate: '2025-07-11',
    text: 'Five stars for support alone. Patch dropped, status banner updated, new loader same night. That\'s the whole reason I stay here.',
    verifiedPurchase: true,
  },
  {
    id: 'rev-012',
    displayName: 'CaveiraLaugh',
    product: 'unlock-all',
    rating: 4,
    date: 'Jun 29, 2025',
    isoDate: '2025-06-29',
    text: 'Bought skins module standalone before upgrading to Elite. Works as advertised for local preview—don\'t expect others to see your flex.',
    verifiedPurchase: true,
  },
];

export function averageRating(reviews: CustomerReview[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

export const REVIEWS_STORAGE_KEY = 'r6siegecheat-customer-reviews';
