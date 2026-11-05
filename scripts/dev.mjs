import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

delete process.env.ASTRO_ADAPTER;

const astroCliCandidates = [
  path.join(process.cwd(), 'node_modules', 'astro', 'bin', 'astro.mjs'),
  path.join(process.cwd(), 'node_modules', 'astro', 'astro.js'),
];
const astroCli = astroCliCandidates.find((p) => fs.existsSync(p));

if (!astroCli) {
  console.error('Missing Astro. Run: npm ci');
  process.exit(1);
}

const child = spawn(process.execPath, [astroCli, 'dev'], {
  stdio: 'inherit',
  env: process.env,
  shell: false,
});

child.on('exit', (code) => process.exit(code ?? 0));
