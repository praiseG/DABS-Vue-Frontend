<template>
    <div>
        <b-btn v-b-toggle.collapse1 variant="primary" class="btn-dabs float-right">
            <i class="fas fa-plus" /> New <slot name="add-label"></slot>
        </b-btn><br /><br />
        <b-collapse id="collapse1" class="mt-2">
            <b-card>
                <b-form>
                    <slot name="fields-row"></slot>
                    <b-row>
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
    
}
</script>
