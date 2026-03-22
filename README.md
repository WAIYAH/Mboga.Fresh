# 🌿 Fresh Harvest Market

A premium organic produce e-commerce experience built with Vanilla ES6 Modules, Tailwind CSS v4, and Vite. Features a client-side personalization engine, discount system, cinematic scroll animations, and mobile-first responsive design.

## 🚀 Features

- **Pub/Sub State Management** — Centralized reactive store with wildcard listeners
- **Personalization Engine** — 3-tier recommendation algorithm (frequency → category → behavioral scoring)
- **Discount Engine** — Code-based and volume-based discounts with validation
- **Scroll Animations** — IntersectionObserver-powered cinematic reveals, parallax, and counters
- **Product Filters** — Category, search, sort, organic/seasonal toggles
- **Persistent Cart** — Full CRUD operations with localStorage persistence
- **Dynamic Rendering** — All product grids, cart, and recommendations rendered via JS with skeleton loading
- **SEO Optimized** — JSON-LD structured data, semantic HTML, Open Graph ready
- **Accessibility** — ARIA labels, keyboard navigation, reduced-motion support

## 📋 Pages

| Page        | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| **Home**    | Parallax hero, featured products, personalized recommendations, seasonal picks, newsletter |
| **Shop**    | Full catalog with category filters, search, sort, organic/seasonal toggles                 |
| **Product** | Dynamic detail view with nutrition info, quantity selector, related products               |
| **Cart**    | Full cart management, discount codes, volume discounts, order summary                      |
| **About**   | Our Story, mission, team members                                                           |
| **Contact** | Validated contact form, FAQ accordion, store info                                          |
| **Privacy** | Privacy policy                                                                             |
| **Terms**   | Terms of service                                                                           |
| **404**     | Custom not-found page                                                                      |

## 📦 Tech Stack

- **Vite 7** — Lightning-fast HMR & multi-page build
- **Tailwind CSS v4** — Utility-first CSS with custom design tokens
- **Vanilla ES6 Modules** — No frameworks, pure JavaScript
- **Google Fonts** — Playfair Display, Inter, Caveat

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── index.html                   # Home page (Vite entry)
├── shop.html                    # Shop page
├── product.html                 # Product detail page
├── cart.html                    # Shopping cart page
├── about.html                   # About us page
├── contact.html                 # Contact page
├── privacy.html                 # Privacy policy
├── terms.html                   # Terms of service
├── 404.html                     # Not found page
├── docs/                        # Architecture documentation
├── public/                      # Static files (robots.txt, sitemap, manifest)
├── src/
│   ├── assets/images/           # Optimized images
│   │   ├── brand/               # Favicons & brand imagery
│   │   ├── hero/                # Hero background images
│   │   └── products/            # Product photos
│   ├── data/                    # JSON data (products, categories, discounts)
│   ├── pages/                   # HTML partials (_head_includes)
│   ├── scripts/
│   │   ├── core/                # App entry, state store, router
│   │   └── modules/             # Feature modules
│   │       ├── cart/            # Cart manager & UI
│   │       ├── personalization/ # Tracker & recommender
│   │       ├── products/        # Service, renderer, filters
│   │       ├── ui/              # Animations, notifications
│   │       └── utils/           # Formatters, localStorage, validators
│   └── styles/
│       └── main.css             # Tailwind v4 + custom design tokens
├── vite.config.js               # Vite configuration with path aliases
├── vite.copy-static-assets.js   # Build plugin for image copying
├── vercel.json                  # Vercel deployment config
└── package.json
```

## 🌐 Deployment

Deployed on Vercel with clean URLs enabled. The `vercel.json` config handles clean URL routing.

## 👤 Author

**Lucky Nakola** — [GitHub](https://github.com/WAIYAH)

Made by **Nakola Experts Systems (NES)**: [https://nakolaexpertsystems.vercel.app/](https://nakolaexpertsystems.vercel.app/)

## 📜 License

MIT License
