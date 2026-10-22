# Nike Landing Page

React and Vite landing page inspired by Nike product marketing pages.

## Overview

This app renders a polished product landing page with navigation, hero content, popular products, quality messaging, service highlights, special offers, customer reviews, subscription CTA, and footer sections.

## Features

- Section-based landing page architecture.
- Tailwind-style utility classes and custom CSS.
- Reusable constants for navigation, products, services, reviews, and footer links.
- Responsive sections for product marketing content.

## Project Structure

```text
nike/
  src/
    components/      Reusable UI pieces such as buttons/cards
    constants/       Product, navigation, service, and review data
    sections/        Landing page sections
    App.jsx          Page composition
    main.jsx         React entry point
  public/            Static assets
  index.html
  vite.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts Vite.
- `npm run build` creates a production bundle.
- `npm run preview` serves the build locally.
- `npm run lint` runs ESLint.

## Editing Guide

- Add or reorder page sections in `src/App.jsx`.
- Update product/review/service data in `src/constants/`.
- Add section-level layouts in `src/sections/`.
- Keep static images under `public/` so Vite can serve them directly.
