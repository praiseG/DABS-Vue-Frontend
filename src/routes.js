import Login from './Components/Authentication/Login';
import Logout from './Components/Authentication/Logout';
import Dashboard from './Components/Layouts/Dashboard';
import Appointments from './Components/Appointments/Appointments';
import Accounts from './Components/Accounts/Accounts';
import Patients from './Components/Patients/Patients';
import AppointmentDetail from './Components/Appointments/AppointmentDetail';

export default [
    {path:'/', component: Dashboard,
    children:[
        {path: '', component: Appointments},
        {path: 'appointments', component: Appointments},
        {path: 'appointments/:id', component: AppointmentDetail},
        {path: 'staff', component: Accounts},
        {path: 'patients', component: Patients},
    ]},
    {path: '/login', component: Login},  
    {path:'/logout',component: Logout}
]