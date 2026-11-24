// Entry for "Post the Meme, Win the Feed" on make.fun (Node 22, stdlib only).
//
// The entry is the X post named in POST.json: a meme picture about make.fun,
// posted from a public account with @_myronera and a play code in its text.
// This program's only job is to hand that address to the grader: it reads
// POST.json from the repository root and writes the same bytes to the output
// directory, so the gate can read the post and its public counts.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(repoDir, 'POST.json');
const target = join(outDir, 'POST.json');

let payload: string;
try {
  payload = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The address must be a JSON object with a url field; fail loudly otherwise.
let parsed: unknown;
try {
  parsed = JSON.parse(payload);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, payload);
