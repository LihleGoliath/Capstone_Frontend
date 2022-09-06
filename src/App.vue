<template >
  <div>
    <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
  
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default{
  mounted(){
    setTimeout(this.Reset,1000)
  },
  data(){
    return{

    }
  },
  components:{
    Navbar,
    Footer
},
methods: {
  Reset(){
    this.$store.commit("AuthReset")
  }
},
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
