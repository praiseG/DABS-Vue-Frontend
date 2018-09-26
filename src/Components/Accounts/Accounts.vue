<template>
    <div>
        <AccountForm />
        <b-card class="mt-3" header="Accounts">
            <div class="table-responsive">
                <table id="accounts-tbl" aria-busy="false" class="table b-table table-striped table-hover table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Designation</th>
                            <th>Created At</th>
                            <th colspan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="all_accounts" v-for="(acc, index) in all_accounts" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{acc.name}}</td>
                            <td>{{acc.email}}</td>
                            <td>{{acc.role}}</td>
                            <td>{{acc.designation}}</td>
                            <td>{{acc.created_at | formatDate}}</td>
                            <td><i class="fas fa-info text-info"></i></td>
                            <td><i class="fas fa-edit text-info"></i></td>
                        </tr>
                        <!-- <tr v-if="!all_accounts"><td colspan="4">No Data in Table</td></tr> -->
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import AccountForm from './AccountForm';
import { formatDate } from '../../Filters/filters';

    export default {
        data(){
            return {
                all_accounts: []
            }
        },
        components:{
            AccountForm
        },
        created(){
            this.$http.get('accounts')
            .then(
                resp => {
                    console.log(resp);
                    this.all_accounts = resp.body;
                }, 
                error => {
                    console.log(error)
            });
        },
        filters: {
            formatDate,
        }
    }
</script>

<style scoped>
li{
    color: red,
}
</style>