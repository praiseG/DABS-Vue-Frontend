<template>
    <header>
        <h1>{{ appName }}</h1>
        <ul v-if="loggedIn"><li>User</li></ul>
    </header>
</template>

<script>

export default {
    data(){
        return {
            appName: "DABS",
            loggedIn: true
        }
    }
}
</script>


<style scoped>
header{
    background: #00C583;
    /* padding: 8px; */
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
}
h1{
    color: #222;
    /* text-align: left; */
    float: left;
    margin-left: 20px;
}
ul{
    float: right;
    margin: 30px auto; 
}
</style>