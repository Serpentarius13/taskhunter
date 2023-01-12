import Router from "vue-router";
import routes from "./routes";

const router = Router.createRouter({
  history: Router.createWebHistory(),
  routes,
});

export default router