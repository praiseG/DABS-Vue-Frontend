<template>
    
</template>

<script>
export default {
    created(){
        this.$store.dispatch('logoutUser');
        this.$router.push('/login');
    }
}
</script>

