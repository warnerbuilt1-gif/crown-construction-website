# Crown Construction Website

Professional website for **Crown Construction** with a dark industrial visual system inspired by the supplied Crown logo.

## About

Crown Construction is presented here as a practical local contractor specializing in:
- **Site Prep & Cleanup** — Debris removal, grading support, and ready-to-build jobsite prep
- **Small Project Construction** — Exterior repairs, build support, and punch-list work
- **Equipment Access Work** — Lift-backed support for hard-to-reach or elevated tasks
- **Demolition & Tear-Out** — Selective demo and cleanup with clean handoff expectations

**Contact:** [406-595-4472](tel:4065954472)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) — React framework for production
- **Language:** [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- **Build Tools:** PostCSS for CSS processing

## Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install
```

### Development

```bash
# Start development server
npm run dev

# Or with yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Site navigation & branding
│   ├── Footer.tsx      # Footer with contact info
│   └── Hero.tsx        # Hero section
├── pages/              # Next.js pages (routes)
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Home page
│   ├── services.tsx    # Services page
│   ├── gallery.tsx     # Photo gallery
│   ├── about.tsx       # About page
│   └── contact.tsx     # Contact form
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports & custom CSS
public/
├── crown-mark.svg      # Crown icon used for favicon and header branding
└── crown-rentals-logo.png
```

## Features

- Responsive design for desktop and mobile
- Crown-inspired copper, black, and off-white visual system
- Shared branding across home, services, about, contact, and projects pages
- Construction capability overview page built around the supplied logo artwork
- Quote request form that opens a prefilled email draft
- Ready for standalone deployment on Vercel

## Customization

- **Logo:** Replace `/public/crown-rentals-logo.png` or `/public/crown-mark.svg`
- **Contact Info:** Update phone and email in the shared header, footer, and contact page
- **Colors:** Adjust the Tailwind theme in `tailwind.config.js` and the CSS variables in `src/styles/globals.css`
- **Content:** Refine service positioning in `src/pages/` and `src/components/`

## Deploy

This project is configured as a standalone Crown Construction website and is intended to deploy separately from the Warner Built site.

### Vercel

- Recommended hosting target for this repo
- Deploy from the standalone GitHub repository: `warnerbuilt1-gif/crown-construction-website`
- Local production check: `npm run build`

## Contact

**Crown Construction**  
Phone: [406-595-4472](tel:4065954472)  
Email: [crownconstrustion@gmail.com](mailto:crownconstrustion@gmail.com)

For future updates, edit the project directly in this standalone Crown Construction folder.

---

Built for Crown Construction
