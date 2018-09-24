import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

window.$ = window.jQuery = require('jquery');
require('popper.js');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/regular.css';

import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

router.beforeEach((to,from, next) => {
  if(!to.matched.length){
    next('/NotFound');
  } else if(to.matched.some(record => record.meta.requiresLogin)) {
    if(!localStorage.getItem('token')){
      next('/login');
    }
  }else if(to.matched.some(record => record.meta.requiresVisitor)) {
    if(localStorage.getItem('token')){
      next('/');
    }
  }
  else{
    next();
  }


});

Vue.http.options.root = 'http://localhost:8003/api/v1/';
Vue.http.headers.common['content-type'] = 'application/json';

Vue.config.productionTip = false;

export const eBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
