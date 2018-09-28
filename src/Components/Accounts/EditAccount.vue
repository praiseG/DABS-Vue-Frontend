<template>
    <b-card no-body>
        <b-card-header><strong>{{account.name}}</strong></b-card-header>
        <b-card-body >
            <b-form @submit.prevent="handleSubmit">
                <b-alert v-if="submitted && formInvalid" variant="danger" show>
                    <p v-if="errors" v-for="error in errors.items" :key="error.id">{{error.msg}}</p>
                    <p v-if="formErrors">{{formErrors}}</p>
                </b-alert>
                <b-alert v-if="submitted && success" variant="success" show>
                    <p>{{success}}</p>
                </b-alert>
                <b-row>
                    <b-col cols="4">
                        <b-form-group label="Full Name:">
                            <b-form-input v-validate="'required'" name="name" type="text" v-model.lazy="account.name" placeholder="Name"/>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label="Email Address:">
                        <b-form-input type="email" name="email" v-validate="'required|email'" v-model.lazy="account.email" placeholder="Email" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label="Staff Role:">
                            <b-form-select v-model.lazy="account.role">
                                <template slot="first">
                                    <option :value=null disabled>Assign Role</option>
                                </template>
                                <option v-for="role in roles" :key="role" :value="role">
                                    {{role | capitalize }}
                                </option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4" class="mt-2">
                        <b-form-group label="Designation:">
                            <b-form-input type="text" name="designation" v-validate="'required'" v-model.lazy="account.designation" placeholder="Enter Designation" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4" class="mt-2">
                        <b-form-group label="Permissions:">
                            <b-form-checkbox v-model.lazy="account.is_staff">Staff</b-form-checkbox>
                            <b-form-checkbox v-model.lazy="account.is_active">Active</b-form-checkbox>
                            <b-form-checkbox v-model.lazy="account.is_superuser">Super User</b-form-checkbox>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" class="mt-3">
                        <b-button class="btn-dabs" type="submit">Update</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card-body>
         <b-card-body class="reset-password">
            <b-form @submit.prevent="resetPassword">
                <b-alert v-if="pSubmitted && pFormInvalid" variant="danger" show>
                    <p v-if="errors" v-for="error in errors.items" :key="error.id">{{error.msg}}</p>
                    <p v-if="pFormErrors">{{pFormErrors}}</p>
                </b-alert>
                <b-alert v-if="pSubmitted && pSuccess" variant="success" show>
                    <p>{{success}}</p>
                </b-alert>
                <b-row>
                    <b-col cols="4">
                        <b-form-group label="Password:">
                            <b-form-input v-validate="'required'" name="password" type="password" v-model.lazy="password" placeholder="Password"/>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label="Confirm Password:">
                        <b-form-input type="password" name="confirm_password" v-validate="'required|confirmed:password'" v-model.lazy="account.confirm_password" placeholder="Confirm Password" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                            <b-button class="btn-dabs mt-4" type="submit">Reset Password</b-button>
                    </b-col>
                </b-row>

            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>

import { capitalize } from '../../Filters/filters';
export default {
    data(){
        return{
            confirm_password: null,
            password: null,
            submitted: false,
            success: false,
            formInvalid: false,
            formErrors: null,
            pFormErrors: null,
            pFormInvalid: false,
            pSuccess: false,
            pSubmitted: false,
            roles: ['doctor','helpdesk', 'manager'],
            account: {
                "name": null,
                "email": null,
                "role": null,
                "designation": null,
                "password": null,
                "is_active": true,
                "is_staff": false,
                "is_superuser": false
            }
        }
    },
    filters:{
        capitalize
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
    methods:{
        handleSubmit(e){
            this.submitted = true;
            this.$validator.validateAll().then(valid =>{
                if(valid){
                    this.$store.dispatch('updateAccount', this.account)
                    .then(response =>{
                        this.formErrors = null;
                        this.success = response.body.message;
                    },error =>{
                        this.formInvalid = true;
                        this.formErrors = "Error from API. check console";
                        this.formErrors = error.bodyText;
                        console.log(error);
                    });
                    console.log(this.account);
                }else{
                    this.formInvalid = true;
                }
            });
        },
        resetPassword(e){
            this.pSubmitted = true;
            this.$validator.validate(valid => {
                if(valid){
                    this.pFormErrors = null;   
                    this.success = "Password Reset Successful";
                }else{
                    this.pFormInvalid = true;
                }
            })
        }
    }
}
</script>

<style scoped>
.reset-password{
    border-top: 1px solid rgb(190, 187, 181);
}
</style>
