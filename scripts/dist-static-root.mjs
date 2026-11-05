import fs from 'node:fs';
import path from 'node:path';

/**
 * Astro static assets root: `dist/` (static) or `dist/client/` (Cloudflare adapter).
 */
export function resolveDistDir(cwd = process.cwd()) {
  return path.join(cwd, 'dist');
}

/**
 * @returns {string | null} Directory containing Astro sitemap shard(s), or null.
 */
export function resolveStaticAssetRoot(cwd = process.cwd()) {
  const dist = resolveDistDir(cwd);
  if (!fs.existsSync(dist)) return null;

  const preferClient =
    process.env.ASTRO_ADAPTER === 'cloudflare' ||
    process.env.CF_PAGES === '1' ||
    process.env.WRANGLER === '1';

  const preferred = preferClient
    ? [
        path.join(dist, 'client', 'sitemap-0.xml'),
        path.join(dist, 'sitemap-0.xml'),
      ]
    : [
        path.join(dist, 'sitemap-0.xml'),
        path.join(dist, 'client', 'sitemap-0.xml'),
      ];

  for (const file of preferred) {
    if (fs.existsSync(file)) return path.dirname(file);
  }

  for (const indexName of ['sitemap-index.xml', 'sitemap-index-0.xml']) {
    for (const indexDir of [dist, path.join(dist, 'client')]) {
      const indexPath = path.join(indexDir, indexName);
      if (!fs.existsSync(indexPath)) continue;
      const indexXml = fs.readFileSync(indexPath, 'utf8');
      const locs = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1]);
      for (const loc of locs) {
        try {
          const shardName = path.basename(new URL(loc).pathname);
          const shardPath = path.join(indexDir, shardName);
          if (fs.existsSync(shardPath)) return indexDir;
        } catch {
          /* ignore malformed loc */
        }
      }
    }
  }

  /** @type {string | null} */
  let found = null;

  function walk(dir, depth) {
    if (found || depth > 5 || !fs.existsSync(dir)) return;
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (found) break;
      const full = path.join(dir, entry.name);
      if (entry.isFile() && /^sitemap-\d+\.xml$/i.test(entry.name)) {
        found = path.dirname(full);
        break;
      }
      if (
        entry.isDirectory() &&
        entry.name !== 'node_modules' &&
        entry.name !== '.git' &&
        entry.name !== 'server'
      ) {
        walk(full, depth + 1);
      }
    }
  }

  walk(dist, 0);
  return found;
}

/**
 * @param {string} staticRoot
 * @returns {string[]} Sorted absolute paths to sitemap-N.xml shards.
 */
export function listSitemapShards(staticRoot) {
  if (!staticRoot || !fs.existsSync(staticRoot)) return [];
  return fs
    .readdirSync(staticRoot)
    .filter((name) => /^sitemap-\d+\.xml$/i.test(name))
    .sort((a, b) => {
      const na = Number(a.match(/\d+/)?.[0] ?? 0);
      const nb = Number(b.match(/\d+/)?.[0] ?? 0);
      return na - nb;
    })
    .map((name) => path.join(staticRoot, name));
}

/**
 * Image directories to prune after build (static + Cloudflare client).
 * @param {string} cwd
 * @returns {string[]}
 */
export function resolveDistImageDirs(cwd = process.cwd()) {
  const dist = resolveDistDir(cwd);
  const staticRoot = resolveStaticAssetRoot(cwd);
  const dirs = new Set([path.join(dist, 'images')]);
  if (staticRoot) {
    dirs.add(path.join(staticRoot, 'images'));
  }
  return [...dirs];
}
