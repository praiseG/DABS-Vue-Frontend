<template>
    <div>
        <b-btn v-b-toggle.collapse1 variant="primary" class="btn-dabs float-right"><fa-icon icon="plus" /> New Appointment</b-btn><br /><br />
        <b-collapse id="collapse1" class="mt-2">
            <b-card>
                {{selected}}
                <b-form>
                    <b-row>
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
                        <b-col cols="3" class="mt-3">
                            <b-button class="btn-dabs" type="submit">Submit</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';


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
        datePicker
    }
}
</script>

<style>

</style>
