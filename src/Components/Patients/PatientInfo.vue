<template>
    <b-card header="Patient Profile">
        <b-row>
            <b-col cols="4">
                <b-card class="text-center" body-bg-variant="light">
                     <i class="fas fa-user-circle fa-5x text-secondary"></i>
                     <h5 v-if="patient" class="mt-2">{{patient.name | capitalize}}</h5>
                </b-card>
            </b-col>
            <b-col cols="6">
                <div class="table-responsive" v-if="patient">
                    <table id="patients-tbl" aria-busy="false" class="table b-table  table-sm">
                        <tbody>
                            <tr><td>Email:</td><td>{{patient.email}}</td></tr>
                            <tr><td>Mobile:</td><td>{{patient.mobile}}</td></tr>
                            <tr><td>Age:</td><td>{{patient.age }}</td></tr>
                            <tr><td>Address:</td><td>{{patient.address}}</td></tr>
                            <tr><td>Disability:</td><td>{{patient.disability }} </td></tr>
                            <tr><td>Registered By:</td><td>{{patient.name | capitalize}}</td></tr>
                            <tr><td>Registered On:</td><td>{{patient.registered_on | formatDate}}</td></tr>
                            <tr><td class="pt-3"><router-link :to="patient.id +  '/edit'" class="btn btn-dabs ml-2">Update Info</router-link><router-link :to="patient.id +  '/history'" class="btn btn-dabs ml-2">History</router-link></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>No patient Data</div>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import { capitalize, formatDate } from '../../Filters';
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            patient: null
        }
    },
    computed:{
        ...mapGetters([
            'getPatient'
        ])
    },
    created(){
        let id = this.$route.params.id;
        if(id) this.patient = this.getPatient(id);
    },
    filters:{
        capitalize,
        formatDate
    }
}
</script>

<style scoped>

</style>
