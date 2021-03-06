import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import HighchartsVue from 'highcharts-vue';


Vue.use(HighchartsVue);

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://api.github.com/repos" : "/";


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
