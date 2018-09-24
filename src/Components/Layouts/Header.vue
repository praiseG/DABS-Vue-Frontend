<template>
    <b-navbar toggleable="md" type="dark" variant="info"> 
        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
        <b-navbar-brand href="/"><img  class="nav-logo" src="../../assets/logo.png" /><strong>  {{ appName }}</strong></b-navbar-brand>
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
import { eBus } from '../../main';

export default {
    data(){
        return {
            appName: "DABS",
            username: null
        }
    },
    created(){
        eBus.$on('loggedInUser', data => {
            this.username = data;
        })
        // this.username = localStorage.getItem('username')
    }
}
</script>


<style scoped>
.nav-logo {
    width: 30px;
    height: 30px;
}
</style>