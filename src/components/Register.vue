<template >
    <div class="card p-3 bg-success ">
       <form @submit.prevent="Register" class="d-flex flex-column gap-1 m-auto w-100">
        <input type="text" name="Username" id="Username"  v-model="Username" placeholder="Username" required>
  
           <input type="email" name="email" id="email"  v-model="email" placeholder="email" required>
        
           <input type="password" name="password" id="password"  v-model="password" placeholder="password" required>
               

       <select name="Yoh" id="Yoh"  v-model="Yoh">
       <option value="">Choose Role</option>
       <option value="user">debater</option>
       </select>
         <button type="submit" class="btn text-dark m-auto">Register</button>
       </form> 
       <div v-if="nothing">
       <div v-if="auth">
        <h1 class="container bg-danger text-drak">
       {{auth}}
     </h1>
       </div>
       <div v-else-if="!auth">
        <div v-if="registered" class="feedback">
         <p class="text-success">U have successfully registered</p>
         <H1 class="text-success">Please Login</H1>
        </div>  
    </div>
    <div v-else>
        Loading...
       </div>
    </div>
        </div>
</template>
<script>
export default {
    computed:{
     auth(){
        return this.$store.state.auth
     }
    },
    data(){
        return{
            Username:"",
            email:"",
            password:"",
            Yoh:"",
            registered:false,
            nothing:false
        }
    },
    methods:{
        Register(){
           
            this.$store.dispatch("Register",{
                Username:this.Username,
                email:this.email,
                password:this.password,
                user_type:this.Yoh
            }),
            this.nothing = true,
           this.registered = true
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


 select{
    width:40vw;
    max-width: 100%;
    padding:10px ;
 }
 @media only screen and (max-width: 400px){
    select{
        width: auto;
    }
 }
 .btn:hover{ 
    color: white;
    background-color: black;
 } 
 @media only screen and  (max-width: 450px){
input{
 width: 100%;
}
} 
.feedback{
    background-color: black;
}

</style>