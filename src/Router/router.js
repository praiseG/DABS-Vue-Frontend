import Login from '../Components/Authentication/Login';
import Logout from '../Components/Authentication/Logout';
import NotFound from '../Components/Layouts/NotFound';
import Forbidden from '../Components/Layouts/Forbidden';
import Dashboard from '../Components/Layouts/Dashboard';
import Appointments from '../Components/Appointments/Appointments';
import Accounts from '../Components/Accounts/Accounts';
import AccountInfo from '../Components/Accounts/AccountInfo';
import EditAccount from '../Components/Accounts/EditAccount';
import Doctors from '../Components/Accounts/Doctors';
import Patients from '../Components/Patients/Patients';
import AppointmentDetail from '../Components/Appointments/AppointmentDetail';
import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    {path:'/', component: Dashboard,
    children:[
        {path: '', component: Appointments},
        {path: 'appointments', component: Appointments},
        {path: 'appointments/:id', component: AppointmentDetail},
        {path: 'staff', component: Accounts},
        {path: 'doctors', component: Doctors},
        {path: 'accounts/:id', alias: ['staff/:id', 'doctors/:id'], component: AccountInfo}, 
        {path: 'accounts/:id/edit', alias: ['staff/:id/edit', 'doctors/:id/edit'], component: EditAccount},
        {path: 'patients', component: Patients},
    ],
    meta: {
        requiresLogin: true,
        permission: 'doctor',
        fail: '/Forbidden'
    }
    },
    {path: '/login', component: Login, meta: {
      requiresVisitor: true,
      permission: 'any',
      fail: '/forbidden'
    }},  
    {path: '/logout', component: Logout},
    {path:'/notfound',component: NotFound},
    {path:'/forbidden',component: Forbidden}
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
  });

router.beforeEach((to,from, next) => {
    if(!to.matched.length){
      next('/notfound');
      // next('/forbidden');
    }else if(to.matched.some(record => record.meta.requiresLogin)) {
      if(localStorage.getItem('token') == null){
        console.log('requires Login');
        next('/login');
      } else{
        next();
      }
    }else if(to.matched.some(record => record.meta.requiresVisitor)) {
      if(localStorage.getItem('token')){
        console.log('requires Visitor');
        next('/');
      }else{
        next();
      }
    }else{
      next();
    }
});

export default router;