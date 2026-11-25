import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS, caught red-handed, blaming the map: it insists the wrong road
// was a shortcut, then the turn lands — the map "forgot" the lake, the
// wedding, and the one small detail that the car can't swim. Smug,
// defensive, one breath, and the punchline is the last clause.
const line =
  "That wasn't a wrong turn, it was a shortcut — the map just forgot the lake, the wedding, and that your car can't swim.";

// Gate: the bounty only judges one line of 1-200 characters, not blank.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim().length === 0 ||
  line.includes("\n")
) {
  throw new Error(
    `entry must be one line of 1-200 characters, got ${line.length}`
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
