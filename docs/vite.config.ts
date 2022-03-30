import { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import docs from "vite-plugin-vue-docs-plus";

const config: UserConfig = {
  plugins: [vue(), docs()],
  alias: {
    "@vite-plus-vue-docs-plus": `${path.resolve(__dirname, "../src")}`,
  },
  define: {
    "process.env": {},
  },
};

export default config;
