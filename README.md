# Bunshin Studio Landing Site

This repository contains the Bunshin Studio marketing/landing site, built with modern React tooling.

## Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Local development

Requirements:

- Node.js (LTS)
- npm (comes with Node) or another compatible package manager

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

Then open the printed URL (typically `http://localhost:5173`) in your browser.

## Production build

To create an optimized production build:

```sh
npm run build
```

You can preview the built app locally with:

```sh
npm run preview
```

## Deployment

Any static hosting platform that can serve the built `dist` directory will work (e.g. Vercel, Netlify, GitHub Pages, or your own infrastructure). Run `npm run build` and deploy the contents of `dist`.***
