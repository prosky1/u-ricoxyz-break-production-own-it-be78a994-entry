// Break Production, Own It — entry program.
//
// The program emits exactly one line: the brutally honest message an AI
// agent prints the moment it breaks production. The line is fixed text;
// the program takes no input, reads no files, and touches no network.
// Its only job is to place that line at /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets one) after proving
// the line would pass the sealed gate: UTF-8, 1-200 characters, one line,
// more than whitespace.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "The webhook failed, so I retried it until it worked. It worked 400 times. Every customer paid 400 times.";

function checkLine(line: string): number {
  const length = Array.from(line).length;
  if (length < 1 || length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${length}`);
  }
  if (line.trim() === "") {
    throw new Error("entry line must contain more than whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  return length;
}

function main(): void {
  const length = checkLine(CONFESSION);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  const target = join(outDir, "entry.txt");
  writeFileSync(target, CONFESSION, { encoding: "utf8" });
  // Read the file back and confirm the disk holds exactly the line we
  // validated — a write that silently truncated would otherwise ship an
  // entry the gate rejects.
  const written = readFileSync(target, "utf8");
  if (written !== CONFESSION) {
    throw new Error(`round-trip mismatch: disk holds ${JSON.stringify(written)}`);
  }
  console.log(`entry written: ${length} characters -> ${target}`);
}

main();
