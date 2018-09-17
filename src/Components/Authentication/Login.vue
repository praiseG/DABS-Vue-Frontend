<template>
    <div class="row">
        <form class="form" @submit="handleLogin">
            <p><input type="email" ref="email" placeholder="Email"/></p>
            <p><input type="password" ref="pwd" placeholder="Password"/></p>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: undefined,
            password: undefined
        }
    },
    methods: {
        handleLogin(e){ e.preventDefaults(); return true; }
    }
}
</script>

<style scoped>
button{
    display: block;
}
.row{
    margin: 200px 400px;
}
</style>
