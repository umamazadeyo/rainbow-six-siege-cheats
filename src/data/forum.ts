export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-r6-map-awareness-include', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of operator, gadget, and map cues information covered by the map awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'R6 ESP cheats guide', sourcePath: '/blog/r6-esp-cheats-player-visuals/',
    answer: 'The guide covers operator ESP, gadget markers, rotation cues, and smoke alerts, and last-seen positions. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a team fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'R6 ESP cheats guide', sourcePath: '/blog/r6-esp-cheats-player-visuals/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a custom game before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'what-zoom-settings-are-comfortable', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The zoom guide focuses on finding a view that improves map context without making crosshair placement hard to track.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Rainbow Six Siege wallhack guide', sourcePath: '/blog/rainbow-six-siege-wallhack-options/',
    answer: 'There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track recoil and sight lines, and nearby fights.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-script-delay-settings', title: 'How do delay settings affect aim and recoil modules?', upvotes: 32,
    excerpt: 'A practical question about timing, combo readability, and why the scripts guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'R6 aimbot features guide', sourcePath: '/blog/r6-aimbot-features-settings/',
    answer: 'Delay settings control the spacing between automated actions. The guide recommends starting with slower timings and testing them in a practice setting before making changes.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'how-to-practice-auto-combos', title: 'What is a good way to practice an recoil profile?', upvotes: 29,
    excerpt: 'Use a repeatable hero setup, learn the sequence, and check each spell and item timing in a controlled lobby.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'R6 no recoil guide', sourcePath: '/blog/r6-no-recoil-cheats-weapon-support/',
    answer: 'Pick one operator loadout and one weapon to practice at a time. The guide walks through example sequences and explains how recoil tuning and aim smoothing fit together.',
    detail: 'A custom lobby lets you repeat the sequence and see which steps need adjustment without the pressure of a live match.',
    tip: 'Learn the manual sequence first; that makes it much easier to spot when a configuration is mistimed.',
  }),
  guideDiscussion({
    slug: 'what-is-in-the-elite-tier', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the awareness-first utilities.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Best R6 cheats guide', sourcePath: '/blog/best-r6-cheats-features-packages/',
    answer: 'The guide describes Elite as including the awareness-first utilities plus additional utilities such as Utility automation, Trigger assist, Gadget timing, and Skin Changer.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'how-do-lite-and-pro-differ', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Elite centers on combat modules while utilities handle HWID, skins, or appeals; here is the short version.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Rainbow Six Siege cheats compare guide', sourcePath: '/blog/rainbow-six-siege-cheats-compare-features-pricing/',
    answer: 'The comparison guide describes Elite as the combat package with ESP, aim assist, and gadget timing, while utilities handle HWID, Operator Skins, or UGC workflows.',
    detail: 'The right choice depends on whether you need map information alone or also want the additional script modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer', title: 'What should I know about the Skin Changer utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'R6 unlock all guide', sourcePath: '/blog/r6-unlock-all-cosmetic-unlocker/',
    answer: 'The guide describes Skin Changer as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'what-to-do-if-battleye-blocks-launch', title: 'What should I do if BattlEye blocks my Rainbow Six Siege launch?', upvotes: 24,
    excerpt: 'Start with Ubisoft Connect file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'R6 cheats after updates guide', sourcePath: '/blog/r6-cheats-after-game-updates-compatibility/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify Rainbow Six Siege files through Ubisoft Connect.',
    detail: 'It also recommends fully exiting the game and Ubisoft Connect, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal Ubisoft Connect launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'R6 cheat download guide', sourcePath: '/blog/r6-cheat-download-compatibility-setup/',
    answer: 'The article uses “external” to describe software that runs separately from the Rainbow Six Siege game process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever Rainbow Six Siege receives an update.',
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'R6 ESP stream-safe guide', sourcePath: '/blog/r6-esp-cheats-player-visuals/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Buy R6 Siege cheats checklist', sourcePath: '/blog/buy-r6-siege-cheats-before-you-choose/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Rainbow Six Siege cheats compare guide', sourcePath: '/blog/rainbow-six-siege-cheats-compare-features-pricing/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-r6-product-tier', title: 'How do I choose the right Rainbow Six Siege product?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Buy R6 Siege cheats guide', sourcePath: '/blog/buy-r6-siege-cheats-before-you-choose/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'can-third-party-tools-be-used-in-ranked', category: 'General', categoryTone: 'purple',
    title: 'Can I use third-party tools in ranked Rainbow Six Siege?',
    excerpt: 'Quick answer from the practice lobby guide: built-in lobby commands only work in custom matches with cheats enabled.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'Rainbow Six Siege cheats support guide', sourcePath: '/blog/rainbow-six-siege-cheats-support-setup-purchase/',
    body: ['No. Third-party loaders and modules are separate from Ubisoft custom games. They are not supported in ranked and violate Terms of Use—use at your own risk.', 'Test in custom games or unranked first with conservative portal presets. The linked buying guide explains checkout, loader delivery, and status checks.'],
    comments: [
      { author: 'mid_or_feed', age: '1 hour ago', score: 24, body: 'Start with the patch-day checklist and confirm the homepage status banner before you queue ranked.' },
      { author: 'ancient_archivist', age: '48 min. ago', score: 11, body: 'Import a fresh ranked preset after updates instead of copying old sliders from last season.' },
      { author: 'blink_first', age: '35 min. ago', score: 8, body: 'Useful distinction. Custom game testing is not the same as live ranked risk.' },
    ],
  },
  {
    slug: 'how-to-download-r6-cheat-loader', category: 'General', categoryTone: 'purple',
    title: 'How do I download the loader after checkout?',
    excerpt: 'Open Settings → Options → Advanced and enable the console. Here is the quick setup from our walkthrough.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'R6 cheat download guide', sourcePath: '/blog/r6-cheat-download-compatibility-setup/',
    body: ['Complete checkout, open the operator portal from your order email, and download the latest loader build listed for your product. Discord support can confirm the build if status shows updating.', 'If the loader fails, verify Windows version, run as administrator, and check antivirus exclusions from the portal guide.'],
    comments: [
      { author: 'pos4_roamer', age: '3 hours ago', score: 17, body: 'Keep your order email handy when opening a Discord ticket for loader issues.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'HWID and UGC products use different workflows—read the product page before mixing steps.' },
    ],
  },
  {
    slug: 'practice-r6-esp-settings-safely', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the safest way to test ESP settings?',
    excerpt: 'Use a private lobby and vision toggles to study sight lines, then restore normal fog and check the result.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'R6 cheats for PC guide', sourcePath: '/blog/r6-cheats-for-pc-windows-requirements/',
    body: ['Practice in a custom game. Enable only core ESP layers first—operator boxes and distance—then add gadget cues one at a time.', 'Reduce opacity and range caps if the overlay feels crowded during site pushes.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'Starting with fewer layers made it easier to read angles on Oregon and Bank.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'Re-importing the portal ranked preset after a patch saved me a broken config.' },
    ],
  },
  {
    slug: 'what-to-check-after-r6-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a Siege patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a custom game before queueing.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'R6 patch compatibility checklist', sourcePath: '/blog/r6-cheats-after-game-updates-compatibility/',
    body: ['Check the current build/status notice first. After a game update, wait for a compatible build, update the loader, then verify the setup in a custom or unranked match before returning to ranked.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'farm_pattern', age: '8 hours ago', score: 12, body: 'Testing after the update before ranked is the part I used to skip. Now I check the build note and run a quick custom match.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'elite-vs-utilities-for-ranked', category: 'Community', categoryTone: 'green',
    title: 'Elite or utilities: which product fits ranked?',
    excerpt: 'Our comparison guide breaks down the difference: Lite focuses on vision tools; Pro adds script modules.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Rainbow Six Siege product comparison', sourcePath: '/blog/rainbow-six-siege-cheats-compare-features-pricing/',
    body: ['The comparison guide explains Elite combat modules versus standalone utilities (HWID, Operator Skins, UGC). Elite is the storefront path for ESP, aim assist, and gadget timing; utilities solve hardware, cosmetic preview, or appeal workflows.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'how-to-tune-recoil-in-custom-games', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How can I tune recoil without jumping straight into ranked?',
    excerpt: 'Create a cheats-enabled custom lobby, spawn a target, and use cooldown tools for repeatable drills.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'Rainbow Six Siege cheats support guide', sourcePath: '/blog/rainbow-six-siege-cheats-support-setup-purchase/',
    body: ['Queue a custom game and import a low-recoil preset from the portal. Adjust one weapon at a time between rounds.', 'Avoid maxed aim smoothing on day one—the support guide recommends scaling up over several sessions.'],
    comments: [
      { author: 'mid_or_feed', age: '20 hours ago', score: 10, body: 'Start with one rifle or SMG meta before branching to secondary gadgets.' },
      { author: 'ancient_archivist', age: '18 hours ago', score: 5, body: 'Reload configs after every major Siege update.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
