import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueResource from 'vue-resource';
import Router from './Router';
import { store } from './Store';
import VeeValidate from 'vee-validate';
import underscore from 'underscore';


Object.defineProperty(Vue.prototype, '$_', { value: underscore });

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
Vue.use(VeeValidate, {events: ''});



Vue.http.options.root = store.state.endPoints.root;

Vue.http.interceptors.push(request => {
    console.log("INTERCEPTOR");
    const aToken = localStorage.getItem('token');
    const rUrls = ['auth/token/', 'verify/token/', 'refresh/token/'];
    request.headers.set('content-type', 'application/json');
    console.log(request);

    //verify Token
    if(!rUrls.includes(request.url)){ 
      store.dispatch('verifyToken');
      aToken && request.headers.set('Authorization', 'JWT '+ aToken);
    }
});

Vue.config.productionTip = false;

export const eBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store: store,
})
