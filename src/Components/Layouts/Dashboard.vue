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
import Acl from '../../Acl';


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
    created(){
        this.$store.dispatch('getAccounts');
    },
    
   
}
</script>
<style scoped>
.container{
    max-width: 1326px;
    padding-left: 0px;
}
.col{
    padding-left: 0px;
}
ul{
    width: 95%;
}
</style>
