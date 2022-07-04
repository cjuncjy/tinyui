import Vue from "vue";
import App from "./App.vue";
import TinyUi from './packages/index'

Vue.config.productionTip = false;

Vue.use(TinyUi)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
