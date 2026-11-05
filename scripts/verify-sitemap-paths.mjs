/**
 * Self-test for sitemap resolution (static dist/ vs Cloudflare dist/client/).
 * Does not require a full Astro build.
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { listSitemapShards, resolveStaticAssetRoot } from './dist-static-root.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');

function sampleUrlset(urls) {
  const body = urls.map((u) => `<url><loc>${u}</loc></url>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;
}

function rmDist() {
  if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
}

function assert(cond, msg) {
  if (!cond) {
    console.error('verify-sitemap-paths FAIL:', msg);
    process.exit(1);
  }
}

function runFinalize() {
  const r = spawnSync(process.execPath, ['scripts/finalize-sitemap.mjs'], {
    stdio: 'inherit',
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

// --- static layout: dist/sitemap-0.xml ---
rmDist();
fs.mkdirSync(path.join(dist, 'images'), { recursive: true });
const staticUrls = ['https://r6siegecheat.com/', 'https://r6siegecheat.com/blog/'];
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), sampleUrlset(staticUrls));
assert(resolveStaticAssetRoot() === dist, 'static root should be dist/');
runFinalize();
const staticSitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
assert((staticSitemap.match(/<url>/g) ?? []).length === 2, 'static sitemap should have 2 URLs');
console.log('OK: static dist/ layout');

// --- Cloudflare layout: dist/client/sitemap-0.xml ---
rmDist();
fs.mkdirSync(path.join(dist, 'client', 'images'), { recursive: true });
fs.mkdirSync(path.join(dist, 'server'), { recursive: true });
const cfUrls = [
  'https://r6siegecheat.com/',
  'https://r6siegecheat.com/products/rainbow-six-siege-cheats/elite/',
  'https://r6siegecheat.com/faq/',
];
fs.writeFileSync(path.join(dist, 'client', 'sitemap-0.xml'), sampleUrlset(cfUrls));
assert(
  resolveStaticAssetRoot() === path.join(dist, 'client'),
  'static root should be dist/client/',
);
runFinalize();
const cfSitemap = fs.readFileSync(path.join(dist, 'client', 'sitemap.xml'), 'utf8');
assert((cfSitemap.match(/<url>/g) ?? []).length === 3, 'client sitemap should have 3 URLs');
assert(!fs.existsSync(path.join(dist, 'sitemap-0.xml')), 'shard should not remain at dist root');
assert(listSitemapShards(path.join(dist, 'client')).length >= 1, 'sitemap-0.xml in client');
console.log('OK: Cloudflare dist/client/ layout');

rmDist();
console.log('verify-sitemap-paths: all checks passed.');
