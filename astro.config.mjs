import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

/** Set only by `npm run build:cloudflare` / Wrangler `[build].command` — not during `astro dev`. */
const useCloudflareAdapter = process.env.ASTRO_ADAPTER === 'cloudflare';

/** @type {import('astro').AstroIntegration | undefined} */
let cloudflareAdapter;

if (useCloudflareAdapter) {
  try {
    const { default: cloudflare } = await import('@astrojs/cloudflare');
    cloudflareAdapter = cloudflare({
      imageService: 'compile',
    });
  } catch {
    throw new Error(
      'Cloudflare build requires @astrojs/cloudflare. Install: npm i -D @astrojs/cloudflare wrangler',
    );
  }
}

export default defineConfig({
  ...(cloudflareAdapter ? { output: 'server', adapter: cloudflareAdapter } : {}),
  server: {
    port: Number(process.env.PORT) || 4321,
    host: true,
  },
  site: 'https://r6siegecheat.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/rainbow-six-siege-cheats/',
    '/cheats/lite/': '/products/rainbow-six-siege-cheats/',
    '/cheats/pro/': '/products/rainbow-six-siege-cheats/',
    '/cheats/elite/': '/products/rainbow-six-siege-cheats/elite/',
    '/cheats/compare/': '/blog/rainbow-six-siege-cheats-compare-features-pricing/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': '/products/rainbow-six-siege-cheats/',
    '/products/dota-2-cheats/elite/': '/products/rainbow-six-siege-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/rainbow-six-siege-cheats/utilities/',
    '/products/dota-2-cheats/hwid-spoofer/': '/products/rainbow-six-siege-cheats/hwid-spoofer/',
    '/products/dota-2-cheats/ugc/': '/products/rainbow-six-siege-cheats/ugc/',
    '/products/dota-2-cheats/unlock-all/': '/products/rainbow-six-siege-cheats/unlock-all/',
    '/blog/dota-2-cheats-features-guide/': '/blog/rainbow-six-siege-cheats-compare-features-pricing/',
    '/blog/how-to-buy-dota-2-cheats-2026/': '/blog/buy-r6-siege-cheats-before-you-choose/',
    '/blog/dota-2-map-hack-setup/': '/blog/r6-esp-cheats-player-visuals/',
    '/blog/dota-2-elite-tier-guide/': '/blog/best-r6-cheats-features-packages/',
    '/blog/vac-patch-day-checklist/': '/blog/r6-cheats-after-game-updates-compatibility/',
    '/forum/can-custom-lobby-cheat-codes-be-used-in-ranked/': '/forum/can-third-party-tools-be-used-in-ranked/',
    '/forum/how-to-enable-the-dota-2-console/': '/forum/how-to-download-r6-cheat-loader/',
    '/forum/dota-2-lite-or-pro-hero-scripts/': '/forum/elite-vs-utilities-for-ranked/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
