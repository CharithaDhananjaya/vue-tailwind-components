import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Cards from "../views/Cards";
import ECommPage from "../views/ECommPage";

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
  {
    path: "/ECommPage",
    name: "ECommPage",
    component: ECommPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
