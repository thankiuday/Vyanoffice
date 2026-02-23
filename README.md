# Vyan Office Solution – Website

Modern React website for **Vyan Office Solution** – printing, photocopy, stationery, and office supplies (Bengaluru).

## Tech stack

- React 18 + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React (icons)
- react-helmet-async (SEO)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with:

```bash
npm run preview
```

## Deploy on Render

1. Push this repo to GitHub and connect the repo to [Render](https://render.com).
2. Create a **Static Site** and connect the repository.
3. Render will use the `render.yaml` in the repo:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - **Routes:** `/*` → `/index.html` (rewrite) so SPA routes work on refresh.
4. If you create the static site manually (without Blueprint), set the same build command and publish directory, and in **Redirects/Rewrites** add:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** Rewrite

## Replace images

Place your shop photos in `public/images/` and update:

- `src/data/products.js` – category image paths (e.g. `/images/category-pens.jpg`).
- `src/components/Gallery.jsx` – `GALLERY_IMAGES` array with your image paths.
- Home hero background – update the hero section image URL in `src/pages/Home.jsx` if needed.

## Contact

- **Address:** 22, Kithaganur Main Rd, next to Garden City College, Bhattarahalli, Bengaluru, Karnataka 560049  
- **Phone / WhatsApp:** 9845177702
