import { createWebHistory, createRouter } from 'vue-router';

import LandingPage from "./views/Landing.vue";
import LoginPage from "./views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage
    },
    {
      path: "/login",
      name: "login-page",
      component: LoginPage
    }
  ]
})

export default router;
