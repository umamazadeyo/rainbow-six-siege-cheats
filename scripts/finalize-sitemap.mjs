import fs from 'node:fs';
import path from 'node:path';
import { listSitemapShards, resolveDistDir, resolveStaticAssetRoot } from './dist-static-root.mjs';

const siteOrigin = 'https://r6siegecheat.com';
const staticRoot = resolveStaticAssetRoot();

if (!staticRoot) {
  console.error(
    'finalize-sitemap: no sitemap-*.xml found under dist/ (run astro build first).',
  );
  process.exit(1);
}

const shards = listSitemapShards(staticRoot);
if (shards.length === 0) {
  console.error(`finalize-sitemap: no sitemap shards in ${path.relative(process.cwd(), staticRoot)}`);
  process.exit(1);
}

/** @type {Map<string, string>} loc -> full <url>...</url> block */
const urlBlocks = new Map();
let urlsetOpenTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

for (const shardPath of shards) {
  const raw = fs.readFileSync(shardPath, 'utf8');
  const openMatch = raw.match(/<urlset[^>]*>/i);
  if (openMatch) urlsetOpenTag = openMatch[0];

  for (const block of raw.match(/<url>[\s\S]*?<\/url>/gi) ?? []) {
    const locMatch = block.match(/<loc>([^<]+)<\/loc>/i);
    if (!locMatch) continue;
    urlBlocks.set(locMatch[1].trim(), block.trim());
  }
}

const urlCount = urlBlocks.size;
if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap shard(s) contain no URLs.');
  process.exit(1);
}

const mergedInner = [...urlBlocks.values()].join('\n');
const mergedRaw = `<?xml version="1.0" encoding="UTF-8"?>\n${urlsetOpenTag}\n${mergedInner}\n</urlset>\n`;

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

const formatted = formatUrlset(mergedRaw);
const sitemapPath = path.join(staticRoot, 'sitemap.xml');
const shard0Path = path.join(staticRoot, 'sitemap-0.xml');

fs.writeFileSync(sitemapPath, formatted, 'utf8');
fs.writeFileSync(shard0Path, formatted, 'utf8');

for (const shardPath of shards) {
  if (shardPath !== shard0Path && fs.existsSync(shardPath)) {
    fs.unlinkSync(shardPath);
  }
}

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteOrigin}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(staticRoot, 'sitemap-index.xml'), indexXml, 'utf8');

const relRoot = path.relative(process.cwd(), staticRoot).replace(/\\/g, '/');
console.log(`Sitemap finalized: ${urlCount} URLs → ${relRoot}/sitemap.xml`);

/** Optional mirror for tooling that only scans dist/ root (Worker still serves from dist/client). */
const distRoot = resolveDistDir();
if (staticRoot !== distRoot && path.basename(staticRoot) === 'client') {
  for (const name of ['sitemap.xml', 'sitemap-index.xml']) {
    const src = path.join(staticRoot, name);
    const dest = path.join(distRoot, name);
    if (fs.existsSync(src)) fs.copyFileSync(src, dest);
  }
}
