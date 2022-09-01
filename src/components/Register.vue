<template >
    <div class="card p-3 bg-success">
       <form @submit.prevent="Register" class="d-flex flex-column gap-1 m-auto">
        <input type="text" name="Username" id="Username"  v-model="Username" placeholder="Username" required>
            {{Username}}
           <input type="email" name="email" id="email"  v-model="email" placeholder="email" required>
           {{email}}
           <input type="password" name="password" id="password"  v-model="password" placeholder="password" required>
             {{password}}       

       <select name="Yoh" id="Yoh"  v-model="Yoh">
       <option value="">Choose Role</option>
       <option value="user">debater</option>
       </select>
         <button type="submit" class="btn text-dark m-auto">Register</button>
       </form> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            Username:"",
            email:"",
            password:"",
            Yoh:""
        }
    },
    methods:{
        Register(){
            this.$store.dispatch("Register",{
                Username:this.Username,
                email:this.email,
                password:this.password,
                user_type:this.Yoh
            })
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
 .btn:hover{ 
    color: white;
    background-color: black;
 } 
 @media only screen and  (max-width: 450px){
input{
 width: 100%;
}
} 

</style>