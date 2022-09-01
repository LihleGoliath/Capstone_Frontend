 <template >
 <section class="Topics">
    <h1 class="text-white">Top debates on display </h1>
    <span class="underline d-block bg-success m-auto "></span>
    <div class="d-flex flex-row gap-3  my-5">
<div v-for="topic in topics" :key="topic.topic_id" class="card m-auto bg-success">
    <div class="front text-white">#{{topic.topic_id}}</div>
<div class="back text-white">{{topic.Topic}}</div>
</div>
 </div>




    <div v-if="topics">
        <div v-for="topic in topics" :key="topic.topic_id" class="topics">
        <div class="container border border-white rounded my-2 bg-success p-1 my-3" >
            <div class="d-flex justify-content-between"> 
                <h2 class="text-start">#{{topic.topic_id}}</h2> <button class="btn btn-success " @click="Addview(topic)"> Add view</button>
            </div>
            <router-link class="topic" :to="{name:'TopicOne',params:{ id:topic.topic_id}}">
            <div class="topic">
                <h1 class="head ">{{topic.Topic}}</h1>
            </div>
        </router-link>
        </div>
        </div>
    </div>
     </section>
 </template>
 <script>
 export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$store.dispatch("ShowTopics");
    },
    computed:{
        topics(){
            return this.$store.state.topics
        }
    },
    methods:{
        Addview(item){
           this.$store.commit("addView",item) 
        }
    }
 }
 </script>
 <style scoped>
    .Topics{
        background-color: black;
        padding: 5vw;
    }
 .topic{
    color:black;
 }
  .topic:hover{
   color:royalblue;
  }  
  .card{
    height:30vh;
    width:40vw;
 display: flex;
 justify-content: space-around;
  }
  .underline{
    width:15vw;
    height: 3px;

  }
  .btn:hover{
   border: 1px solid white;
  }
  .head{
  cursor: pointer;
  text-decoration: none;
  }
  a.topic{
    text-decoration: none;
  }
 </style>