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

## Push to GitHub

Repo: **https://github.com/thankiuday/Vyanoffice.git**

If this folder is not yet a git repo, run:

```bash
cd "c:\Users\Uday\OneDrive\Desktop\VyanOffice"
git init
git remote add origin https://github.com/thankiuday/Vyanoffice.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

If you get a commit error (e.g. `unknown option trailer`), try:

```bash
git commit --no-verify -m "Initial commit"
git push -u origin main
```

Or commit from VS Code/Cursor: Source Control → stage all → type message → Commit → Push, and set remote `origin` to the URL above.

---

## Deploy on Render

1. **Push this repo to GitHub** (see “Push to GitHub” above). Your repo: [thankiuday/Vyanoffice](https://github.com/thankiuday/Vyanoffice).

2. **Open Render:** Go to [https://render.com](https://render.com) and sign in (or sign up with GitHub).

3. **New Static Site:**  
   Dashboard → **New +** → **Static Site**.

4. **Connect repository:**  
   Connect your GitHub account if needed, then select **thankiuday/Vyanoffice**. Click **Connect**.

5. **Configure (Render can use `render.yaml` in the repo):**
   - **Name:** `vyan-office-solution` (or any name)
   - **Branch:** `main`
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - **Redirects/Rewrites (important for SPA):**  
     Add one rule:
     - **Type:** Rewrite  
     - **Source:** `/*`  
     - **Destination:** `/index.html`  

   If you use the repo’s **Blueprint** (`render.yaml`), these settings and the rewrite are already defined.

6. **Create Static Site:** Click **Create Static Site**. Render will clone the repo, run the build, and deploy. The first deploy may take a few minutes.

7. **Your site URL:** After deploy you’ll get a URL like `https://vyan-office-solution.onrender.com`. You can add a custom domain later in the service’s **Settings**.

## Replace images

Place your shop photos in `public/images/` and update:

- `src/data/products.js` – category image paths (e.g. `/images/category-pens.jpg`).
- `src/components/Gallery.jsx` – `GALLERY_IMAGES` array with your image paths.
- Home hero background – update the hero section image URL in `src/pages/Home.jsx` if needed.

## Contact

- **Address:** 22, Kithaganur Main Rd, next to Garden City College, Bhattarahalli, Bengaluru, Karnataka 560049  
- **Phone / WhatsApp:** 9845177702
