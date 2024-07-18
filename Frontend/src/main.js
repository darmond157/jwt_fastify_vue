import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import router from "./plugins/router";
import store from "./plugins/vuex"

app.use(router);
app.use(store)

app.mount("#app");
