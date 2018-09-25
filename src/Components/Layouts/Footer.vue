<template>
    <footer class="footer"> 
        <div class="container-fluid">
            <div class="content">
                <p>Dabs &copy;{{year}} - by Praise Mariah <i class="fab fa-github"></i><a href="https://github.com/praiseG">(https://github.com/praiseG)</a></p> 
            </div>
        </div>    
    </footer>
</template>

<script>
export default {
    data(){
        return {
            year: (new Date).getFullYear()
        }
    }
}
</script>

<style scoped>
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #222;
        color: gainsboro;
        text-align: center;
    } 
    footer p {
        padding-top: 10px;
    }
</style>

