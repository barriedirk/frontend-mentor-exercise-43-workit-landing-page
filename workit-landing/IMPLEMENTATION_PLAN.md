# Implementation Plan - Workit Landing Page

This document provides a reference implementation plan for the Workit landing page using Angular 20 and Tailwind CSS v4, built directly from the official Figma design tokens in `figma1.tokens.json`.

---

## Architectural Principles

1.  **Native Tailwind v4 Compilation**: Angular 20 compiles `@import url("tailwindcss");` natively without requiring PostCSS configuration or custom plugins. Only `tailwindcss` and `@tailwindcss/cli` are installed as devDependencies.
2.  **Strict Token Adherence**: All colors, fonts, and spacing are driven by the Figma design tokens. Arbitrary CSS values (like `bg-[#24053E]`) are strictly avoided in favor of mapped Tailwind v4 theme variables.
3.  **Non-Clipping Hero Curve**: The curved bottom of the Hero section is built using an absolute decorative background div with a border-radius curve rather than a CSS `clip-path`. This ensures the hero phone image can overlap the bottom cleanly without being clipped.

---

## Mapped Theme Tokens

Registered inside `src/styles.scss` using the `@theme` directive:

*   **Colors**:
    *   `green`: `#44FFA1` (mapped to `--color-green`)
    *   `slate-900`: `#24053E` (mapped to `--color-slate-900`)
    *   `slate-500`: `#584D62` (mapped to `--color-slate-500`)
    *   `slate-100`: `#FCF8FF` (mapped to `--color-slate-100`)
    *   `white`: `#FFFFFF` (mapped to `--color-white`)
*   **Spacing**: Spacings `100` (8px) through `3700` (296px) are registered as `--spacing-xxx` to create standard spacing utilities (e.g. `mb-1400`, `pt-3700`).
*   **Typography Presets**: Presets `text-preset-1` through `text-preset-5` are registered as responsive custom typography utilities by mapping their sizes and line heights to viewport media queries.

---

## Implementation Details

### 1. Global Styles (`src/styles.scss`)
Loads the Tailwind library, maps font families to local variable font files (`public/fonts/`), registers the design system tokens in `@theme`, and sets up base HTML document defaults.

### 2. Main Markup (`src/app/app.html`)
Structured semantic markup containing:
*   **Hero Header**: Light navigation logo, "Apply for access" link, centered text title with a highlighted underlined span, absolutely positioned background spirals, and the overlapping hero phone mockup.
*   **Features (1-2-3 list)**: Grid of three points designed to be centered vertically on mobile, horizontal row on tablet, and left-aligned vertical on desktop.
*   **Founder Card**: Photography and a text block where the dark purple card overlaps the image in tablet and desktop viewports, stacking on mobile.
*   **Footer**: Centered dark logo and social SVG links using `currentColor` to dynamically transition colors on hover.

---

## Verification and Compilation
Verified by compiling with:
```bash
pnpm build
```
Build outputs generate an optimized CSS bundle of ~23.5 kB.
