<template>
    <div>
        <AppointmentForm />
        <b-card class="mt-3">
            <b-table striped hover responsive bordered  small fixed :items="appts" :per-page=10></b-table>
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
