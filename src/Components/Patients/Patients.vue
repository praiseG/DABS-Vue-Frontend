<template>
    <div>
        <PatientForm />
        <b-card class="mt-3" header="Patients">
            <div class="table-responsive">
                <table id="patientss-tbl" aria-busy="false" class="table b-table table-striped table-hover table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Age</th>
                            <th>Disability</th>
                            <th>Registered</th>
                            <td colspan="3"></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(patient, index) in patients" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{patient.name | capitalize}}</td>
                            <td>{{patient.email}}</td>
                            <td>{{patient.mobile}}</td>
                            <td>{{patient.age}}</td>
                            <td>{{patient.disability}}</td>
                            <td>{{patient.registered_on | formatDateTime }}</td>
                            <td><router-link :to="'patients/' + patient.id + ''"><i class="fas fa-info text-info" v-b-tooltip.hover  title="Profile"></i></router-link><router-link :to="'patients/' + patient.id + ''"><i class="fas fa-history text-info" v-b-tooltip.hover  title="History"></i></router-link></td>
                            <td><router-link :to="'patients/' + patient.id + '/edit'"><i class="fas fa-user-edit text-info" v-b-tooltip.hover  title="Edit"></i></router-link></td>
                        </tr>      
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import PatientForm from './PatientForm';
import { mapState } from 'vuex';
import { formatDateTime, capitalize } from '../../Filters';
    export default {
        computed: {
            ...mapState([
                'patients'
            ])
        },
        components:{
            PatientForm
        },
        created(){
            this.$store.dispatch('fetchPatients');
        },
        filters:{
            formatDateTime,
            capitalize
        }
    }
</script>

<style scoped>
li{
    color: red,
}
</style>