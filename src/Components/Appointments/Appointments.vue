<template>
    <div>
        <AppointmentForm />
        <b-card class="mt-3">
            <div class="table-responsive">
                <table id="appts-tbl" aria-busy="false" class="table b-table table-striped table-hover table-bordered table-sm b-table-fixed">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(appt, index) in appts" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{appt.patient}}</td>
                            <td>{{appt.date}}</td>
                            <td>{{appt.time}}</td>
                            <td>{{appt.doctor}}</td>
                        </tr>      
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import AppointmentForm from './AppointmentForm'
let appointments=[
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
    {patient:"Stella Nyanzi", date:"11-09-2018", time:"12:48", doctor:"Dr. Kambugu Joshua"},
];
export default {
    components: {
        AppointmentForm
    },
    data(){
        return{
            appts: appointments
        }
    }
}
</script>

<style>

</style>
