import PageLoginVue from "@/pages/PageLogin.vue";
import PageRegistrationVue from "@/pages/PageRegistration.vue";
import { RouteMeta } from "vue-router";

interface IRoute {
  path: string;
  component: any;
  name?: string;
  meta?: RouteMeta;
}

const routes: IRoute[] = [
  { path: "/", component: () => import("@/pages/PageHome.vue"), name: "Home" },
  {
    path: "/test",
    component: () => import("@/pages/PageTest.vue"),
    name: "Test",
  },
  {
    path: "/login",
    component: () => PageLoginVue,
    name: "login",
  },
  {
    path: "/registration",
    component: () => PageRegistrationVue,
    name: "Registration",
  },
];

export default routes;
