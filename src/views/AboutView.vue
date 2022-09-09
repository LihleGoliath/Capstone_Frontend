<template>
  <div class="about p-2">
      <h1 class="note text-white text-start  ms-3 "> About App</h1>
    <div class="container bg-success py-1 rounded mt-5">
      <About :about="about"/>
    </div>
  </div>
</template>

<script>
import About from "@/components/about.vue";
export default{
 components:{
  About
 } 
}


</script>


<style scoped>
.about{
  width:100vw ;
  height: 100vh;
  /* background-color: black; */
}
@media only screen and (max-width:420px){
  .about{
    height: fit-content;
  }
}


.note{
  text-decoration: underline;
  text-decoration-color: rgb(86, 169, 86);
}

</style>
