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
                            <td><router-link :to="'accounts/' + acc.id + ''"><i class="fas fa-info text-info"></i></router-link></td>
                            <td><router-link :to="'accounts/' + acc.id + '/edit'"><i class="fas fa-user-edit text-info"></i></router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import AccountForm from './AccountForm';
import EditAccount from './EditAccount';
import { formatDate } from '../../Filters/filters';

    export default {
        data(){
            return {
                all_accounts: [],
            }
        },
        components:{
            AccountForm,
            EditAccount
        },
        beforeCreate(){
            this.$store.dispatch('getAccounts');
        },
        created(){
            this.all_accounts = this.$store.state.accounts;
        },
        beforeMount(){
            this.all_accounts = this.$store.state.accounts;
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