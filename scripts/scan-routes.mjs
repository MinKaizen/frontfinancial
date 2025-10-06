import { promises as fs } from "node:fs";
import path from "node:path";

const APP_DIR = path.resolve("app");
const OUT = path.resolve("public", "static-route-list.json");
const IGNORE_FILE = path.resolve("sitemap.ignore"); // project root

// Directories to skip while walking the app tree
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
      urls.push(...(await walk(path.join(dir, e.name), path.join(base, e.name))))
    } else if (e.isFile() && PAGE_FILE_RE.test(e.name)) {
      const segs = base.split(path.sep).filter(Boolean);
      if (segs.some(isDynamicSegment)) continue; // skip dynamic routes; you’ll add from data
      // Turn /(group)/about -> /about  (strip route groups like (marketing))
      const cleaned = "/" + segs.filter((s) => !(s.startsWith("(") && s.endsWith(")"))).join("/");
      urls.push(cleaned || "/");
    }
  }
  return urls;
}

// --- Gitignore-like matching for sitemap.ignore ---
function globToRegex(pattern, { anchored = false, dirOnly = false } = {}) {
  // Convert a simple gitignore-like glob to a regex
  // Supports **, *, ?, leading '/', and trailing '/' (directory)
  let i = 0;
  let re = "";
  while (i < pattern.length) {
    const c = pattern[i];
    if (c === "*") {
      const next = pattern[i + 1];
      if (next === "*") {
        re += ".*"; // ** -> match across segments
        i += 2;
        continue;
      }
      re += "[^/]*"; // * -> within a segment
      i += 1;
      continue;
    }
    if (c === "?") {
      re += "[^/]"; // ? -> single char within a segment
      i += 1;
      continue;
    }
    // Escape regex specials
    if (/[.+^${}()|[\]\\]/.test(c)) re += "\\" + c; else re += c;
    i += 1;
  }

  let prefix = anchored ? "^" : "(?:^|/)"; // without leading '/', match at any path segment boundary
  let suffix = dirOnly ? "(?:/.*)?$" : "$"; // trailing '/' should match directory and its children
  return new RegExp(prefix + re + suffix);
}

function compileIgnore(rules) {
  // rules: array of lines from sitemap.ignore (order matters)
  const compiled = [];
  for (const raw of rules) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;

    let negated = false;
    let pat = line;
    if (pat.startsWith("!")) {
      negated = true;
      pat = pat.slice(1);
    }

    let anchored = pat.startsWith("/");
    let dirOnly = pat.endsWith("/");
    if (anchored) pat = pat.slice(1);
    if (dirOnly) pat = pat.slice(0, -1);

    const regex = globToRegex(pat, { anchored, dirOnly });
    compiled.push({ regex, negated });
  }

  return function isIgnored(urlPath) {
    // urlPath like "/about" or "/lander/0"
    const p = urlPath.startsWith("/") ? urlPath.slice(1) : urlPath;
    let ignored = false;
    for (const rule of compiled) {
      if (rule.regex.test(p)) {
        ignored = !rule.negated; // last match wins
      }
    }
    return ignored;
  };
}

async function loadIgnoreRules() {
  // Defaults: honor prior request to ignore lander and api
  const defaults = [
    "/lander/**",
    "/api/**",
  ];

  try {
    const buf = await fs.readFile(IGNORE_FILE, "utf8");
    const lines = buf.split(/\r?\n/);
    // Combine defaults first so entries in sitemap.ignore can override with negations if desired
    return [...defaults, ...lines];
  } catch {
    // No sitemap.ignore present; fall back to defaults only
    return defaults;
  }
}

const urls = await walk(APP_DIR);
const ignoreRules = await loadIgnoreRules();
const isIgnored = compileIgnore(ignoreRules);

const finalUrls = [...new Set(urls)].filter((u) => !isIgnored(u)).sort();

await fs.mkdir(path.dirname(OUT), { recursive: true });
await fs.writeFile(OUT, JSON.stringify(finalUrls), "utf8");
console.log(`Wrote ${finalUrls.length} static routes to ${OUT}`);
