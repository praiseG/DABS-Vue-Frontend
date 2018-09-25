<template>
    <b-nav vertical>
        <b-nav-item :to="link" v-for="link in links" v-bind:key=link>
            {{link}}
        </b-nav-item>
        <!-- <b-nav-item></b-nav-item> -->
    </b-nav>
</template>

<script>
export default {
    data(){
        return {
            links: ['Appointments', 'Patients' , 'Doctors', 'Staff']
        }
    }
}
</script>

<style scoped>
.nav{
    background: #222;
}

li{
    border-bottom: #009EBA 0.1px solid;
    margin: 0px;
}

li:hover{
    background: #EFECE9;
}

a:hover{
    text-decoration: none;
    color: #009EBA;
}
</style>
