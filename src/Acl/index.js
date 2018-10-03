import Vue from 'vue';
import { store } from '../Store';
import Acl from 'vue-browser-acl';

const user = store.getters.getActiveAccount;

console.log("user in ACL: " + JSON.stringify(user));

Vue.use(Acl, user, (acl) => {
    acl.rule('view', 'Account', user => user.role !== 'doctor'),
    acl.rule(['add', 'edit'], 'Account', user => user.role == 'manager')
})