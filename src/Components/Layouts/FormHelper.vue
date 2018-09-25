<template>
    <div>
        <b-btn v-b-toggle.collapse1 variant="primary" class="btn-dabs float-right">
            <i class="fas fa-plus" /> New <slot name="add-label"></slot>
        </b-btn><br /><br />
        <b-collapse id="collapse1" class="mt-2">
            <b-card>
                <slot name="fields-row"></slot>  
            </b-card>
        </b-collapse>
    </div>
</template>

<script>
export default {
    
}
</script>
