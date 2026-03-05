import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapterStatic({
            // Use a fallback page so unprerendered routes (e.g. /contact) are
            // served client-side as an SPA. Note: form actions in +page.server.ts
            // will NOT work on GitHub Pages (no backend). Replace the contact
            // form with a client-side service (Formspree, EmailJS, etc.) if needed.
            fallback: '404.html'
        }),
        paths: {
            // Set BASE_PATH env variable in CI to match the repository name, e.g.
            // BASE_PATH=/rogueunit-gg for vhaueisen.github.io/rogueunit-gg
            base: process.env.BASE_PATH ?? ''
        }
    }
};

export default config;
