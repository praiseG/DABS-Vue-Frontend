<template>
    
</template>

<script>
export default {
    created(){
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        this.$router.push('/login');
    }
}
</script>

