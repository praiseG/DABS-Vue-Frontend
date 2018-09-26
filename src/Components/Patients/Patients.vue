<template>
    <div>
        <PatientForm />
        <b-card class="mt-3" header="Patients">
            <div class="table-responsive">
                <table id="accounts-tbl" aria-busy="false" class="table b-table table-striped table-hover table-bordered table-sm">
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
                        <tr v-for="(acc, index) in accounts" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{acc.name | capitalize}}</td>
                            <td>{{acc.email}}</td>
                            <td>{{acc.mobile}}</td>
                            <td>{{acc.age}}</td>
                            <td>{{acc.disability}}</td>
                            <td>{{acc.registered_on | formatDateTime }}</td>
                            <td><i class="fas fa-history text-info"></i></td>
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
import PatientForm from './PatientForm';
import { formatDateTime, capitalize } from '../../Filters/filters';
    export default {
        data(){
            return {
                accounts: []
            }
        },
        components:{
            PatientForm
        },
        created(){
            this.$http.get('patients')
            .then(response => {
                    this.accounts = response.body;
                }, error =>{
                    console.log(errors);
            })
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