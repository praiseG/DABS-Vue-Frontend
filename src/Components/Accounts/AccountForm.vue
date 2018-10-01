<template>
    <FormHelper>
        <span slot="add-label">Account</span>
        <b-form @submit.prevent="handleSubmit" slot="fields-row">
        <b-alert v-if="submitted && formInvalid" variant="danger" show>
            <p v-for="error in errors.items" :key="error.id">{{error.msg}}</p>
            <p v-if="apiErrors">{{apiErrors}}</p>
        </b-alert>
        <b-alert v-if="submitted && success" variant="success" show>{{success}}</b-alert>
        <b-row>
            <b-col cols="4">
                <b-form-input v-validate="'required'" name="name" type="text" v-model.lazy="account.name" placeholder="Name"/>
            </b-col>
            <b-col cols="4">
                <b-form-input type="email" name="email" v-validate="'required|email'" v-model.lazy="account.email" placeholder="Email" />
            </b-col>
            <b-col cols="4">
                <b-form-select v-model.lazy="account.role">
                    <template slot="first">
                        <option :value=null disabled>Assign Role</option>
                    </template>
                    <option v-for="role in roles" :key="role" :value="role">
                        {{role | capitalize }}
                    </option>
                </b-form-select>
            </b-col>
            <b-col cols="4" class="mt-2">
                <b-form-input type="text" name="designation" v-validate="'required'" v-model.lazy="account.designation" placeholder="Enter Designation" />
            </b-col>
            <b-col cols="4" class="mt-2">
                <b-form-input type="password" name="password" ref="password" v-validate="'required'" v-model.lazy="account.password" placeholder="Enter Password" />
            </b-col>
            <b-col cols="4" class="mt-2">
                <b-form-input type="password" name="confirm_password" v-validate="'required|confirmed:password'" v-model.lazy="account.confirm_password" placeholder="Confirm Password" data-vv-as="Confirm Password"/>
            </b-col>
            <b-col cols="4" class="mt-2">
                <b-form-checkbox v-model.lazy="account.is_staff">Staff</b-form-checkbox>
            </b-col>
            <b-col cols="4" class="mt-2">
                <b-form-checkbox v-model.lazy="account.is_active">Active</b-form-checkbox>
            </b-col>
            <b-col cols="4" class="mt-2">
                <b-form-checkbox v-model.lazy="account.is_superuser">Super User</b-form-checkbox>
            </b-col>
        </b-row>
         <b-row>
            <b-col cols="3" class="mt-3">
                <b-button class="btn-dabs" type="submit">Submit</b-button>
            </b-col>
        </b-row>
        </b-form>
    </FormHelper>
</template>

<script>

import FormHelper from '../Layouts/FormHelper';
import { capitalize } from '../../Filters/filters';
export default {
    data(){
        return{
            submitted: false,
            formInvalid: false,
            apiErrors: null,
            roles: ['doctor','helpdesk', 'manager'],
            success: null,
            account_fields: {
                "name": null,
                "email": null,
                "role": null,
                "designation": null,
                "password": null,
                "confirm_password": null,
                "is_active": true,
                "is_staff": false,
                "is_superuser": false
            },
            account: null
        }
    },
    components: {
        FormHelper
    },
    filters:{
        capitalize
    },
    methods:{
        handleSubmit(e){
            this.submitted = true;
            this.$validator.validateAll().then(valid =>{
                if(valid){
                    this.formInvalid = false;
                    this.$store.dispatch('createAccount', this.account)
                    .then(resp => {
                        this.success = "Account Creation Successful";
                        this.apiErrors = null;
                        console.log(resp);
                        this.account = this.account_fields;
                    }, error => {
                        console.log(error)
                        this.formInvalid = true;
                        this.apiErrors =Object.values(error.body)[0];
                    });
                    
                }else{
                    this.formInvalid = true;
                }
            });
        }
    },
    created(){
        this.account = this.account_fields;
    }
}
</script>

<style scoped>

</style>
