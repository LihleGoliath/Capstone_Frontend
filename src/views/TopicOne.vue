<template>
    <section id="SingleTopic" >
        <div v-if="topic" class="border border-3 border-success" >
            <Onetopic v-for="item in topic" :key="item.topic_id" :item="item" class="topic" >
            </Onetopic>
            <div class="comments my-5">
                <h1 class="text-white">
                  Comments
                  <span class="underline d-block bg-success mx-auto "></span> 
                </h1>
                <div v-if="comments">
                <Comments v-for="comment in comments" :key="comment.comment_id" :comment="comment" class="comments border rounded p-1 my-3">
                
                </Comments>
                </div>
                <div v-else>
                    Be the First to Comments to this topic
                </div>
                 <div v-if="Debater">

                     <div class="form-floating">
                       <textarea class="form-control border border-success" placeholder="Leave a comment here" id="float" v-model="comment"></textarea>
                      <label for="floatingTextarea">Comments</label>
                     </div>
                     <button @click="Send" class="btn btn-info">Send</button>
                 </div>
            </div>
            
        </div>
        <div v-else-if="!topic">
        Loading...
        </div>
    </section>
</template>
<script>
import Onetopic from '@/components/Onetopic.vue';
import Comments from '@/components/comments.vue';
export default {
    props: ["id"],
    mounted() {
        this.$store.dispatch("GetTopic", this.$route.params.id),
            this.$store.dispatch("ShowComments", this.$route.params.id);
    },
    computed: {
        topic() {
            return this.$store.state.topic;
        },
        comments() {
            return this.$store.state.comments;
        },
        Debater() {
            return this.$store.state.user;
        }
    },
    methods: {
        Send() {
            this.$store.dispatch("AddComment", {
                comment: this.comment,
                user_id: this.Debater.user_id,
                topic_id: this.$route.params.id
            });
        },

    },
    components: { Onetopic, Comments }
}
</script>
<style scoped>
    .comments{
        width: 50vw;
  
        margin: auto ;
    }
section#SingleTopic{
        background-color: black;
        height: fit-content;
}

    label{
        margin-right: 10px;
    }


    .comments{
    content:"comments"
    }
    #float{
        margin: auto;
        max-width:30vw;
        width: 100%;
    }
    .underline1{
    width:30vw;
    height: 3px;
  }
  .underline{
    width:10vw;
    height: 3px;
  }


</style>