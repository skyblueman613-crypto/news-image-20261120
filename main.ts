// news-image-20261120 — entry program (Node 22, standard library only).
//
// The entry is the finished image entry.png beside this file: a one-page
// summary of the world's news on Friday 20 November 2026 (masthead with the
// date, an AI-generated globe-and-newspapers illustration, and six stories:
// the Trump–Xi–Putin summit in Shenzhen, the ICJ genocide ruling on Myanmar,
// Russian strikes on Kyiv's bridges, the Houthi missile that hit Riyadh's
// PIF tower, Anthropic's Nasdaq debut as markets fell, and record flooding
// on Florida's Space Coast). This program copies that image, byte for byte,
// to the output path the grader reads.
//
// The run is deterministic by construction: a copy writes the same bytes
// every time, and the program touches no network, clock or random source.
//
// Local run (MAKEFUN_OUTPUT_DIR stands in for /output outside the grader):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// package.json marks this folder as an ES module so Node loads main.ts
// without the typeless-package warning; it installs nothing.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
