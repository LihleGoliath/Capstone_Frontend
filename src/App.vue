<template>
<Navbar/>
  <router-view/>
</template>

<script>
  
import Navbar from "./components/Navbar.vue";

export default{
  data(){
    return{

    }
  },
  components:{
    Navbar,
    Navbar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-Y: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
</style>
