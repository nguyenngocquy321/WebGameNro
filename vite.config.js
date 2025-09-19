import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@ImageModal': path.resolve(__dirname, 'src/assets/ImageModal'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@ImageSlide': path.resolve(__dirname, 'src/assets/ImageSlide'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@logo': path.resolve(__dirname, 'src/assets/logo'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@pages': path.resolve(__dirname, 'src/pages')
        }
    }
});
