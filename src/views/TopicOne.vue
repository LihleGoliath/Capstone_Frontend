<template>
    <section id="SingleTopic" >
        <div v-if="topic" class="border border-3 border-success" >
            <div v-for="item in topic" :key="item.topic_id" class="topic" >
                <div class="mb-3 p-1" >
                    <h1 class="text-white pb-0 ">{{item.Topic}}</h1>
                    <span class="underline1 d-block bg-success mx-auto "></span>
                </div>
              <p  v-if="Debater" class="text-success">
                  Tick To Vote(tick then click the box)
              </p>
              <div v-if="Debater" class="box border border-success  p-2">
                  <div  @click="AddVote_For(item.for_topic)" :class="{'fored': !good,'for':good}" class="border border-primary">
                      <label for="for" >For topic</label>
                      <input type="radio" name="for" id="for" v-model="right">
                      {{item.for_topic}}
                      {{right}}
                      </div>
                      <div></div>
             <div  @click="AddVote_Against(item.Against_topic)" :class="{'Againsted': !bad,'for':bad}" class="border border-danger">
                      <label for="for" >Against topic</label>  
                      <input type="radio" name="for" id="Against" v-model="left">
                       {{item.Against_topic}}
                       {{left}}
                      </div>
                </div>
       
              </div>
            <div class="comments my-5">
                <h1 class="text-white">
                  Comments
                  <span class="underline d-block bg-success mx-auto "></span> 
                </h1>
                <div v-if="comments">
                <div v-for="comment in comments" :key="comment.comment_id" class="comments border rounded p-1 my-3">
                    <div class="border border-success d-flex flex-column w-100">
                        <div class="image d-flex ">
                          <img :src="comment.user_image" :alt="comment.user_id" class="img img-fluid ">
                          <span class="text-white text-start ">{{comment.Username}}</span>
                        </div>
                        <div class="comment bg-success w-100 h-100">

                            <p class="text-white">{{comment.comment}}</p>
                        </div>
                    </div>
                </div>
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
export default {

    data(){
       return{
        right:"",
        left:"",
        comment:"",
        Voted:false,
        good:false,
        bad:false
        
       }
    },
    props:["id"],
    mounted(){
        this.$store.dispatch("GetTopic",this.$route.params.id),
        this.$store.dispatch("ShowComments",this.$route.params.id)
  
    },
    computed:{
        topic(){
            return this.$store.state.topic;
        }, 
         comments(){
            return this.$store.state.comments;
        },
        Debater(){
              return this.$store.state.user;
        }
    },
    methods:{
        Send(){
            this.$store.dispatch("AddComment",{
                comment:this.comment,
                user_id:this.Debater.user_id,
                topic_id:this.$route.params.id
            })
        },
         async AddVote_For(For){
            !this.good
            if(this.right === "on" && (!this.Voted || this.bad)){
                this.bad =  false
                this.Voted = true
                const Not =  ++For
                this.AddVote(this.Voted,Not,this.$route.params.id)
           
            console.log(Not);
            // window.location.reload();
            }else {
           this.Voted = false
          }
         },
         AddVote_Against(Against){
             !this.bad
            if(this.left === "on" && (!this.Voted || this.good)){
                this.good = false
                this.Voted = true
                const Mon = ++Against
               this.AddVote1(this.Voted,Mon,this.$route.params.id)
     
            console.log(Mon);
            }else {
           this.Voted = false
          }
        },
        AddVote:async (context,payload,id)=>{
          console.log(id);
          const res = await fetch(`https://capstone-debate.herokuapp.com/topics/${id}/for_topic`,{
            method:"PUT",
            body:JSON.stringify({
             for_topic:payload
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }) 
          .then(res => res.json())
          .then(vote_added=>{
            console.log(vote_added)
            //  window.location.reload();
          })
   
        },
        AddVote1:async (context,payload,id)=>{
          const res = await fetch(`https://capstone-debate.herokuapp.com/topics/${id}/Against_topic`,{
            method:"PUT",
            body:JSON.stringify({
             Against_topic:payload
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }) 
          .then(res => res.json())
          .then(vote1_added=>{
            console.log(vote1_added)
            // window.location.reload();
          })
        
        }
   
    

    }
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

    .for{
        border:1px solid black;
        padding: 10px;
        width: fit-content;
    } 
    .fored{
        color:blue;
        border:1px solid black;
        padding: 10px;
        width: fit-content;
    }
    .Againsted{
        color:red;
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

  .image{
    width:4vw;
    height: 4vh;

  }
  .img{
    width:100%;
    height: 100%;
    border-radius:20px;
  }
</style>