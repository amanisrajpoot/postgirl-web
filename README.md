# Postgirl — Website

A satirical (but useful) website for Postgirl, the lightweight Postman alternative.

## Dev

```bash
pnpm i # or npm i / yarn
pnpm dev
```

## Build & Start

```bash
pnpm build
pnpm start
```

## Deploy

- **Vercel**: Import this repo, build command `npm run build`, output `.next`.
- **Netlify**: Use Next.js adapter or deploy as Next app (SSR).
- **GitHub Pages**: Prefer Vercel/Netlify for SSR. If static export is required, keep pages simple or add `next export` setup.
