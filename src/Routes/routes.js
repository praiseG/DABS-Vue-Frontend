import Login from '../Components/Authentication/Login';
import Logout from '../Components/Authentication/Logout';
import NotFound from '../Components/Layouts/NotFound';
import Dashboard from '../Components/Layouts/Dashboard';
import Appointments from '../Components/Appointments/Appointments';
import Accounts from '../Components/Accounts/Accounts';
import Doctors from '../Components/Accounts/Doctors';
import Patients from '../Components/Patients/Patients';
import AppointmentDetail from '../Components/Appointments/AppointmentDetail';

export default [
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