# StillSpaze — Lama Fera Healing

A complete React + Vite website with Tailwind CSS, Framer Motion, Lucide icons and React Router. Six pages, responsive navigation, accessible booking and certificate dialogs, FAQs and a Formspree contact form. No backend or database.

## Run locally

Install Node.js 20.19+ or 22.12+, then run:

```sh
npm ci
cp .env.example .env
npm run dev
```

Open the local URL printed by Vite. Use `npm test` for booking tests, `npm run build` for production, and `npm run preview` to inspect the production build.

## Required configuration before client launch

Edit `src/config.js` for the brand, practitioner name, portrait, biography, experience, phone, email, address, Instagram and Maps links, hero copy, service descriptions, duration, price, testimonials and certifications. Blank contact fields do not create fake links. Replace bracketed placeholders and illustrative photos.

Set these build-time values in `.env` or your deployment platform:

```dotenv
VITE_WHATSAPP_NUMBER=YOUR_REAL_INTERNATIONAL_NUMBER
VITE_FORMSPREE_ID=YOUR_FORM_ID
VITE_SITE_URL=https://your-real-domain.example
```

WhatsApp numbers must include country code and contain 8–15 digits. Spaces, parentheses, plus and hyphens are normalized. No sample recipient is used. Without a number, the booking dialog explains that booking is not configured. Sending a WhatsApp inquiry never confirms an appointment; date/time preferences require practitioner confirmation.

Create a Formspree form and use its public form ID (the value after `/f/` in its endpoint). Configure recipient verification, permitted domains and spam controls in Formspree. No private API key belongs in this app: **all VITE_ variables are public browser values**. When a form ID is missing, submitting shows a truthful configuration message. Requests include loading, timeout, success and failure states. Confirm real inbox delivery after setup. No message data is stored locally.

## Credentials and reviews

`certifications` starts empty. Add only verified records such as `{ title, issuer, year, image: '/certificates/file.webp' }` and place the corresponding file in `public/certificates`. Each opens in a keyboard-accessible modal. No fake certificates are included.

`testimonials` starts empty. Add real client-approved records as `{ name, text, approved: true }`. Only approved entries display. The testimonials section is currently hidden, including navigation and sitemap entries. Restore it only when approved reviews are ready. Workshops are intentionally absent; add a service only if actually offered.

## Deployment

**Vercel:** import the project, choose Vite, build `npm run build`, output `dist`, and set the environment variables. `vercel.json` supports React Router routes.

**Netlify:** import the project, build `npm run build`, publish `dist`, and set the environment variables. `public/_redirects` provides the SPA fallback. Existing generated page paths have unique metadata.

**Sites:** `.openai/hosting.json` declares the static `dist` output and the registered project identity. Preserve that identity when updating this Site.

The build creates route-specific HTML shells with unique titles, descriptions, canonical and Open Graph URLs, a sitemap, robots.txt and WebSite structured data. Content is rendered by React; use prerendering if fully static body content is an SEO requirement. No unverifiable Person, ratings or medical structured data is emitted. Keep brand metadata in `scripts/seo.mjs` and `index.html` consistent when rebranding.

## Project layout

- `src/config.js`: editable practitioner content and service data
- `src/main.jsx`: reusable components and page implementations
- `src/booking.mjs`: pure WhatsApp URL construction and date helper
- `src/styles.css`: design system, responsive layouts, Tailwind import
- `scripts/seo.mjs`: static route metadata and sitemap generation
- `tests/booking.test.mjs`: recipient validation and message encoding tests
- `public/`: favicon and hosting redirects

## Accessibility and media

Keyboard navigation, focus-visible indicators, native form constraints, labeled inputs, dialog focus trapping, Escape/dismissal and focus return, reduced-motion support and manual carousel controls are included. Images have explicit sizes and descriptive alt text; non-hero photos load lazily. Unsplash photos are illustrative, not portraits of the practitioner. Remote optimized photos and Google Fonts need an internet connection; self-host approved assets and fonts if desired. The privacy template discloses these requests.

## Launch checklist

Replace placeholders, verify qualifications, upload a real portrait and approved certificates, review the privacy policy and retention details, configure and test WhatsApp and Formspree, confirm services and pricing, replace the domain, rebuild, and check mobile/keyboard behavior. Spiritual benefits are framed as individual experiences, never promised medical outcomes.

