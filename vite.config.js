import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {
    defineConfig
} from 'vite';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/main.jsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        port: 5174, // Change this to any available port
        strictPort: true, // Prevent Vite from trying the next available port
        hmr: {
            host: 'localhost',
        },
    },
});