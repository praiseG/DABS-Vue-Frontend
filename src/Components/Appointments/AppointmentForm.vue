<template>
    <div>
        <b-btn v-b-toggle.collapse1 variant="primary" class="btn-dabs float-right"><fa-icon icon="plus" /> New Appointment</b-btn><br /><br />
        <b-collapse id="collapse1" class="mt-2">
            <b-card>
            <p class="card-text">Collapse contents Here</p>
            <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
            <b-collapse id=collapse1_inner class="mt-2">
                <b-card>Hello!</b-card>
            </b-collapse>
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
