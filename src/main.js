import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router.js"

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Order from "./components/Order.vue"

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.component(Order.name, Order);

var AppContext = new Vue({
  el: "#app",
  render: h => h(App),
});
