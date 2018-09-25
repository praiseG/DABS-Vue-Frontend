<template>
    <b-container class="mt-10">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                 <b-card>
                    <b-alert variant="danger" v-if="submitted && formErrors" show>
                        <p v-if="loginError">{{loginError}}</p>
                        <p v-if="errors" v-for="error in errors.items" :key="error.id">{{error.msg}}</p>
                    </b-alert>
                    <b-form class="form" @submit.prevent="handleLogin">
                        <b-form-group label="Email Address">
                            <b-form-input v-model.lazy="email" v-validate="'required|email'" name="email" type="email" placeholder="Enter Email"/>
                        </b-form-group>
                        <b-form-group label="Password">
                            <b-form-input v-model.lazy="password" v-validate="'required'" name="password" type="password" placeholder="Enter Password"/>
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
            password: null,
            loginError: null,
            submitted: false,
            formErrors: false
        }
    },
    methods: {
        handleLogin(){ 
            this.submitted = true;
            
            this.$validator.validate().then(valid =>{
                if(valid){
                    this.$http.post('auth/token/', {
                        "email": this.email,
                        "password": this.password
                    })
                    .then(resp => {
                        console.log(resp);
                        this.loginError = null;
                        localStorage.setItem('token', resp.body.token);
                        localStorage.setItem('username', this.email);
                        eBus.$emit('loggedInUser', this.email);
                        this.$router.push('/');
                    },
                    error => {
                        this.formErrors= true;
                        console.log(error);
                        switch(error.status){
                            case 400:
                                this.loginError = error.body.non_field_errors[0];
                                break;
                            default:
                                this.loginError = "Error Logging in: " + error.status + "-" + error.statusText;
                                break
                        }   
                        
                    });
                }else{
                    this.formErrors = true;
                }
            })   
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
