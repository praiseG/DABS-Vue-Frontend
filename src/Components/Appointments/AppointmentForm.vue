<template>
    <FormHelper>
        <span slot="add-label">Appointment</span>
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
                <datePicker v-model="date" :config="doptions"></datePicker>
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
import datePicker from 'vue-bootstrap-datetimepicker';
import moment from 'moment';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
      time: 'fas fa-clock',
      date: 'far fa-calendar-alt',
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'far fa-trash-alt',
      close: 'far fa-times-circle'
    }
  });


export default {
    data(){
        return{
            selected: null,
            patients: [
                {id:1, name: "Gory Stella"},
                {id:3, name: "Samuel Peters"},
                {id:4, name: "Mary Skinner"},
            ],
            date: new Date(),
            doptions: {
                format: 'YYYY-MM-DD h:mm',
                useCurrent: false,
                minDate: new Date(),
                showClose: true,
                showClear: true,
            },
        }
    },
    components: {
        datePicker,
        FormHelper
    }
}
</script>

<style>

</style>
