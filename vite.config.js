
import { defineConfig } from "vite";
import viteJsconfigPaths from 'vite-jsconfig-paths';
// @ts-ignore
import path from 'path'
function resolve(string) {
  // @ts-ignore
  return path.resolve(__dirname, (string));
}
export default defineConfig({
  plugins: [viteJsconfigPaths()],
  resolve: {
    alias: {
      "@styles": resolve('./styles'),
      "@components": resolve('./components/index.tsx'),
      "@assets": resolve('./assets'),
      "@utils": resolve('./utils'),
      "@pages": resolve('./pages/index.tsx')
    }
  },
  esbuild: {
    jsxFactory: 'Nixix.create',
    jsxFragment: '"fragment"',
    jsxImportSource: 'nixix',
    jsxInject: "import Nixix from 'nixix';", 
    minifyIdentifiers: true, 
  }, 
  server: {
    hmr: true
  }
});