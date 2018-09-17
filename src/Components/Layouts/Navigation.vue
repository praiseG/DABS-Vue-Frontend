<template>
    <aside>
        <ul>
            <li  v-for="link in links" v-bind:key=link><a :href="link">{{link}}</a></li>      
        </ul>
    </aside>
</template>

<script>
export default {
    data(){
        return {
            links: ['Appointments', 'Patients' , 'Accounts']
        }
    }
}
</script>

<style scoped>
aside{
    background: #222;
}
</style>
