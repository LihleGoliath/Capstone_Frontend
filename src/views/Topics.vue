 <template >
 <section class="Topics">
    <h1 class="text-white">Top debates on display </h1>
    <span class="underline d-block bg-success m-auto "></span>
    <div class="d-flex flex-row gap-3  my-5">
    <TopicDebates></TopicDebates>
    </div>

     <div v-if="topics">
        <ShowTopics v-for="topic in topics" :key="topic.topic_id" :topic="topic" class="topics" >
        </ShowTopics>
        </div>
 
    <div v-else>
        Loading...
        </div>
     </section>
 </template>
 <script>
import TopicDebates from '@/components/TopicDebates.vue';
import ShowTopics from '@/components/ShowTopics.vue';
 export default {
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch("ShowTopics");
    },
    computed: {
        topics() {
            return this.$store.state.topics;
        }
    },
    methods: {
        Addview(item) {
            this.$store.commit("addView", item);
        }
    },
    components: { TopicDebates, ShowTopics }
}
 </script>
 <style scoped>
    .Topics{
        background-color: black;
        padding: 5vw;
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