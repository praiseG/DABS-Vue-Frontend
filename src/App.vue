<template>
  <div>
    <Header />
    <!-- <Dashboard /> -->
    <!-- <Login /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Dashboard from './Components/Layouts/Dashboard';
import Login from './Components/Authentication/Login';

export default {
  components: {
    Header,
    Footer,
    Dashboard,
    Login,
  },
  data () {
    return {
      component: null,
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: Palatino;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #009EBA;
}

.btn-dabs, .btn-dabs-light:hover{
   background: #222;
  color: #009EBA;
  border-color: #009EBA;
}

.btn-dabs:hover, .btn-dabs-light{
  text-decoration: none;
  color: #009EBA;
  background: #EFECE9;
  border-color: #009EBA;
}

.mt-10{
  margin-top: 6rem;
}

.card{
  background: #EFECE9;
}

.table{
  background: #fff;
}
</style>
