import fs from 'node:fs';
import path from 'node:path';
import { resolveStaticAssetRoot } from './dist-static-root.mjs';

const key = process.env.INDEXNOW_KEY?.trim();
const host = process.env.INDEXNOW_HOST?.trim() || 'r6siegecheat.com';

if (!key) {
  console.log('IndexNow: skipped (INDEXNOW_KEY not set).');
  process.exit(0);
}

const staticRoot = resolveStaticAssetRoot();
const sitemapPath = staticRoot ? path.join(staticRoot, 'sitemap.xml') : null;
if (!sitemapPath || !fs.existsSync(sitemapPath)) {
  console.warn('IndexNow: sitemap.xml missing under dist — skipping ping.');
  process.exit(0);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).slice(0, 10000);

if (urlList.length === 0) {
  console.warn('IndexNow: no URLs found in sitemap.');
  process.exit(0);
}

const keyFile = path.join(staticRoot, `${key}.txt`);
fs.writeFileSync(keyFile, key, 'utf8');

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

if (response.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URL(s) (HTTP ${response.status}).`);
} else {
  const body = await response.text();
  console.warn(`IndexNow: ping failed HTTP ${response.status}: ${body.slice(0, 200)}`);
}
