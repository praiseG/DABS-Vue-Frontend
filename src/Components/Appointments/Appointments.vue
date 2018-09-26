<template>
    <div>
        <AppointmentForm />
        <b-card class="mt-3" header="Appointments">
            <div class="table-responsive">
                <table id="appts-tbl" aria-busy="false" class="table b-table table-striped table-hover table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Doctor</th>
                            <th>Logged By</th>
                            <th>Logged At</th>
                            <th>Status</th>
                            <th colspan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(appt, index) in appts" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{appt.patient.name}}</td>
                            <td>{{appt.date | formatDateTime}}</td>
                            <td>{{appt.assigned_to.name}}</td>
                            <td>{{appt.logged_by.name}}</td>
                            <td>{{appt.logged_at | formatDateTime}}</td>
                            <td>
                                <b-badge v-if="appt.status=='completed'" variant="success">{{appt.status | capitalize}}</b-badge>
                                <b-badge v-if="appt.status=='cancelled'" variant="danger">{{appt.status | capitalize}}</b-badge>
                                <b-badge v-if="appt.status=='new'" variant="info">{{appt.status | capitalize}}</b-badge>
                                <b-badge v-if="appt.status=='queried'" variant="warning">{{appt.status | capitalize}}</b-badge>
                                <b-badge v-if="appt.status=='in-progress'" variant="secondary">{{appt.status | capitalize}}</b-badge>
                                
                            </td>
                            <td><i class="fas fa-info text-info"></i></td>
                            <td><i class="fas fa-edit text-info"></i></td>
                        </tr>      
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import AppointmentForm from './AppointmentForm';
import { formatDateTime, capitalize } from '../../Filters/filters';
export default {
    components: {
        AppointmentForm
    },
    data(){
        return{
            appts: []
        }
    },
    created(){
        this.$http.get('appointments/')
        .then(response => {
                this.appts = response.body;
                console.log(this.appts);
            },
            error => {
                console.log(error);
        })
    },
    filters: {
        formatDateTime,
        capitalize
    }
}
</script>

<style>

</style>
