<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <navigation />
            </b-col>
            <b-col cols="9">
                <div class="mt-1">
                    <router-view></router-view>
                </div>
                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Navigation from './Navigation';
import { eBus } from '../../main';

export default {
    components: {
        Navigation,
    },
    data(){
        return{
            all_ppointments: null,
            all_accounts: null,
            all_patients: null
        }
    },
    methods:{
        // getAccounts(){
        //     this.$http.get('accounts', {headers: {'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6InByYWlzZUBkYWJzLmNvbSIsImV4cCI6MTUzNzU5MTM2OCwiZW1haWwiOiJwcmFpc2VAZGFicy5jb20ifQ.3NL6NeE8u35rbOJ801Ax55wc272p2l0rxiix2MrPgYY'}})
        //     .then(
        //         resp => {
        //             console.log(resp);
        //             this.all_accounts = resp.body;
        //         }, 
        //         error => {
        //             console.log(error)
        //     });
        // }
    },
    created(){
        // getAppointments();
        const uname = localStorage.getItem('username');
        uname && eBus.$emit('loggedInUser', uname);
    },
    mounted(){
        // this.getAccounts();
        // getPatients();
    }
}
</script>
<style scoped>
.container{
    max-width: 1326px;
    padding-left: 0px;
}
</style>
