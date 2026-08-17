# Eminence Stays

Luxury UK stays landing page — React + Vite + Tailwind + Supabase.
(Originally exported from Base44; the Base44 SDK has been fully removed.)

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
- The site is fully public — there is no auth.
- To read enquiries, use the Supabase dashboard (Table Editor →
  `eminence_enquiries`).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```
