<template lang="">
    <div class="container d-flex" >

        <div
        v-for="topic in topics" :key="topic.topic_id" >
        <div class=" card mx-2 m-auto bg-success ">
            <div class="front text-white">#{{topic.topic_id}}</div>
        <div class="back text-white">{{topic.Topic}}</div> 
        </div>
    </div>
    </div>
</template>
<script>


export default {
    mounted() {
        this.$store.dispatch("ShowTopics");
    },

    computed:{
        topics() {
            const arrary =  this.$store.state.top_topics
            return arrary;
        }
    }
}
</script>
<style scoped>
.card{
 height:30vh;
 width:40vw;
 display: flex;
 justify-content: space-around;
  }
  .container{

    overflow-x: auto;
    width: fit-content;
  }
    
</style>