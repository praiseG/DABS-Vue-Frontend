<template>
    <b-navbar toggleable="md" type="dark" variant="info"> 
        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
        <b-navbar-brand href="/"><img  class="nav-logo" src="../../assets/logo.png" /><strong>  {{ appName }}</strong></b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
                <template slot="button-content">
                    <i class="fas fa-user-circle" /><em> pnanvuma@gmail.com</em>
                </template>
                <b-dropdown-item href="#">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
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
/* nav{
    background: #00C583;
    padding: 1.5rem 1.5rem 1.5rem;
} */
.nav-logo {
    width: 30px;
    height: 30px;
}
</style>