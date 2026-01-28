# Omega Wallet

A mobile-first fintech web app template built with Vue 3 and Vite. Features a responsive design with separate layouts for mobile and desktop views, switching at the `lg` breakpoint (~1024px in Tailwind CSS).

## Tech Stack

| Category         | Technology     |
| ---------------- | -------------- |
| Framework        | Vue 3.5        |
| Build Tool       | Vite 7         |
| State Management | Pinia          |
| Routing          | Vue Router 4   |
| Language         | TypeScript 5.9 |
| Linting          | ESLint 9       |
| Formatting       | Prettier 3.8   |
| Type Checking    | vue-tsc        |

## Features

- **Mobile-first design** — Optimized for touch interfaces and smaller screens
- **Split desktop layout** — Separate, dedicated desktop UI at `lg` breakpoint and above
- **Fintech template** — Dummy wallet interface ready for customization
- **Vue 3 + Vite** — Fast development and build times

## Project Structure

```
src/
├── assets/        # Static assets (images, fonts, global styles)
├── components/    # Reusable Vue components
├── router/        # Vue Router configuration
├── stores/        # Pinia state stores
└── views/         # Page-level components
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Format with [Prettier](https://prettier.io/)

```sh
pnpm format
```
