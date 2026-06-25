# Aaryan Sharma - Portfolio

A modern, responsive personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 18](https://react.dev) | Component-based UI architecture |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and developer experience |
| [Vite](https://vitejs.dev/) | Fast build tool with HMR for development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling with custom theme |
| [Framer Motion](https://www.framer.com/motion/) | Declarative animations and transitions |
| [React Icons](https://react-icons.github.io/react-icons/) | SVG icon library |

### Why This Stack?

- **Vite + React + TypeScript**: Lightning-fast builds, hot module replacement, and type safety ensure a smooth development experience with minimal configuration.
- **Tailwind CSS**: Utility-first approach enables rapid styling without context-switching. The custom theme maintains a consistent design system.
- **Framer Motion**: Provides declarative, physics-based animations (scroll reveals, hover effects, stagger transitions) that degrade gracefully when users prefer reduced motion.

## Features

- Responsive design (mobile-first, adapts to all screen sizes)
- Dark/Light mode toggle (persisted in localStorage)
- Smooth scroll navigation with active section highlighting
- Accessible (semantic HTML, aria-labels, skip-to-content, WCAG AA contrast)
- Respects `prefers-reduced-motion` for users who disable animations
- Animated scroll-reveal transitions on all sections
- Interactive hover effects on cards and buttons
- Mobile hamburger navigation with animated open/close

## Setup

### Prerequisites

- Node.js 18+ (recommended: Node 22)
- npm 9+

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens a local development server at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Outputs optimized static files to the `dist/` directory.

### Preview Build

```bash
npm run preview
```

Serves the production build locally for testing.

## Project Structure

```
.
├── public/
│   ├── photo.png                  # Profile photo
│   └── Aaryan_Sharma_Java_HU.pdf # Resume PDF
├── src/
│   ├── main.tsx                   # Entry point
│   ├── App.tsx                    # Root component (layout, theme)
│   ├── index.css                  # Tailwind directives & global styles
│   ├── hooks/
│   │   └── useReducedMotion.ts    # Accessibility hook
│   └── components/
│       ├── Navbar.tsx             # Fixed navigation with mobile menu
│       ├── Hero.tsx               # Full-screen hero with photo
│       ├── About.tsx              # Professional summary
│       ├── Skills.tsx             # Categorized skill cards
│       ├── Experience.tsx         # Work timeline
│       ├── Projects.tsx           # Project showcase cards
│       ├── Education.tsx          # Education history
│       ├── Certifications.tsx     # Certification grid
│       ├── Contact.tsx            # Contact links & resume download
│       └── Footer.tsx             # Copyright & back-to-top
├── index.html                     # Vite HTML entry
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind theme & content paths
├── postcss.config.js              # PostCSS plugins
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

## Deployment (GitHub Pages)

This is a `username.github.io` repository. To deploy:

1. Build the project: `npm run build`
2. The `dist/` folder contains production-ready static files
3. Configure GitHub Pages to serve from the `dist/` folder, or use a GitHub Action to build and deploy automatically

## Phased Plan

### MVP (Delivered)

- All 8 portfolio sections with accurate content
- Responsive layout with mobile navigation
- Dark/Light mode with localStorage persistence
- Scroll-reveal animations on all sections
- Hover effects on cards and interactive elements
- Smooth scroll navigation with active section tracking
- Accessible markup with semantic HTML and aria-labels
- prefers-reduced-motion support

### Future Enhancements

- Blog/Articles section with MDX support
- Contact form with serverless backend
- Page transition animations with route-based navigation
- Performance monitoring and analytics
- Automated Lighthouse CI checks
- Project detail pages with full case studies
- Internationalization (i18n) support
