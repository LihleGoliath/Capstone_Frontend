<template>
    <div v-if="user_type === 'admin'" class="section p-3">
        <!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Topic
</button>


        <div v-if="topics">
          <h1 class="text-white">Topics</h1>
        <table  class="table border border-white" >
        <tr class="border border-white">
        <th class="table-success text-white">#</th>
        <th class="table-success text-white">Topics</th>
        <th>Delete</th>
        <th>Update</th>
        </tr>
        <tr v-for="topic in topics" :key="topic.topic_id">
        <td class="text-white">{{topic.topic_id}}</td>
        <td class="text-white">{{topic.Topic}}</td>
        <td class="text-white">
          <button class="btn btn-danger" @click="DelTopic(topic.topic_id)">Del</button>
        </td> 
        <td class="text-white">
          <button class="btn btn-primary" :data-bs-target="`#modal${topic.topic_id}`" data-bs-toggle="modal">Update</button>
        </td> 
        <div class="modal fade" :id="`modal${topic.topic_id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form @submit.prevent="UpdateTopic(topic.topic_id)">
       <input type="text" name="TopicUpdate" id="TopicUpdate" class="form-control" :placeholder="topic.Topic" v-model="TopicUpdate">
         <button type="submit" class="btn btn-primary">Update</button>
       </form>
      </div>
    </div>
  </div>
</div>

        </tr>
        </table>
        </div>
        <div v-else>
        Loading...
        </div>

        <span class="divide d-block bg-success my-5"></span>
        <button @click="Look">Token</button>
        <H1 class="text-white">Users</H1>

        <div v-if="Debaters">
       <table  class="table border border-white">
       <tr class="border border-white">
        <th class="text-white">#</th>
        <th class="text-white">UserName</th>
       </tr>
       <tr v-for="user in Debaters" :key="user.user_id">
        <td class="text-white">{{user.user_id}}</td>
        <td class="text-white">{{user.Username}}</td>
        <td class="text-white">
          <button class="btn btn-danger" @click="DelUser(user.user_id)">Del</button>
        </td> 
       </tr>
       </table>
      </div>
      <div v-else>
        Loading...
        </div>
 <span class="divide d-block bg-success my-5"></span>
      <h1 class="text-white">Comments</h1>
       <div v-if="Debaters">
       <table  class="table border border-white">
       <tr class="border border-white">
        <th class="text-white">#</th>
        <th class="text-white">comment</th>
       </tr>
       <tr v-for="comment in comments" :key="comment.comment_id">
        <td class="text-white">{{comment.comment_id}}</td>
        <td class="text-white">{{comment.comment}}</td>
        <td class="text-white">
          <button class="btn btn-danger" @click="DelComment(comment.comment_id)">Del</button>
        </td> 
       </tr>
       </table>
         </div>
         <div v-else>
         <P>Loading...</P> 
        </div>
  
        </div> 
        <div v-else-if="!user_type === 'admin'">
        Note:"U Ain't The Admin braaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!?!?!!!!!"
        </div>
        <div  v-else>
         <P>Loading...</P> 
        </div>
   
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form @submit.prevent="AddTopic">
       <label for="#topic" class="label text-decoration-underline">Topic Of The Day</label>
       <div>
        <textarea name="Topic" id="topic" cols="30" rows="5" v-model="Topic"></textarea>
        {{Topic}}
       </div>
         <button class="btn btn-success">Add</button>
       </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("ShowTopics"),
        this.$store.dispatch("ShowUsers"),
        this.$store.dispatch("ShowComment"),
        this.User_Type_Looker()
    },
    computed:{
      
        topics() {
            return this.$store.state.topics
        },
           Debaters() {
              return this.$store.state.users
        },
           comments() {
              return this.$store.state.comment
        },
           token() {
              return this.$store.state.token
        },
        user(){
        return this.$store.state.user
        }

    },
    data(){
        return{
            Topic:"",
            user_type:null,
            TopicUpdate:""
        }
    },
    methods:{
        AddTopic(){
            this.$store.dispatch("AddTopic",{
                Topic:this.Topic,
                token:this.token
            })
        },
        UpdateTopic(id){
            this.$store.dispatch("UpdateTopic",{
                Topic:this.TopicUpdate,
                token:this.token,
                id:id

            })
        },
        Look(){
             console.log(this.token);
        },
        DelTopic(id){
          console.log(id,this.token);
          this.$store.dispatch("delTopic",{
            id:id,token:this.token
          })
        },
        DelUser(id){
          console.log(id,this.token);
          this.$store.dispatch("delUser",{
            id:id,token:this.token
          })
        },
        DelComment(id){
          console.log(id);
          this.$store.dispatch("delComment",{
            id:id,token:this.token
          })
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

  .section{
  background-color:black ;

  }
    
  .divide{
    width:100vw;
    height: 5px;
  }  
</style>