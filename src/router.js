import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue';
import Product from './pages/Product.vue';
import Cart from './pages/Cart.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/products/:slug',
      name: 'product',
      component: Product,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log({to, from})
  next()
})