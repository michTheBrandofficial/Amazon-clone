
import { defineConfig } from "vite";
import viteJsconfigPaths from 'vite-jsconfig-paths';
import nixixPlugin  from "./hmr/nixix-plugin.js";
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