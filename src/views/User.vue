<template >
    <div v-if="user" class="div">
        <button class="btn btn-success d-flex justify-content-"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
    <section>
       <div class="Userinfo d-flex mb-5">
        <div class="user_image bg-primary ">
            <img :src="user.user_image" alt="" />
        </div>
          <h1 class="ms-5 text-white">{{user.Username}}</h1>
       </div>


       <div>
   <p class="fw-light text-white fs-3">Views</p>
           <span class="separate bg-success">
     
           </span>
           <div class="p-5">
               <div v-for="view in views" :key="view.topic_id" class="view border rounded">
                <h1 class="text-white">{{view.Topic}}</h1>
               </div>
           </div>
       </div>
    </section>
      
    </div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="Update(user.user_id)">
     <input type="text" name="Username" id="Username" v-model="user.Username" :placeholder="Username">
     <input type="text" name="user_image" id="user_image" v-model="user_image" placeholder="Url Image">
<button type="submit">Update</button>
        </form>
      </div>
    </div>
  </div>
</div>


</template>
<script>
export default {
    computed:{
        user(){
            return this.$store.state.user
        },
        views(){
          return  this.$store.state.views,
          console.log(this.$store.state.views);
        }
    },
    data(){
        return{
            Username:"",
            user_image:""
        }
    },
    methods:{
        Update(id){
          const  payload={
                Username:this.Username,
                user_image:this.user_image
            }
            this.$store.dispatch("UpdateUser",id,payload)
        }
    }
}
</script>
<style >
.Userinfo{
    padding: 10px;
}
    .user_image{
    width:100px;
    height: 100px;
    }
    .separate{
        display: block;
        width: 100vw;
        height: 3px;
    }
    .view{
        width:400px;
        height: 450px;
    }
    .div{
  background-color: black;
    height: 100vh;
    }
</style>