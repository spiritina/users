import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import VueRouter from 'vue-router'

import {routes} from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: h => h(App)
})
