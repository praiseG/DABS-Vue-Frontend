<template>
    <b-card no-body v-if="account">
        <b-card-header><strong>{{account.name}}</strong></b-card-header>
        <b-card-body >
            <b-form @submit.prevent="handleSubmit" data-vv-scope="edit-form">
                <b-alert v-if="submitted && formInvalid" variant="danger" show>
                    <p v-if="errors" v-for="error in errors.items" :key="error.id">{{error.msg}}</p>
                    <p v-if="formErrors">{{formErrors}}</p>
                </b-alert>
                <b-alert 
                        v-if="submitted && success" 
                        variant="success" show dismissible @dismissed="success=''">
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
            <b-form @submit.prevent="resetPassword" data-vv-scope="reset-form" class="mt-3">
                <b-alert v-if="pSubmitted && pFormInvalid" variant="danger" show>
                    <p v-if="errors" v-for="error in errors.items" :key="error.id">{{error.msg}}</p>
                    <p v-if="pFormErrors">{{pFormErrors}}</p>
                </b-alert>
                <b-alert v-if="pSubmitted && pSuccess" variant="success" show
                            dismissible @dismissed="pSuccess=''">
                    <p>{{pSuccess}}</p>
                </b-alert>
                <b-row>
                    <b-col cols="4">
                        <b-form-group label="Password:">
                            <b-form-input type="password" v-validate="'required'" name="password" ref="password"   v-model.lazy="password" placeholder="Password"/>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label="Confirm Password:">
                        <b-form-input type="password" name="confirm_password" v-validate="'required|confirmed:password'" v-model.lazy="confirm_password" placeholder="Confirm Password" data-vv-as="password"/>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-button class="btn-dabs mt-32" type="submit">Reset Password</b-button>
                    </b-col>
                </b-row>

            </b-form>
        </b-card-body>
    </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { capitalize } from '../../Filters/filters';
export default {
    data(){
        return{
            id: null,
            confirm_password: null,
            password: null,
            submitted: false,
            success: null,
            formInvalid: false,
            formErrors: null,
            pFormErrors: null,
            pFormInvalid: false,
            pSuccess: false,
            pSubmitted: false,
            roles: ['doctor','helpdesk', 'manager'],
            account: {
                name: null,
                email: null,
                role: null,
                designation: null,
                is_staff:false,
                is_supruser: false,
                is_active: true
            }
        }
    },
    computed:{
        ...mapGetters([
            'getAccount'
        ]),
    
    },
    filters:{
        capitalize
    },
    created(){
        this.id = this.$route.params.id;
        let info = this.id ? this.getAccount(this.id) : null;
        this.account = info ? JSON.parse(JSON.stringify(info)): this.account;
    },
    methods:{
        handleSubmit(e){
            this.submitted = true;
            this.$validator.validateAll("edit-form").then(valid =>{
                if(valid){
                    this.$store.dispatch('updateAccount', this.account)
                    .then(response =>{
                        this.formErrors = null;
                        this.success = response.body.message;
                    },error =>{
                        this.formInvalid = true;
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
            this.$validator.validateAll("reset-form").then(valid => {
                if(valid){
                    this.pFormInvalid = false;
                    let id = this.$route.params.id;
                    id && this.$store.dispatch('resetPassword', {"id": id, "password": this.password})
                    .then(resp => {
                        this.pFormErrors = null;   
                        this.pSuccess = "Password Reset Successful";
                        console.log(resp);
                    }, 
                    error =>{
                        this.pFormInvalid = true;
                        this.pFormErrors = error.bodyText;
                    })
                    
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

.mt-32{
    margin-top: 32px;
}
</style>
