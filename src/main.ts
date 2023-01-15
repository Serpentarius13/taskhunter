import { createApp } from "vue";
import "./../static/main.scss";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "./router/router";
import VueCookies from "vue-cookies";
import { PiniaLogger } from "pinia-logger";

const app = createApp(App);

const pinia = createPinia();
pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: import.meta.env.mode === "PRODUCTION",
  })
);

app.use(pinia);
app.use(router);
app.use(VueCookies);

app.mount("#app");
