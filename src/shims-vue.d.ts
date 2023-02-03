import type { DefineComponent } from 'vue';

declare module '*.vue' {
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export default component;
}

declare module 'vue-router' {
  interface RouteMeta {
    isPublic?: boolean;
    title?: string;
    requiresAuth?: boolean;
  }
}
