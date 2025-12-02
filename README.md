# Dibyanshu Lunia — Portfolio

[dibyanshu_lunia.netlify.app](https://dibyanshu-lunia.netlify.app/)

<!-- Badges reflecting the project's tooling (versions taken from package.json) -->
![Vite](https://img.shields.io/badge/Vite-^7.1.2-646cff?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-^19.1.1-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-^4.1.13-06B6D4?logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-^9.33.0-4B32C3?logo=eslint&logoColor=white)

A modern single-page portfolio built with Vite + React, styled with Tailwind CSS, and enhanced with 3D/animation libraries (Three.js, React Three Fiber, GSAP). The project includes a contact form using EmailJS.

## Key features
- Fast dev environment using Vite
- React 19
- Tailwind CSS for utility-first styling
- 3D content using three + @react-three/fiber + @react-three/drei
- Animations using GSAP
- Contact form wired with EmailJS
- ESLint configured for code quality

## Contents / Project structure
- index.html — Vite entry html
- src/ — application source (React components, styles, assets)
- public/ — static assets served as-is
- package.json — scripts and dependencies
- vite.config.js — Vite configuration
- eslint.config.js — ESLint configuration

(If you don't see some of these files locally, fetch the repository or check your branch.)

## Prerequisites
- Node.js (recommended >= 16.8, Node 18+ suggested)
- npm (or yarn/pnpm if you prefer; examples below use npm)

## Scripts
The project scripts (from package.json) are:

- npm run dev
  - Start the Vite development server (hot-reload). Default port is normally 5173.
- npm run build
  - Build the production-ready static assets into the `dist/` folder.
- npm run lint
  - Run ESLint across the repository (`eslint .`).
- npm run preview
  - Serve the production build locally for preview (uses `vite preview`).

## Setup and development
1. Clone the repo
   - git clone https://github.com/dibyanshulunia25/DibyanshuLuniaPortfolio.git
2. Install dependencies
   - npm install
3. Start the dev server
   - npm run dev
4. Lint the code
   - npm run lint
5. Build for production
   - npm run build
6. Preview the production build
   - npm run preview

## Notes about tooling and configuration
- Vite: Project is configured with a `vite.config.js` file. Vite is used for dev server and production builds.
- ESLint: `eslint.config.js` is present. Run `npm run lint` to check code quality. Install an ESLint-aware editor/IDE plugin for inline feedback.
- Type packages: The repository includes `@types/react` and `@types/react-dom` — helpful if you add TypeScript or use typed tooling.
- Tailwind: Tailwind is a dependency — ensure you have the proper Tailwind config and PostCSS setup if you extend or customize styles.
- 3D/Animation: Uses `three`, `@react-three/fiber`, `@react-three/drei`, and `gsap` for 3D scenes and animations. Keep an eye on bundle size when adding GLTF assets; prefer lazy-loading or optimized GLTFs.

## Contact form (EmailJS)
The project uses `@emailjs/browser`. To make the contact form work in production:
- Create an EmailJS account and service/template.
- Add your EmailJS user ID, service ID, and template ID into the appropriate environment or config file (do not commit secrets).
- For local testing you can use environment variables or a .env file (Vite supports VITE_ prefixed env variables).

## Recommendations & checklist before publishing
- Add a LICENSE file if this repo should be open-source.
- Add CODEOWNERS or CONTRIBUTING.md if you expect collaborators.
- Remove any hard-coded API keys or credentials. Use environment variables.
- Optimize and compress 3D assets (GLTF/GLB) if used; prefer streaming or lazy-loading heavy models.
- Add a proper live demo link (Vercel, Netlify, or GitHub Pages) in the badges/heading.

## Deployment
This repository builds into a static site (Vite). Common hosts:
- Vercel — connect the repo and use the `npm run build` output.
- Netlify — set build command `npm run build` and publish `dist/`.
- GitHub Pages — use an action or build step to publish `dist/`.

## Development tips
- Use the React Fast Refresh plugin (`@vitejs/plugin-react`) already included in devDependencies for smooth React HMR.
- Use an ESLint-compatible editor extension and enable format-on-save if you prefer consistent formatting.
- When adding large libraries or textures, measure the bundle size and consider code-splitting.

## Thanks / Credits
- Built by Dibyanshu Lunia — https://github.com/dibyanshulunia25
- Uses: Vite, React, Tailwind CSS, Three.js, React Three Fiber, GSAP, EmailJS
