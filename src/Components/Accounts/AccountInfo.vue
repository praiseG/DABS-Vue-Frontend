<template>
    <b-card header="User Profile">
        <b-row>
            <b-col cols="4">
                <b-card class="text-center" body-bg-variant="light">
                     <i class="fas fa-user-circle fa-5x text-secondary"></i>
                     <h5 v-if="account" class="mt-2">{{account.name | capitalize}}</h5>
                </b-card>
            </b-col>
            <b-col cols="6">
                <div class="table-responsive" v-if="account">
                    <table id="accounts-tbl" aria-busy="false" class="table b-table  table-sm">
                        <tbody>
                            <tr><td>Designation:</td><td>{{account.designation | capitalize}}</td></tr>
                            <tr><td>Staff Role:</td>
                                <td v-if="account.role">{{account.role | capitalize}}</td>
                                <td v-else>N/A</td>
                            </tr>
                            <tr><td>email:</td><td>{{account.email}}</td></tr>
                            <tr><td>Last Login:</td>
                                <td v-if="account.last_login">{{account.last_login | formatDateTime}}</td>
                                <td v-else>Never</td>
                            </tr>
                            <tr><td>Created At:</td><td>{{account.created_at | formatDate}}</td></tr>
                            <tr><td>Is Staff:</td><td>{{account.is_staff | capitalize}}</td></tr>
                            <tr><td>Is SuperUser:</td><td>{{account.is_superuser | capitalize}} </td></tr>
                            <tr><td>Is Active:</td><td>{{account.is_active | capitalize}}</td></tr>
                            <tr ><td class="pt-3"><router-link :to="account.id +  '/reset-password'" class="btn btn-dabs">Reset Password</router-link><router-link :to="account.id +  '/edit'" class="btn btn-dabs ml-2">Update Info</router-link></td><td></td></tr>
                        </tbody>
                    </table>
                </div>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import { formatDate, formatDateTime, capitalize } from '../../Filters/filters';
export default {
    data(){
        return {
            account: null
        }
    },
    created(){
        let id = this.$route.params.id;
        console.log("id " + id);
        id && this.$store.dispatch('getAccount', id)
        .then(response =>{
            console.log(response);
            this.account = response.body;
        },error =>{
            console.log(error);
        });
    },
    filters:{
        formatDate,
        formatDateTime,
        capitalize
    }
}
</script>

<style scope>

</style>
