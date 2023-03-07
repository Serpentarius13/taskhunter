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
    component: () => import("@/pages/PageLogin.vue"),
    name: "login",
  },
  {
    path: "/registration",
    component: () => import("@/pages/PageRegistration.vue"),
    name: "Registration",
  },
];

export default routes;
