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
                            <th>Active</th>
                            <th colspan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="staff" v-for="(acc, index) in staff" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{acc.name | capitalize}}</td>
                            <td>{{acc.email}}</td>
                            <td>{{acc.role}}</td>
                            <td>{{acc.designation | capitalize}}</td>
                            <td>{{acc.created_at | formatDate}}</td>
                            <td>
                                <b-badge variant="success" v-if="acc.is_active">Yes</b-badge>
                                <b-badge variant="danger" v-if="!acc.is_active">No</b-badge>
                            </td>
                            <td><router-link :to="'staff/' + acc.id + ''"><i class="fas fa-info text-info" v-b-tooltip.hover  title="Profile"></i></router-link></td>
                            <td><router-link v-can:edit="'Account'" :to="'staff/' + acc.id + '/edit'"><i class="fas fa-user-edit text-info" v-b-tooltip.hover  title="Edit"></i></router-link></td>
                        </tr>
                        <tr v-else><td colspan="9"> No Staff to display</td></tr>
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import AccountForm from './AccountForm';
import EditAccount from './EditAccount';
import { formatDate, capitalize } from '../../Filters';
import { mapGetters }  from 'vuex';

    export default {
        computed:{
            ...mapGetters({
              staff: 'getStaff'  
            })
        },
        components:{
            AccountForm,
            EditAccount
        },
        filters: {
            formatDate,
            capitalize
        }
    }
</script>

<style scoped>
li{
    color: red,
}
</style>