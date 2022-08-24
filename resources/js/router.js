import { createWebHistory, createRouter } from 'vue-router';

import LandingPage from "./views/Landing.vue";
import LoginPage from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";

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
    },
    {
      path: "/dashboard",
      name: "dashboard-page",
      component: Dashboard
    }
  ]
})

export default router;
