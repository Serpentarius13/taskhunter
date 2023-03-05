import { RouteMeta } from 'vue-router';

interface IRoute {
  path: string;
  component: any;
  name?: string;
  meta?: RouteMeta;
}

const routes: IRoute[] = [
  { path: '/', component: () => import('@/pages/PageHome.vue'), name: 'Home' },
  {
    path: '/test',
    component: () => import('@/pages/PageTest.vue'),
    name: 'Test',
  },
];

export default routes;
