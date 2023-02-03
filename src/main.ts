import { createApp } from 'vue';
import '../static/main.scss';

import VueCookies from 'vue-cookies';

import { createPinia } from 'pinia';
import { PiniaLogger } from 'pinia-logger';

import router from './router/router';
import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();
pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: import.meta.env.mode === 'PRODUCTION',
  }),
);

app.use(pinia);
app.use(router);
app.use(VueCookies);

app.mount('#app');
