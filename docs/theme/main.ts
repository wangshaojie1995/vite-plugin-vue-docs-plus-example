import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import { routes, initVueDocsDemo } from "virtual:vite-plugin-vue-docs-plus";
console.log(routes, "routes");
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, {
    path: '/:pathMatch(.*)*', name: 'NotFound', 
    redirect: routes[0]?.path || '/'
  }],
});

const app = createApp(App);

app.use(initVueDocsDemo);
app.use(router);

app.mount("#app");
