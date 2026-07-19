# Ritesh Solanki — Portfolio

A premium, dark-mode developer portfolio built to feel like a SaaS landing page: aurora background, glassmorphism, smooth scrolling, magnetic buttons and scroll-linked animation throughout.

## Stack

- **Next.js 15** (App Router, fully static output) + **TypeScript**
- **Tailwind CSS** — design tokens in `tailwind.config.ts`
- **Framer Motion** — all animation (reveals, counters, tilt, cursor, parallax)
- **Lenis** — smooth scrolling
- **React Icons** — Simple Icons / Feather sets

## Commands

```bash
npm install     # install dependencies
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
npm start       # serve production build
```

## Personalize it (15 minutes)

**All content lives in one file: [`lib/data.ts`](lib/data.ts).** Every entry marked `// EDIT:` is example content — replace it with your real data:

1. **`SITE`** — production domain, GitHub/LinkedIn/WhatsApp URLs.
2. **`ABOUT.stats`** — your real experience/project/country numbers.
3. **`PROJECTS`** — your four best real projects (problem → solution → impact).
4. **`EXPERIENCE`** — your actual work history.
5. **`BLOG_POSTS`** — link to your real articles.

Then add two files to `public/`:

- **`public/resume.pdf`** — the Download Resume buttons point here.
- **`public/profile.jpg`** *(optional)* — swap the monogram card in
  [`components/sections/hero.tsx`](components/sections/hero.tsx) for a `next/image` (a comment marks the spot).

## Structure

```
app/                    layout (SEO, fonts, JSON-LD), page, sitemap, robots,
                        generated OG image + favicon
components/
  layout/               navbar, footer, loading screen
  sections/             hero, about, tech-stack, projects (slider),
                        experience, blog, contact
  effects/              aurora, mouse glow, custom cursor, magnetic,
                        reveal, text reveal, tilt card
  providers/            Lenis smooth scroll
  ui/                   button, glass card, section heading
lib/                    data.ts (all content), utils.ts
```

## Performance & accessibility notes

- Homepage is 100% statically generated; below-the-fold sections are code-split.
- Icons are imported individually (no barrel imports) to keep the bundle lean.
- The OG image and favicon are generated at build time — no binary assets in the repo.
- Custom cursor and smooth scroll disable themselves on touch devices and for
  users with `prefers-reduced-motion`.
- Contact form opens the visitor's mail client pre-filled. To send directly,
  wire the handler in `components/sections/contact.tsx` to Resend or Formspree.
