/**
 * Canonical site URL (used for SEO, sitemap, share cards). No custom domain needed:
 * it follows whatever free address the host gives you.
 *
 *   1. NEXT_PUBLIC_SITE_URL   set it yourself if you ever want to pin a URL
 *   2. VERCEL_PROJECT_PRODUCTION_URL  e.g. miqbal-portfolio.vercel.app (set automatically by Vercel)
 *   3. URL                    set automatically by Netlify
 *   4. http://localhost:3000  local development
 */
const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fromVercel ?? process.env.URL ?? "http://localhost:3000";
