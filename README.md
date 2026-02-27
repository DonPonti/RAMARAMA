# 🪔 Digital Rama Koti

> Write "Sri Rama" digitally — A sacred Japa counter for 1 Crore repetitions.

**Live Demo**: https://digitalramakoti.netlify.app

---

## 🚀 Quick Deploy to Netlify

### Option 1: One-click (after pushing to GitHub)

1. Push this folder to a GitHub repo
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Select your repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy** ✅

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
cd digital-rama-koti
npm install
npm run build
netlify deploy --prod --dir=dist
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
digital-rama-koti/
├── public/
│   ├── favicon.svg          # Diya emoji favicon
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # SEO robots
│   └── og-image.png         # ← ADD THIS: 1200×630 OG image
│
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Main HTML shell with fonts, dark mode
│   ├── components/
│   │   ├── SEO.astro        # All meta/OG/LD+JSON tags
│   │   ├── Navbar.astro     # Navigation + dark mode toggle
│   │   └── Footer.astro     # Footer with Ramayana quote
│   ├── pages/
│   │   ├── index.astro      # 🏠 Main Japa counter page
│   │   ├── about.astro      # About Rama Koti tradition
│   │   ├── sitemap.xml.astro # Auto-generated sitemap
│   │   └── stories/
│   │       └── index.astro  # Stories list (scaffold)
│   └── styles/
│       └── global.css       # Tailwind + custom styles
│
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## ✏️ How to Add Story Pages

1. Create `src/pages/stories/[your-story-slug].astro`
2. Or use **Astro Content Collections** for blog-like stories:

```bash
# Create content directory
mkdir -p src/content/stories
```

Create `src/content/config.ts`:
```typescript
import { defineCollection, z } from 'astro:content';

export const collections = {
  stories: defineCollection({
    schema: z.object({
      title: z.string(),
      kanda: z.string(),
      excerpt: z.string(),
      readTime: z.string(),
      pubDate: z.date(),
    }),
  }),
};
```

Create `src/content/stories/birth-of-rama.md`:
```markdown
---
title: The Birth of Rama
kanda: Bala Kanda
excerpt: King Dasharatha performed the Putrakameshti Yagna...
readTime: 5 min
pubDate: 2024-01-01
---

Story content here...
```

Create `src/pages/stories/[slug].astro` with `getStaticPaths()` to generate all story pages at build time.

---

## 🎨 Customization

### Change the goal (default: 1 Crore)
Edit `src/pages/index.astro` — change `const GOAL = 10_000_000`

### Add new milestone celebrations
Edit the `MILESTONES` object in `src/pages/index.astro`

### Change site URL
Edit `site` in `astro.config.mjs`

### Add OG Image
Create a 1200×630 PNG image at `public/og-image.png`

---

## 📊 SEO Features

- ✅ Title & description optimized for "Digital Rama Koti Online"
- ✅ Open Graph tags (Facebook/WhatsApp preview)
- ✅ Twitter Card
- ✅ JSON-LD WebSite schema
- ✅ Canonical URLs
- ✅ sitemap.xml auto-generated
- ✅ robots.txt
- ✅ PWA manifest
- ✅ Theme color meta tag
- ✅ lang="en" on HTML

---

## 🌙 Features

- **Japa Counter**: Recognizes "Sri Rama", "Srirama", "Jai Ram", "Jai Shri Ram", "Ram Ram"
- **localStorage persistence**: Count survives browser restart
- **Milestone celebrations**: Confetti at 108, 1008, 10008, 1 Lakh, 10 Lakh, 1 Crore
- **Web Share API**: Share progress natively on mobile
- **Dark mode**: System preference + manual toggle
- **Progress bar**: Visual toward 1 Crore goal
- **Session counter**: Shows how many this sitting

---

## 🏗️ Tech Stack

- **Astro 4.x** — Static Site Generation
- **Tailwind CSS** — Utility-first styling
- **Vanilla JS** — No framework overhead
- **Google Fonts** — Cinzel Decorative, Lora, Tiro Devanagari Sanskrit
- **Netlify** — Hosting with edge caching

---

*🙏 Jai Sri Ram — May this tool serve lakhs of devotees.*
