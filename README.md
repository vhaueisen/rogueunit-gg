[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Made with SvelteKit](https://img.shields.io/badge/built%20with-SvelteKit-ff3e00?logo=svelte)](https://kit.svelte.dev)

# 🛰️ Rogueunit.gg

> Official web presence of **Rogue Unit** — a creative game studio building interactive tools, 3D experiences, and immersive branded games.

---

## 📌 Overview

This site showcases Rogue Unit's projects and capabilities, using a **clean UI**, smooth **SvelteKit transitions**, and minimal JavaScript. It includes animated carousels, contact forms, and flexible layout components to present team info and case studies.

---

## 🚀 Tech Stack

| Feature             | Tech                                    |
| ------------------- | --------------------------------------- |
| ⚙️ Framework        | [SvelteKit](https://kit.svelte.dev/)    |
| 🛠️ Build Tool       | [Vite](https://vitejs.dev/)             |
| 💅 Styling          | Custom CSS                              |
| 🧠 TypeScript       | Enabled project-wide                    |
| 📤 Backend Adapter  | `@sveltejs/adapter-node` for deployment |
| 📬 Contact Handling | `+page.server.ts` in `/routes/contact/` |

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI (navbar, carousel, etc.)
├── css/              # Global styles
├── lib/              # Shared utilities/helpers
├── routes/           # SvelteKit routes: contact, work, etc.
│   ├── contact/      # Contact form page and server handling
│   └── work/         # Project showcase with layout and animations
└── static/           # Static assets (icons, JSON, etc.)
```

---

## 🧪 Development

To run locally:

```bash
git clone https://github.com/vhaueisen/rogueunit-gg
cd rogueunit-gg
npm install
npm run dev
```

Then open [`http://localhost:5173`](http://localhost:5173) in your browser.

---

## 📦 Build & Deploy

Build the app:

```bash
npm run build
```

Preview locally:

```bash
npm run preview
```

This site uses the **Node adapter** — ready for deployment on platforms like Vercel, Fly.io, or your own server.

---

## 📄 License

This project is under the [MIT License](LICENSE).

---

## 👥 About Rogue Unit

**Rogue Unit** is a Brazilian game studio specializing in interactive 3D tools and immersive brand experiences.
