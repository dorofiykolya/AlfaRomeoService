import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Order from "./components/Order.vue"
import Clients from "./components/Clients.vue"
import Autos from "./components/Autos.vue"

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.component(Order.name, Order);
Vue.component(Clients.name, Clients);
Vue.component(Autos.name, Autos);

const routes = [
  {
    path: '/',
    component: Order
  },
  {
    path: "/clients",
    component: Clients,
  },
  {
    path: "/autos",
    component: Autos
  }
]

const router = new VueRouter({
  routes
})

var AppContext = new Vue({
  router,
  el: "#app",
  render: h => h(App),
});
