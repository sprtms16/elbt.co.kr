import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:product",
    name: "product",
    component: ProductView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    return { x: 0, y: 0, behavior: "smooth" }; // Go to the top of the page if no hash
  },
});

export default router;
