# AI Consulting — Landing Page

Professional, single-page landing website for an AI consulting business built with plain HTML, CSS, and JavaScript (no frameworks). Production-ready, accessible, and responsive.

---

## Project Overview

This repository contains a clean, modern, single-page landing website for an AI consulting company. It is optimized for fast loading, accessibility, SEO, and responsive layouts (desktop/tablet/mobile). It includes subtle animations, smooth scrolling, and client-side form validation.

Key deliverables:
- `index.html` — semantic HTML, SEO meta, structured data.
- `style.css` — production-quality styles with CSS variables, Flexbox/Grid, and animations.
- `script.js` — lightweight JS for interactions: mobile nav, reveal-on-scroll, smooth scrolling, and contact form validation.

---

## Demo

Open `index.html` in any modern browser. For a local development preview, serve the folder using a simple static server:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use any static host (Netlify, Vercel, GitHub Pages, etc.).

---

## Features

- Fully responsive (desktop / tablet / mobile)
- Semantic HTML and SEO-friendly meta tags and JSON‑LD structured data
- Smooth scrolling and keyboard-focus management
- Accessible skip link and focus-visible styles
- Lightweight, framework-free (vanilla JS)
- Subtle reveal animations using IntersectionObserver
- Client-side contact form validation with friendly success/error messages
- Modern typography via Google Fonts and a professional color palette (dark blue, white, teal accent)
- Production-ready CSS organization using variables and utility patterns

---

## File Structure

```
/
├─ index.html      # Main single-page site
├─ style.css       # All styles (CSS variables, responsive, animations)
└─ script.js       # Client-side interactions & form validation
```

---

## Installation & Usage

1. Clone or download the project files.
2. Place the files on any static web server or open `index.html` directly in a browser.
3. To test locally with a server (recommended for correct routing and smooth scroll behavior):

```bash
# from project root
python -m http.server 8000
# visit http://localhost:8000
```

No build step required.

---

## Customization

- Branding: Update the text/logo in `index.html` (header/footer).
- Colors: Edit the CSS variables in `style.css` (:root) to change the palette.
- Fonts: Modify the Google Fonts link in `index.html`.
- Services & Content: Update sections (`About`, `Services`, `Why Choose Us`, `Contact`) directly in `index.html`.
- Form handling: The contact form is client-side only. To process real submissions, replace the simulated submission in `script.js` with an API call to your server or a form provider (e.g., Formspree, Netlify Forms, or a serverless function).

Example: Replace the simulated send in `script.js` with fetch:

```js
// pseudo-code example
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
}).then(res => { ... })
```

---

## Accessibility & SEO Notes

- Landmark elements and ARIA attributes included (header, nav, main, footer, role/status).
- Skip link added for keyboard users.
- Focus management for in-page navigation ensures keyboard users can follow anchors.
- Color contrast designed for readability on dark backgrounds — adjust variables if you modify colors.
- SEO: Title, description, Open Graph tags, and JSON-LD schema (ProfessionalService) are included in `index.html`.

---

## Performance & Best Practices

- Minimal external dependencies (only Google Fonts).
- Inline SVGs (small, no external images) and CSS-first layout for quick first paint.
- JavaScript is deferred and wrapped in an IIFE to avoid global scope pollution.
- Use production hosting with gzip/Brotli compression and HTTP/2 for best results.

---

## Browser Support

Works in modern evergreen browsers (Chrome, Edge, Firefox, Safari). IntersectionObserver is used for reveals with a fallback to reveal all elements for older browsers.

---

## Contributing

This project is intended as a starting point. To contribute improvements (animations, additional accessibility checks, form integration):

1. Fork the repo
2. Create a feature branch
3. Open a Pull Request with a clear description and screenshots (if UI changes)

---

## License

MIT License — feel free to reuse and adapt for commercial or personal projects.

---

## Contact

If you'd like help customizing or deploying this template, contact:

- Email: hello@aiconsulting.example

Thank you for using this template. Build something great!
