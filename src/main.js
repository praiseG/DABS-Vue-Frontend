import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

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

Vue.config.productionTip = false;

export const eBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
