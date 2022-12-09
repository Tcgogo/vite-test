import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';
// vite.config.ts
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import viteStylelint from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const IsPro = process.env.NODE_ENV === 'production';
// https://vitejs.dev/config/
export default defineConfig({
  // root: './',
  build: {
    sourcemap: IsPro,
    // 如果静态资源体积 >= 8KB，则提取成单独的文件
    // 如果静态资源体积 < 8KB，则作为 base64 格式的字符串内联
    assetsInlineLimit: 8 * 1024
  },
  // 预构建配置
  optimizeDeps: {
    // force: true,
    // 指定入口文件
    // entries: []
    // 决定了可以强制预构建的依赖项
    // include: ["lodash-es", "vue",
    // 间接依赖的声明语法，通过`>`分开, 如`a > b`表示 a 中依赖的 b
    // "@loadable/component > hoist-non-react-statics",]
    // exclude: []
  },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, './src/assets')
    }
  },
  plugins: [
    react(),
    viteEslint(),
    viteStylelint(),
    svgr(),
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno()
        // ...custom presets
      ]
    }),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [path.join(__dirname, 'src/assets/')]
    })
  ]
});
