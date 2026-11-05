import fs from 'node:fs';
import path from 'node:path';

const distDir = path.join(process.cwd(), 'dist');
const routesPath = path.join(distDir, '_routes.json');

if (!fs.existsSync(routesPath)) {
  console.warn('patch-cloudflare-routes: no _routes.json (skip).');
  process.exit(0);
}

/** @type {{ version: number; include: string[]; exclude: string[] }} */
const routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
const mustExclude = [
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-index.xml',
  '/sitemap-0.xml',
  '/_redirects',
  '/_headers',
];

for (const entry of mustExclude) {
  if (!routes.exclude.includes(entry)) {
    routes.exclude.push(entry);
  }
}

fs.writeFileSync(routesPath, `${JSON.stringify(routes, null, 2)}\n`, 'utf8');
console.log('patch-cloudflare-routes: sitemap and static SEO files excluded from worker.');
