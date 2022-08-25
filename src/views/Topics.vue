 <template >
    <div v-if="topics">
        <div v-for="topic in topics" :key="topic.topic_id" class="topics">
        <router-link :to="{name:'TopicOne',params:{ id:topic.topic_id}}">
        <h1>{{topic.Topic}}</h1>
        </router-link>
        </div>
    </div>
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
    }
 }
 </script>
 <style lang="">
    
 </style>