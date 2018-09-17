<template>
    <div>
        <ul>
            <li v-for="account in accounts" v-if="account.role=='doctor'">{{account.name}} is a {{account.designation}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                accounts: [
                    {name: 'Praise Mariah', role: 'Admin', designation: 'System Admin'},
                    {name: 'Eve Nankanja', role: 'doctor', designation: 'Neuro Sergeon'},
                    {name: 'Gabriel Kyagulanyi', role: 'doctor', designation: 'Chief of Surgery'},
                    {name: 'Carol Nanvuma', role: 'doctor', designation: 'Cardiologist'},
                    {name: 'Cynthia Nantaba', role: 'doctor', designation: 'Paediatrician'}
                ]
            }
        }
    }
</script>

<style scoped>
li{
    color: red,
}
</style>