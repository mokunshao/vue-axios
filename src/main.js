import Vue from "vue";
import App from "./App.vue";
import qa from "./qa";
Vue.prototype.qa = qa(['./json1.json','./json2.json']);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
