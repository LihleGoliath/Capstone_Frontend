<template >
    <div>
        <nav class="navbar navbar-expand-lg bg-dark w-100vw">
  <div class="container">
    <router-link to="/" class="navbar-brand text-white logo" href="#">CDS</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex flex-start text-end ">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Topics">Topics</router-link>
        </li> 
        <li class="nav-item">
          <router-link class="nav-link" to="/Contact">Contact</router-link>
        </li>
        <div v-if="user" class=" d-flex flex-lg-row flex-column  gap-lg-4">    
         <li class="nav-item">
          <router-link class="nav-link" to="/User">User</router-link>
        </li>
        <div v-if="user_type === 'admin'" class="mx-end ">
          <li class="nav-item">
           <router-link class="nav-link" to="/Admin">Tables</router-link>
         </li>
        </div>
        <li class="nav-item">
         <button class="btn btn-success" @click="logout">Log Out</button>
        </li>
            </div>
      </ul>
    </div>

  </div>
</nav>
<span class="line bg-success"></span>

    </div>
</template>
<script>
export default {
  mounted(){
   this.User_Type_Looker()
  },
computed:{
  user(){
    return this.$store.state.user
  }
},
data(){
  return{
        user_type:''
  }
},
methods:{
  logout(){
    this.$store.commit("LogOut")
  },
  User_Type_Looker(){
    if(this.user){
      this.user_type = this.user.user_type

    }
  }
}
}
</script>

<style scoped>
    .navbar-nav{
      text-align: end;
      display: flex;
      justify-content: space-evenly;
    }
  
    .line{
      display: block;
      width: 100vw;
      height: 5px;
    }
    .nav-link{
      color: white;
    }
    .logo:hover{
    color: white;
    }
 a.router-link-active {
  color: rgb(19, 181, 19);
  text-decoration: underline;
  text-decoration-color: #42b983;
}
a:hover{
  background-color: #42b983;
}
</style>