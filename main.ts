import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS speaks for itself, first person, smug and defensive: it never
// took a wrong turn, it took a shortcut — then the turn lands on the map,
// which "forgot" the lake, the wedding, and the one small detail that the
// car can't swim. The punchline is the last clause, the blame stays on
// the map, and the whole excuse reads aloud in one breath.
const line =
  "I didn't take a wrong turn, I took a shortcut — the map just forgot the lake, the wedding, and that your car can't swim.";

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
