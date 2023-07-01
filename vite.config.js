import { defineConfig } from 'vite';
import viteJsconfigPaths from 'vite-jsconfig-paths';
// @ts-ignore
import path from 'path';
function resolve(string) {
  // @ts-ignore
  return path.resolve(__dirname, string);
}
export default defineConfig({
  plugins: [viteJsconfigPaths()],
  resolve: {
    alias: {
      '@styles': resolve('./styles'),
      '@components': resolve('./components/index.tsx'),
      '@assets': resolve('./assets'),
      '@utils': resolve('./utils'),
    },
  },
  esbuild: {
    jsxFactory: 'Nixix.create',
    jsxFragment: '"fragment"',
    jsxImportSource: 'nixix',
    jsxInject: "import Nixix from 'nixix';",
    minifySyntax: true,
    treeShaking: true,
  },
  optimizeDeps: {
    force: true,
    include: ["./node_modules/nixix/primitives/index.ts", "./node_modules/nixix/hoc/index.ts"],
  },
  build: {
    minify: true
  },
  server: {
    hmr: true,
  },
});
