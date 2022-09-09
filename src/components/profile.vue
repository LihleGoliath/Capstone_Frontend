<template >
    <div class="div1">
        <div class="d-flex justify-content-between ">
        <button class="btn btn-success mx-2 my-2"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
        <button  class="btn btn-danger  mx-2 my-2"  data-bs-toggle="modal" data-bs-target="#exampleModal1">Delete Account</button>
      </div>
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


    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-success">
      <div class="modal-header bg-white">
        <h5 class="modal-title text-success" id="exampleModalLabel">Update User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="Update(user.user_id)">
     <input type="text" name="Username" id="Username" class="form-control p-1 mb-2" v-model="Username" placeholder="Username">
     <input type="text" name="user_image" id="user_image" class="form-control p-1" v-model="user_image" placeholder="Url Image">
<button type="submit" class="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-success">
      <div class="modal-header bg-white">
        <h5 class="modal-title text-success" id="exampleModalLabel">Warning</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <P class="text-white fs-3">Are You Sure, U want to Delete Your Account </P>
        <button  type="button" class="btn btn-success me-3" data-bs-dismiss="modal">No</button>
        <button @click="DeleteACC(user.user_id)" class="btn btn-danger">Yes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    props:["user"],
    computed:{
        views() {
            return this.$store.state.views,
                console.log(this.$store.state.views);
        },
        token() {
            return this.$store.state.token
        }
    },
    data() {
        return {
            Username: "",
            user_image: ""
        };
    },
    methods: {
        Update(id) {
            const payload = {
                Username: this.Username,
                user_image: this.user_image
            };
            this.$store.dispatch("UpdateUser", {
                id: id,
                Updated: payload,
                token: this.token
            });
        },
        DeleteACC(id) {
            console.log(id, this.token);
            this.$store.dispatch("delUser", {
                id: id,
                token: this.token
            });
            this.$store.commit("LogOut")
        }
    },
}
</script>
<style scoped>
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
        img{
      width: 100%;
      height: 100%;
    }
    .div1{
  background-color: black;
    height: 100vh;
    }
</style>