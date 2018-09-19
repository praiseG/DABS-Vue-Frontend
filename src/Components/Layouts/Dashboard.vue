<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <navigation />
            </b-col>
            <b-col cols="9">
                <div class="mt-1">
                    <appointments />
                </div>
                
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Navigation from './Navigation';
import Accounts from '../Accounts/Accounts';
import Appointments from '../Appointments/Appointments'

export default {
    components: {
        Navigation,
        Accounts,
        Appointments,
    },
    data(){
        return{
            'content': 'This is the body'
        }
    }

}
</script>
<style scoped>
.container{
    max-width: 1326px;
    padding-left: 0px;
}
</style>
