import { promises as fs } from "node:fs";
import path from "node:path";

const APP_DIR = path.resolve("app");
const OUT = path.resolve("public", "static-route-list.json");

const IGNORED_DIRS = new Set(["api", "route", "components"]);
const PAGE_FILE_RE = /^(page)\.(tsx|ts|jsx|js|mdx)$/;

function isDynamicSegment(seg) {
  // [slug], [...catchAll], [[optional]]
  return seg.startsWith("[") && seg.endsWith("]");
}

async function walk(dir, base = "") {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const urls = [];

  for (const e of entries) {
    if (e.isDirectory()) {
      if (IGNORED_DIRS.has(e.name) || e.name.startsWith("_")) continue;
      urls.push(...(await walk(path.join(dir, e.name), path.join(base, e.name))));
    } else if (e.isFile() && PAGE_FILE_RE.test(e.name)) {
      const segs = base.split(path.sep).filter(Boolean);
      if (segs.some(isDynamicSegment)) continue; // skip dynamic routes; you’ll add from data
      // Turn /(group)/about -> /about  (strip route groups like (marketing))
      const cleaned = "/" + segs.filter(s => !(s.startsWith("(") && s.endsWith(")"))).join("/");
      urls.push(cleaned || "/");
    }
  }
  return urls;
}

const urls = await walk(APP_DIR);
await fs.mkdir(path.dirname(OUT), { recursive: true });
await fs.writeFile(OUT, JSON.stringify([...new Set(urls)].sort()), "utf8");
console.log(`Wrote ${urls.length} static routes to ${OUT}`);
