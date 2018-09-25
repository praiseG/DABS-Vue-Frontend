<template>
     <div>
        <b-btn v-b-toggle.collapse1 variant="primary" class="btn-dabs float-right"><i class="fas fa-plus" /> New Patient</b-btn><br /><br />
        <b-collapse id="collapse1" class="mt-2">
            <b-card>
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
    }
}
</script>

<style>

</style>
