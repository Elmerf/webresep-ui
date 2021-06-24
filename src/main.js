import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "@/scss/custom.scss";
import axios from "axios";
import VueSession from "vue-session";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "localhost:3000";

Vue.config.productionTip = false;
Vue.use(VueSession, { persist: true });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
