 <template >
 <section class="Topics">
    <h1 class="text-white">Top debates on display </h1>
    <span class="underline d-block bg-success m-auto "></span>
    <div class="d-flex flex-row gap-3  my-5">
    <TopicDebates></TopicDebates>
    </div>
 <div class="filter d-flex justify-content-around  ">
    <input type="search" name="search" id="search" v-model="search" placeholder="Search Topics Here" class="p-1 border border-3 border-success rounded"> 
    <button @click="sortTopics" class="btn border border-success text-white">Sort latest to oldest Topics</button>
 </div>
     <!-- <div v-if="topics">
        <ShowTopics v-for="topic in topics" :key="topic.topic_id" :topic="topic" class="topics" >
        </ShowTopics>
        </div> -->
        <div v-if="topics">
        <ShowTopics v-for="topic in filteredTopics" :key="topic.topic_id" :topic="topic" class="topics" >
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
        return {
            search:""
        };
    },
    mounted() {
        this.$store.dispatch("ShowTopics");
    },
    computed: {
        topics() {
            return this.$store.state.topics;
        },
        filteredTopics() {
            return this.$store.state.topics?.filter((topic) => {
                let isMatch = true;
                if (!topic.Topic?.toLowerCase().includes(this.search.toLowerCase()))
                isMatch = false;
                // if (this.category !== "all" && product.category !== this.category) isMatch = false;
                return isMatch;
            });
        },
    },
    methods: {
        Addview(item) {
            this.$store.commit("addView", item);
        },
sortTopics() {
            this.$store.commit("sortTopicsByIndex");
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