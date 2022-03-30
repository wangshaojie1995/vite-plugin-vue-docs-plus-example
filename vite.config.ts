import { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import docs from "vite-plugin-vue-docs-plus";

const config: UserConfig = {
  plugins: [vue(), docs()],
  alias: {
    vue: "vue/dist/vue.esm-bundler.js",
  },
  define: {
    "process.env": {},
  },
};

export default config;
