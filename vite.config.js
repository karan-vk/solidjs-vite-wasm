import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { ViteRsw } from 'vite-plugin-rsw';


export default defineConfig({
  plugins: [solidPlugin(),
  ViteRsw({
    crates: [
      'inc',
    ]
  }),],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
