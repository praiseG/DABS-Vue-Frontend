import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

library.add(faUserCircle, faPlus);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
