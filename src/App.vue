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
  background-image: linear-gradient(to left top, #338648, #307e40, #2d7639, #2a6f31, #27672a, #296529, #2b6329, #2d6128, #34642d, #3b6733, #426a38, #486d3e);

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
.bg-success{
  background-color: #51B953;
}
</style>
