import Vue from "vue";
import App from "./App.vue";
import qa from "./qa";
Vue.prototype.qa = qa();
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
