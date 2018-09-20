<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <navigation />
            </b-col>
            <b-col cols="9">
                <div class="mt-1">
                    <!-- <appointments /> -->
                    <Accounts />
                    <!-- <Patients /> -->
                </div>
                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Navigation from './Navigation';
import Accounts from '../Accounts/Accounts';
import Appointments from '../Appointments/Appointments';
import Patients from '../Patients/Patients';

export default {
    components: {
        Navigation,
        Accounts,
        Appointments,
        Patients
    },
    data(){
        return{
            all_ppointments: null,
            all_accounts: null,
            all_patients: null
        }
    },
    methods:{
    },
    created(){
        getAppointments();
    },
    mounted(){
        getAccounts();
        getPatients();
    }
}
</script>
<style scoped>
.container{
    max-width: 1326px;
    padding-left: 0px;
}
</style>
