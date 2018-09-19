<template>
    <div>
        <PatientForm />
        <b-card class="mt-3">
            <div class="table-responsive">
                <table id="accounts-tbl" aria-busy="false" class="table b-table table-striped table-hover table-bordered table-sm b-table-fixed">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(acc, index) in accounts" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{acc.name}}</td>
                            <td>{{acc.role}}</td>
                            <td>{{acc.designation}}</td>
                        </tr>      
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import PatientForm from './PatientForm';
    export default {
        data(){
            return {
                accounts: [
                    {name: 'Praise Mariah', role: 'Admin', designation: 'System Admin'},
                    {name: 'Eve Nankanja', role: 'doctor', designation: 'Neuro Sergeon'},
                    {name: 'Gabriel Kyagulanyi', role: 'doctor', designation: 'Chief of Surgery'},
                    {name: 'Carol Nanvuma', role: 'doctor', designation: 'Cardiologist'},
                    {name: 'Cynthia Nantaba', role: 'doctor', designation: 'Paediatrician'}
                ]
            }
        },
        components:{
            PatientForm
        }
    }
</script>

<style scoped>
li{
    color: red,
}
</style>