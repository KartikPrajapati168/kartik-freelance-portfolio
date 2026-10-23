# Kartik Prajapati – Freelance Developer Portfolio

React + Vite single-page portfolio. Plain CSS, Lucide icons, no backend.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build
```bash
npm run build      # output in /dist
npm run preview    # test the build locally
```

## Deploy
**Vercel:** push to GitHub → vercel.com → *Add New Project* → import repo → Framework: Vite (auto) → Deploy.
Or CLI: `npm i -g vercel && vercel --prod`.

**Netlify:** push to GitHub → *Add new site → Import from Git* → Build command `npm run build`, Publish directory `dist`.
Or drag & drop the `dist` folder at app.netlify.com/drop.

## Replace before publishing (all in `src/data/portfolioData.js`)
- [ ] `contact.email` – currently a placeholder (also the mailto recipient)
- [ ] `contact.whatsappNumber` – digits only with country code, e.g. `919876543210`
- [ ] `projects[].repo` / `projects[].demo` – real repository and demo URLs (empty string hides a link)
- [ ] `profile.photo` – optional real photo (put file in `/public`, e.g. `"/kartik.jpg"`)
- [ ] `experience[0].period` – verify BrainyBeam exact dates/program details
- [ ] `education.period` – add your enrolment/graduation dates or status
- [ ] Verify GitHub / LinkedIn URLs in `contact`
- [ ] Page title/description in `index.html`

## Contact form note
The form is static: it validates and opens the visitor's email app via `mailto:`. It does **not** store messages.
For direct submissions, connect a form service (Formspree, Web3Forms, Netlify Forms) or build a backend.
