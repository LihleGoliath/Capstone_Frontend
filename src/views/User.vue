<template >
    <div v-if="user">
    <section>
       <div class="Userinfo d-flex">
        <div class="user_image bg-primary ">
            <img :src="user.user_image" alt="" />
        </div>
          <h1 class="ms-5">{{user.Username}}</h1>
       </div>


       <div>
   <p class="fw-light">Views</p>
           <span class="separate">
     
           </span>
           <div class="p-5">
               <div v-for="view in views" :key="view.topic_id" class="view border rounded">
                <h1>{{view.Topic}}</h1>
               </div>
           </div>
       </div>
    </section>
      
    </div>
    <button @click="UserChecker">Look</button>
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
    methods:{
        UserChecker(){
            console.log(this.user);
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
        background-color: black;
        width: 100vw;
        height: 3px;
    }
    .view{
        width:400px;
        height: 450px;
    }
</style>