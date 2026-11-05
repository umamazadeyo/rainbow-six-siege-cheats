import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const cloudflare = process.argv.includes('--cloudflare');
const astroCliCandidates = [
  path.join(process.cwd(), 'node_modules', 'astro', 'bin', 'astro.mjs'),
  path.join(process.cwd(), 'node_modules', 'astro', 'astro.js'),
];
const astroCli = astroCliCandidates.find((p) => fs.existsSync(p));
if (cloudflare) {
  process.env.ASTRO_ADAPTER = 'cloudflare';
}

/** @param {string} label @param {string} cmd @param {string[]} args */
function run(label, cmd, args) {
  const result = spawnSync(cmd, args, {
    stdio: 'inherit',
    env: process.env,
  });
  if (result.status !== 0) {
    console.error(`build-pipeline: ${label} failed (exit ${result.status ?? 1}).`);
    process.exit(result.status ?? 1);
  }
}

if (!astroCli) {
  console.error('build-pipeline: run npm install before building (missing astro CLI).');
  process.exit(1);
}

run('optimize-images', process.execPath, ['scripts/optimize-images.mjs']);
run('astro build', process.execPath, [astroCli, 'build']);

if (cloudflare) {
  const distDir = path.join(process.cwd(), 'dist');
  const clientDir = path.join(distDir, 'client');
  const assetsDir = fs.existsSync(clientDir) ? clientDir : distDir;
  if (fs.existsSync(path.join(assetsDir, '_worker.js'))) {
    fs.writeFileSync(path.join(assetsDir, '.assetsignore'), '_worker.js\n', 'utf8');
  }
}

run('prune-dist-images', process.execPath, ['scripts/prune-dist-images.mjs']);
run('finalize-sitemap', process.execPath, ['scripts/finalize-sitemap.mjs']);
run('indexnow', process.execPath, ['scripts/indexnow.mjs']);

console.log(cloudflare ? 'Cloudflare build pipeline complete.' : 'Production build pipeline complete.');
