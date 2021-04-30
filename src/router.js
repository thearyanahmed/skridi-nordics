import { createRouter, createWebHistory } from "vue-router"

import Home from "./pages/Home.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log({to, from})
  next()
})