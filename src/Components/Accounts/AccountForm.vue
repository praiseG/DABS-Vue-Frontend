<template>
    <FormHelper>
        <span slot="add-label">Account</span>
        <b-form @submit.prevent="handleSubmit" slot="fields-row">
        <b-alert v-if="formInvalid" variant="danger" show>
            <p v-for="error in errors.items" :key="error.id">{{error.msg}}</p>
        </b-alert>
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
                <b-form-input type="password" name="password" v-validate="'required'" v-model.lazy="account.password" placeholder="Enter Password" />
            </b-col>
            <b-col cols="4" class="mt-2">
                <b-form-input type="password" name="confirm_password" v-validate="'required'" v-model.lazy="confirm_password" placeholder="Confirm Password" />
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
import { capitalize } from '../../filters';
export default {
    data(){
        return{
            confirm_password: null,
            submitted: false,
            formInvalid: false,
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
                    console.log(this.account);
                }else{
                    this.formInvalid = true;
                }
            });
        }
    }
}
</script>

<style scoped>
input[type="checkbox" i] {
  background: #fff;
}
</style>
