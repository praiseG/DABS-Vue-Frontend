<template>
    <b-container class="mt-10">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                 <b-card>
                    <!-- <b-alert variant="danger" show>Login Error</b-alert><br /> -->
                    <b-form class="form" @submit="handleLogin">
                        <b-form-group label="Email Address">
                            <b-form-input type="email" ref="email" placeholder="Enter Email"/>
                        </b-form-group>
                        <b-form-group label="Password">
                            <b-form-input type="password" ref="pwd" placeholder="Enter Password"/>
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
export default {
    data(){
        return{
            username: undefined,
            password: undefined
        }
    },
    methods: {
        handleLogin(e){ e.preventDefaults(); return true; }
    }
}
</script>

<style scoped>
.card{
    background: #272727;
    color: #009EBA;
}
</style>
