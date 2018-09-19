<template>
    <footer class="footer"> 
        <div class="container">
            <div class="content">
                <p>Dabs &copy;{{year}} - by Praise Mariah <a href="https://github.com/praiseG">(https://github.com/praiseG)</a></p> 
            </div>
        </div>    
    </footer>
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
        padding: 1rem 1.5rem 1rem;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        color: gainsboro;
        text-align: center;
    }
</style>

