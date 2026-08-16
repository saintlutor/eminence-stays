# Eminence Stays

Luxury UK stays landing page — React + Vite + Tailwind, exported from Base44.

## Local development

```bash
npm install
cp .env.example .env   # add your Base44 app id (needed for the enquiry form)
npm run dev            # http://localhost:5173
```

The site renders fully without a Base44 app id; only the enquiry form submission
(`base44.entities.Enquiry.create`) and auth pages require it.

## Notes

- All imagery is served from Base44's public CDN (`media.base44.com`).
- Auth scaffolding (Login/Register/OAuth pages) is Base44 boilerplate — the home
  page itself is public (`requiresAuth: false`).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```
