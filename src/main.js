import Vue from 'vue/dist/vue.js';
import App from "./App.vue"
import VueRouter from 'vue-router'
import routes from './routes';

import "./assets/css/index.css";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: 'text-indigo-400',
});

Vue.use(VueRouter)

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
