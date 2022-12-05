import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';
// vite.config.ts
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import viteStylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.join(__dirname, "src"),
  plugins: [
    react(),
    viteEslint(),
    viteStylelint(),
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno()
        // ...custom presets
      ]
    })
  ]
});
