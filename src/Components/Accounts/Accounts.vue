<template>
    <div>
        <AccountForm />
        <b-card class="mt-3">
            <!-- {{all_accounts}} -->
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
                        <tr v-if="all_accounts" v-for="(acc, index) in all_accounts" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{acc.name}}</td>
                            <td>{{acc.role}}</td>
                            <td>{{acc.designation}}</td>
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
    export default {
        // props:{
        //     all_accounts: {
        //         type: Array
        //     }
        // },
        data(){
            return {
                all_accounts: null
            }
        },
        components:{
            AccountForm
        },
        created(){
            this.$http.get('accounts', {headers: {'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6InByYWlzZUBkYWJzLmNvbSIsImV4cCI6MTUzNzU5MTg5NCwiZW1haWwiOiJwcmFpc2VAZGFicy5jb20ifQ.y-HjB8y2GXm2ihV4ZJcuJGsoTondrYzcse7F612H4zA'}})
            .then(
                resp => {
                    console.log(resp);
                    this.all_accounts = resp.body;
                }, 
                error => {
                    console.log(error)
            });
        }
    }
</script>

<style scoped>
li{
    color: red,
}
</style>