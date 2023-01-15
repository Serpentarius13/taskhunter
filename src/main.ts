import { createApp } from "vue";
import "./../static/main.scss";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "./router/router";
import VueCookies from "vue-cookies";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueCookies);

app.mount("#app");
