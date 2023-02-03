import { RouteMeta } from 'vue-router';

interface IRoute {
  path: string;
  component: unknown;
  name?: string;
  meta?: RouteMeta
}

const routes: IRoute[] = [
  { path: '/', component: () => import('@/views/PageHome.vue'), name: 'Home' },
  {
    path: '/test',
    component: () => import('@/views/PageTest.vue'),
    name: 'Test',
  },
];

export default routes;
