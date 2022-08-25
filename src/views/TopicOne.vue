<template>
    <div v-if="topic">
        <div v-for="item in topic" :key="item.topic_id" class="topic" >
          <h1>{{item.Topic}}</h1>
          <div class="box">
              <div class="for">
                  <label for="for" >For topic</label>
                  <input type="checkbox" name="for" id="for" v-model="right">
                  {{right}}
                  </div>
         <div class="for">
                  <label for="for" >Against topic</label>
                  <input type="checkbox" name="for" id="for" v-model="left">
                  {{left}}
                  </div>
            </div>
          </div>
        <div class="comments">
            Comments
            <div v-if="comments">
            <div v-for="comment in comments" :key="comment.comment_id">
            <p>{{comment.comment}}</p>
            </div>
            </div>
            <div v-else>
                Be the First to Comments to this topic
            </div>
        </div>
        
    </div>
</template>
<script>
export default {

    data(){
       return{
        right:false,
        left:false,
       }
    },
    props:["id"],
    mounted(){
        this.$store.dispatch("GetTopic",this.$route.params.id),
        this.$store.dispatch("ShowComment",this.$route.params.id)
    },
    computed:{
        topic(){
            return this.$store.state.topic;
        }, 
         comments(){
            return this.$store.state.comments;
        }
    },
    methods:{
        changeJ(){
             JSON.parse(this.topic.topic_answers)
        }
    }
    
}
</script>
<style >
    label{
        margin-right: 10px;
    }

    .for{
        border:1px solid black;
        padding: 10px;
        width: fit-content;
    } 
    .box{
        margin: auto; 
        display: flex;
        justify-content: space-between;
        width: 40vw;
    }
    .comments{
    content:"comments"
    }
</style>