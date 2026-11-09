# Muhammad Iqbal — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS 4**, **GSAP** (ScrollTrigger + SplitText) and **Lenis** smooth scrolling.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit the content

Everything lives in [`lib/data.ts`](lib/data.ts): profile, experience, skills, featured projects, archive, education and certifications.

- Project cover images: `public/projects/` (currently illustrations; replace with real screenshots and update `cover`).
- Portrait: `public/me.jpg`. Favicon crop: `assets/avatar.jpg`.
- CV download: `public/CV_Muhammad_Iqbal_Fullstack.pdf`.

## Deploy (free)

Import the repo on [Vercel](https://vercel.com) (Hobby plan) and deploy. The site URL used for SEO, the sitemap and share cards is picked up automatically (`lib/site.ts`); set `NEXT_PUBLIC_SITE_URL` only if you want to pin a specific address.
