import Login from '../Components/Authentication/Login';
import Logout from '../Components/Authentication/Logout';
import NotFound from '../Components/Layouts/NotFound';
import Dashboard from '../Components/Layouts/Dashboard';
import Appointments from '../Components/Appointments/Appointments';
import Accounts from '../Components/Accounts/Accounts';
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
        {path: 'patients', component: Patients},
    ],
    meta: {
        requiresLogin: true
    }
    },
    {path: '/login', component: Login, meta: {requiresVisitor: true}},  
    {path: '/logout', component: Logout},
    {path:'/NotFound',component: NotFound}
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
  });

router.beforeEach((to,from, next) => {
    if(!to.matched.length){
      next('/NotFound');
    } else if(to.matched.some(record => record.meta.requiresLogin)) {
      if(localStorage.getItem('token') == null){
        console.log('requires Login');
        next('/login');
      }else{
        next();
      }
    }
    else if(to.matched.some(record => record.meta.requiresVisitor)) {
      if(localStorage.getItem('token')){
        console.log('requires Visitor');
        next('/');
      }else{
        next();
      }
    }
    else{
      next();
    }
});

export default router;