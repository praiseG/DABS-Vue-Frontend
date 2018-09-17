<template>
    <footer> <p>Dabs &copy;{{year}} - System Built by Praise Mariah <a href="https://github.com/praiseG">(https://github.com/praiseG)</a></p> </footer>
</template>

<script>
export default {
    data(){
        return {
            year: (new Date).getYear()
        }
    }
}
</script>

<style scoped>
    footer{
        background: #222;
        padding: 2px;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /* height: 100px; */
        color: gainsboro;
    }
</style>

