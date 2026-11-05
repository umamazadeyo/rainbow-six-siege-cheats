/**
 * Recompute read times from word counts (225 wpm, clamp 3–7 min)
 * and assign publication dates spread across 2026 (max 5 Nov 2026).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const postsPath = path.join(root, 'src/data/blog/posts.ts');

const WPM = 225;
const MIN_MIN = 3;
const MAX_MIN = 7;

/** ISO dates spread through 2026, chronological (oldest → newest), max 2026-11-05 */
const PUBLISH_ISO = [
  '2026-01-14',
  '2026-02-03',
  '2026-02-22',
  '2026-03-11',
  '2026-03-29',
  '2026-04-18',
  '2026-05-07',
  '2026-05-26',
  '2026-06-14',
  '2026-07-02',
  '2026-07-21',
  '2026-08-09',
  '2026-09-17',
  '2026-10-12',
  '2026-11-05',
];

function stripMd(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordsIn(text) {
  const t = stripMd(text);
  if (!t) return 0;
  return t.split(/\s+/).filter(Boolean).length;
}

function countWords(body) {
  let n = 0;
  for (const block of body) {
    if (block.type === 'p' || block.type === 'h2' || block.type === 'h3') {
      n += wordsIn(block.text);
    } else if (block.type === 'ul') {
      for (const item of block.items) n += wordsIn(item);
    } else if (block.type === 'table') {
      for (const h of block.headers) n += wordsIn(h);
      for (const row of block.rows) {
        for (const cell of row) n += wordsIn(cell);
      }
    } else if (block.type === 'cta') {
      n += wordsIn(block.title) + wordsIn(block.text);
    }
  }
  return n;
}

function readTimeLabel(wordCount) {
  const raw = Math.ceil(wordCount / WPM);
  const mins = Math.min(MAX_MIN, Math.max(MIN_MIN, raw));
  return `${mins} min read`;
}

function formatDisplayDate(iso) {
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

const mod = await import(pathToFileURL(postsPath).href);
const posts = mod.commercialBlogPosts;

if (posts.length !== PUBLISH_ISO.length) {
  console.error(`Expected ${PUBLISH_ISO.length} posts, got ${posts.length}`);
  process.exit(1);
}

/** Assign oldest date to last post in file, newest to first — keeps featured post on latest allowed date */
const slugMeta = new Map();
posts.forEach((post, i) => {
  const iso = PUBLISH_ISO[PUBLISH_ISO.length - 1 - i];
  const wc = countWords(post.body);
  slugMeta.set(post.slug, {
    date: formatDisplayDate(iso),
    iso,
    readTime: readTimeLabel(wc),
    wordCount: wc,
  });
});

let src = fs.readFileSync(postsPath, 'utf8');
for (const [slug, meta] of slugMeta) {
  const slugRe = new RegExp(`("slug":\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?)(\"readTime\":\\s*\"[^\"]+\")`, 'm');
  const slugRe2 = new RegExp(`("slug":\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?)(\"date\":\\s*\"[^\"]+\")`, 'm');
  if (!slugRe.test(src)) {
    console.warn('Could not patch readTime for', slug);
  } else {
    src = src.replace(slugRe, `$1"readTime": "${meta.readTime}"`);
  }
  src = src.replace(slugRe2, `$1"date": "${meta.date}"`);
}

fs.writeFileSync(postsPath, src);

const enPath = path.join(root, 'src/i18n/en.ts');
let en = fs.readFileSync(enPath, 'utf8');
for (const [slug, meta] of slugMeta) {
  const blockRe = new RegExp(
    `(slug:\\s*'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?readTime:\\s*')([^']+)(')`,
    'm',
  );
  const dateRe = new RegExp(
    `(slug:\\s*'${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?date:\\s*')([^']+)(')`,
    'm',
  );
  en = en.replace(blockRe, `$1${meta.readTime}$3`);
  en = en.replace(dateRe, `$1${meta.date}$3`);
}
fs.writeFileSync(enPath, en);

console.log('Updated blog meta:');
for (const post of posts) {
  const m = slugMeta.get(post.slug);
  console.log(`  ${post.slug}: ${m.wordCount} words → ${m.readTime}, ${m.date}`);
}
