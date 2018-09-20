<template>
    <FormHelper>
        <span slot="add-label">Account</span>
        <b-row slot="fields-row">
            <b-col cols="4">
                <b-form-select v-model="selected">
                    <template slot="first">
                        <option :value=null disabled>Select Patient</option>
                    </template>
                    <option v-for="patient in patients" :key="patient.id" :value="patient.id">
                        {{patient.name}}
                    </option>
                </b-form-select>
            </b-col>
            <b-col cols="4">
                <b-form-input type="text" placeholder="Name" />
            </b-col>
            <b-col cols="4">
                <b-form-select v-model="selected">
                    <template slot="first">
                        <option :value=null disabled>Assign Doctor</option>
                    </template>
                    <option v-for="patient in patients" :key="patient.id" :value="patient.id">
                        {{patient.name}}
                    </option>
                </b-form-select>
            </b-col>
            <b-col cols="12" class="mt-2">
                <b-form-textarea placeholder="Description" :rows="3" />
            </b-col>
        </b-row>
    </FormHelper>
</template>

<script>

import FormHelper from '../Layouts/FormHelper';
export default {
    data(){
        return{
            selected: null,
            patients: [
                    {id:1, name: "Gory Stella"},
                    {id:3, name: "Samuel Peters"},
                    {id:4, name: "Mary Skinner"},
            ],
        }
    },
    components: {
        FormHelper
    }
}
</script>

<style>

</style>
