// Famous Last Words: The Funniest Epitaph.
// The man on the stone died the way so many do: "hold my beer and watch
// this." The joke is that nobody held the beer — the one job in the whole
// ritual, and the crowd dropped it. This program writes that one line to
// /output/entry.txt for the gate.
import * as fs from 'node:fs';
import * as path from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The epitaph: a famous-last-words quote, then the twist — the beer
// outlived him, so the last words were also the last thing anyone heard.
const ENTRY = "Here lies the man who said 'hold my beer and watch this.' The beer survived. He didn't.";

// Count characters the way the gate does: one per code point.
const charCount = (text: string): number => [...text].length;

function main(): void {
  const chars = charCount(ENTRY);
  if (chars < 1 || chars > 150 || ENTRY.includes('\n')) {
    throw new Error(`entry must be one line of 1-150 characters, got ${chars}`);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'entry.txt'), ENTRY);
  console.log(`wrote ${chars} chars to ${path.join(OUT_DIR, 'entry.txt')}`);
}

main();
