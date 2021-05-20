import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Cards from "../views/Cards"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Cards",
    name: "About",
    component: Cards,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
