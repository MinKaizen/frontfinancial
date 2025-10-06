import { MetadataRoute } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const PUBLIC_JSON = path.join(process.cwd(), "public", "static-route-list.json");

function toEntries(paths: string[]): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1.0 : 0.7,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let staticPaths: string[] = ["/"];

  try {
    const raw = readFileSync(PUBLIC_JSON, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) staticPaths = parsed;
  } catch (err) {
    // Fallback for local/dev if file missing; prevents 500s
    console.warn("static-route-list.json not found or invalid, using fallback:", err);
  }

  // Example: merge dynamic URLs here if you have them
  // const posts = await fetch("https://api.example.com/posts").then(r => r.json());
  // const postEntries = posts.map((p:any)=>({ url: `${SITE}/posts/${p.slug}`, lastModified: p.updatedAt }));

  return [
    ...toEntries(staticPaths),
    // ...postEntries,
  ];
}

