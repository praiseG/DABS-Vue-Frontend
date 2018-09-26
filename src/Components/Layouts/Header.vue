<template>
    <b-navbar toggleable="md" type="dark" variant="info"> 
        <b-navbar-brand><b-link to="/"><img  class="nav-logo" src="../../assets/logo.png" /><strong>  {{ appName }}</strong></b-link></b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="username">
                <template slot="button-content">
                    <i class="fas fa-user-circle" /><em> {{ username }}</em>
                </template>
                <b-dropdown-item href="/logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>

export default {
    data(){
        return {
            appName: "DABS",
        }
    },
    computed:{
        username(){
            return this.$store.state.username;
        }
    }
}
</script>


<style scoped>
.nav-logo {
    width: 30px;
    height: 30px;
}

.navbar-brand a{
    color: white;
    text-decoration: none;
}
</style>