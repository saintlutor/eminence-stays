# Eminence Stays

Luxury UK stays landing page — React + Vite + Tailwind, exported from Base44.

## Local development

```bash
npm install
npm run dev            # http://localhost:5173
```

No environment variables are required. The enquiry form writes to Supabase
(`eminence_enquiries` table, project `gfmjqwgbtramqrizebfp`) via the publishable
key in `src/lib/supabase.js` — RLS allows anonymous inserts only, so enquiries
can never be read from the client.

## Notes

- Imagery is served locally from `public/images/`.
- Auth scaffolding (Login/Register/OAuth pages) is unused Base44 boilerplate —
  the home page itself is public (`requiresAuth: false`).
- To read enquiries, use the Supabase dashboard (Table Editor →
  `eminence_enquiries`).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```
