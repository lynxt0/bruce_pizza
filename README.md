# Bruce's Ozzie Pizza — Website

Professional marketing website for **Bruce's Ozzie Pizza**, Bateau Bay NSW.  
Built with Next.js (App Router) · Tailwind CSS · shadcn/ui · Vercel-ready.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about blurb, deals preview, reviews, CTA |
| `/menu` | Full menu — all sections, sizes, specials |
| `/contact` | Address, phone, opening hours, Google Map embed |

---

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Fonts:** Oswald (headings) · Nunito (body) via `next/font/google`
- **Icons:** lucide-react
- **Deployment:** Vercel (zero config)

---

## Getting Started

> Requires Node.js ≥ 20 (project uses Node 24 — see `.nvmrc`).

```bash
# Use correct Node version (if you have nvm)
nvm use

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Business Details

| | |
|---|---|
| **Address** | 2/213 Bateau Bay Road, Bateau Bay NSW 2261 |
| **Phone** | (02) 4334 1511 |
| **Hours** | Tue–Wed & Sun: 5–9pm · Thu: 5–9:30pm · Fri–Sat: 5–10pm · Mon: Closed |
| **Surcharge** | 10% applies on Saturdays |
| **Facebook** | [Bruce's Ozzie Pizza](https://www.facebook.com/p/Bruces-Ozzie-Pizza-100054455892013/) |

---

## Placeholder Images

The following images are **Unsplash placeholders** and should be replaced with real photos:

- **Hero background** (`/` page): `https://images.unsplash.com/photo-1513104890138-7c749659a591`
- **About section** (`/` page): `https://images.unsplash.com/photo-1574071318508-1cdbab80d002`

Real photos can be sourced from the [Facebook page](https://www.facebook.com/p/Bruces-Ozzie-Pizza-100054455892013/).  
Update the `src` props on the `<Image>` components in `src/app/page.tsx`.

---

## Deploying to Vercel

1. Push this repo to GitHub (already done — `bruce_pizza`)
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select `bruce_pizza` → Deploy (no config needed)

Custom domain can be added in the Vercel project settings.

---

## Maintenance Notes

- **Menu prices/items:** Edit `src/app/menu/page.tsx` — all data is in plain arrays at the top of the file.
- **Opening hours:** Edit the `hours` array in `src/app/contact/page.tsx`.
- **Business info (phone, address):** Appears in `Navbar.tsx`, `Footer.tsx`, `contact/page.tsx` and `page.tsx` — search for `4334 1511` to find all instances.
- **Google Map embed:** Update the iframe `src` in `contact/page.tsx` with a fresh embed URL from [Google Maps](https://maps.google.com) if needed.
