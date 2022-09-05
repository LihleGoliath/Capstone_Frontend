<template >
    <div class="card  p-3 bg-success">
        <form @submit.prevent="Login" class="d-flex flex-column m-auto gap-1 form">
  <input type="email" aria-label="Email"  v-model="email" placeholder="Email" required>
  <input type="password" aria-label="Password"  v-model="password"  placeholder="Password" required>
  <button type="submit" class="btn btn-success m-auto">Login</button>
  <div v-if="!nothing">
     <div v-if="token">
        <P>Successfully Login Debater</P>
    <button @click="Verify" class="btn btn-success">Browse Topics</button>
  </div>

 
  
      
        <div v-else-if="auth">
           <h1 class="container bg-danger text-drak">
             {{auth}}
           </h1>
        </div>
        <div v-else-if="!auth">
      Loading...
        </div>
    </div>
        </form>
        
    </div>
</template>
<script>
export default {
   computed:{
      token(){
        return  this.$store.state.token
      },
      auth(){
        return  this.$store.state.auth
      }
    },
    data(){
        return{
            email:"",
            password:"",
            nothing:true
        }
    },
    methods:{
        Login(){
            this.nothing = false
            this.$store.dispatch("Login",{
                email:this.email,
                password:this.password
            })
        },
        Verify(){
            this.$store.dispatch("Verify",this.token)
        }
    }
}
</script>
<style  scoped>

.card{
    margin: auto;
    width:80%;
 border-radius:0;
}
 input{
    width:40vw;
    max-width: 100%;
    height: 5vh;
    padding: 10px;
 }
@media only screen and  (max-width: 450px){
input{
 width: 100%;
}
}  
 .btn:hover{
    
    color: white;
    background-color: black;
 } 
</style>