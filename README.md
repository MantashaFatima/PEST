# Balaji Pest Control 🛡️

A modern, fast, and fully responsive landing page for **Balaji Pest Control** — providing professional pest management and anti-termite solutions across Delhi, Gurugram, Noida, and Ghaziabad.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Features

- **High-Converting Sections:** Hero, Services Catalog, Specialized Anti-Termite Treatment, On-Site Real Work & PPE Safety Gallery, Why Choose Us, Service Areas, and Contact CTA.
- **Direct Lead Generation:** Instant Click-to-Call (`9599752537`) and WhatsApp chat (`9999651595`).
- **Real On-Site Photography:** Real post-construction and anti-termite technician photos with PPE safety standards.
- **SEO & Performance:** Optimized metadata, SVG brand favicon, and fast static page generation.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
project/
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Sticky header with mobile menu & active scroll spy
│   │   ├── Hero.tsx                # Hero banner with real technician visual
│   │   ├── Services.tsx            # Grid of 8 core pest control services
│   │   ├── TermiteTreatment.tsx    # Dedicated anti-termite & deemak treatment
│   │   ├── OnSiteAndSafety.tsx     # Post-construction work & PPE safety protocol
│   │   ├── WhyChooseUs.tsx         # Trust badges & key benefits
│   │   ├── ServiceAreasContact.tsx # Delhi NCR coverage & direct contacts
│   │   └── BottomCTA.tsx           # High-visibility call banner
│   ├── layout.tsx                  # Root layout, favicon & metadata
│   ├── page.tsx                    # Landing page composition
│   └── globals.css                 # Tailwind styles
└── public/
    ├── favicon.svg                 # Brand icon for browser tab
    └── images/                     # Semantic on-site & treatment images


