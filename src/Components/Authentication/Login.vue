<template>
    <b-container class="mt-10">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                 <b-card>
                    <!-- <b-alert variant="danger" show>Login Error</b-alert><br /> -->
                    <b-form class="form" @submit="handleLogin">
                        <b-form-group label="Email Address">
                            <b-form-input v-model.lazy="email" type="email" placeholder="Enter Email" requied/>
                        </b-form-group>
                        <b-form-group label="Password">
                            <b-form-input v-model.lazy="password" type="password" placeholder="Enter Password" required/>
                        </b-form-group>
                        <b-button type="submit" class="btn-dabs-light" >Submit</b-button>
                    </b-form>
                </b-card>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
   
</template>

<script>
import { eBus } from '../../main';
export default {
    data(){
        return{
            email: null,
            password: null
        }
    },
    methods: {
        handleLogin(e){ 
            e.preventDefault(); 
            console.log("Handled logging");
            // this.$emit('loggedInUser', 'gabby@dabs.com');
            eBus.$emit('loggedInUser', this.email);

        }
    }
}
</script>

<style scoped>
.card{
    background: #272727;
    color: #009EBA;
}
</style>
