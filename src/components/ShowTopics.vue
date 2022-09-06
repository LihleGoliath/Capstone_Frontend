<template >

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
</template>
<script>
export default {
    props:["topic"]
    
}
</script>
<style>
     .topic{
    color:black;
 }

 .topic:hover{
    color:white;
    text-decoration: underline;
    text-decoration-color:white ;
 }
    
</style>