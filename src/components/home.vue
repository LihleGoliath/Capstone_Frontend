<template >
  <section id="Landing" class="home  d-flex justify-content-center align-items-center" >
    <img :src="imageUrl" alt="image" class="img-fluid rounded">
</section>

<div class="hr d-block bg-success vw-100  ">
  <strong>
   <h1 class="text-white pt-3"> "Freedom is hammered out on the anvil of discussion, dissent, and debate"</h1>
  </strong>
  <p class="text-white text-end mb-0" >by Hubert H. Humphrey</p>
</div>
<section id="Login/Register" class="login register d-flex justify-content-center align-items-center ">
    <div class="forms rounded border border-success p-2">
      <div class="tabs">
        <button class="btn text-white " @click="toggle" >Login</button>
        <button class="btn text-white" @click="toggle">Register</button>
      </div>
      <div v-if="active" class="my-auto pb-3 h-100">
      <transition name="fade">      
        <Register/>
      </transition>
      </div>
      <div v-else class="my-auto pb-3 h-100">
        <Login/>
      </div>
    </div>
  </section>
</template>
<script>
    import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';


export default {
    components: {
    Login,
    Register
},
data(){
  return{
    active:false,
    imageUrl:"https://i.postimg.cc/mkQD098n/Logo-1-removebg-preview.png"
  }
},
methods:{
  toggle(){
    this.active = !this.active


  }
}
}
</script>



<style >
    *{
      padding:0;
      margin:0;
      box-sizing: border-box;
    }
    
    :root{
    --main-color:royalblue;
    --primary-color:white;
    --secondary-color:black;
    }
    .login.register{
    height: 80vh;
    /* background-color: black; */
    /* background-image: linear-gradient(to left top, #338648, #307e40, #2d7639, #2a6f31, #27672a, #296529, #2b6329, #2d6128, #34642d, #3b6733, #426a38, #486d3e); */
    background-image: linear-gradient(to top, #2a482f, #2e6c36, #339139, #3cb835, #14e633);
    
  }
    .forms{
      width: 60vw;
      height: fit-content;
      max-height:100% ;
      background-color: black;
      padding: 10;
    }
    @media only screen and (max-width: 400px ){
      .forms{
        width: auto;
      }
    }
    .home{
      height:100vh;
      width: 100vw;
      /* background-color: black; */
      /* background-image: linear-gradient(to left top, #338648, #307e40, #2d7639, #2a6f31, #27672a, #296529, #2b6329, #2d6128, #34642d, #3b6733, #426a38, #486d3e); */
    }
    .about{
      width: 50vw;
       height: 100%;
       border-top-left-radius:10px ; 
    }
    .header{
      width: 50vw;
      height: 100%;
    }
    .cover{
      background-color: black;
      padding: 8px;
    }
    .divider{
    background-color:black ;
    box-shadow: 1px 3px 5px 7px rgba(61, 61, 61, 0.75);
    }
    #line{
      display: block;
    width:2px;
    height: 100;
    
    box-shadow: -10px 1px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -10px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -10px 1px 5px 0px rgba(0,0,0,0.75);
    }
    .c{
       height:80vh;
       width: 130vh;
       background-color: var(--primary-color);
       background-image: linear-gradient(to left, #acacac, #bababb, #c9c9cb, #d7d8da, #e6e7ea, #e5e6e9, #e5e6e9, #e4e5e8, #d4d4d7, #c4c4c5, #b4b4b5, #a4a4a4);
       border-radius: 25px;
    }
    .logo{
      width: fit-content;
    }
    .fade-enter-active{
      transition: all 3s ease;
    } 
    .fade-leave-active{
      transition: all 3s ease;
    }  
    .hr{
      height:fit-content;
    
    }
    
    
    </style>