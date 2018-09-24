<template>
    <div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            appt: {}
        }
    },
    created(){
        this.$http
        .get('appointments/' + this.id, {headers:{'Authorization':'token'}})
        .then(resp => {
            this.appt = resp.body;
        },
        errors =>{ 
            alert(errors.status + ": " + errors.bodyText);
        });
    }
}
</script>
