<template >
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
</template>
<script>
export default {
    data(){
     return{
        right: "",
            left: "",
            comment: "",
            Voted: false,
            good: false,
            bad: false
     }
    },
    props:["item"],
    computed:{
        Debater() {
            return this.$store.state.user;
        }
    },
    methods:{
        async AddVote_For(For) {
            !this.good;
            if (this.right === "on" && (!this.Voted || this.bad)) {
                this.bad = false;
                this.Voted = true;
                const Not = ++For;
                this.AddVote(this.Voted, Not, this.$route.params.id);
                console.log(Not);
                // window.location.reload();
            }
            else {
                this.Voted = false;
            }
        },
        AddVote_Against(Against) {
            !this.bad;
            if (this.left === "on" && (!this.Voted || this.good)) {
                this.good = false;
                this.Voted = true;
                const Mon = ++Against;
                this.AddVote1(this.Voted, Mon, this.$route.params.id);
                console.log(Mon);
            }
            else {
                this.Voted = false;
            }
        },
        AddVote: async (context, payload, id) => {
            console.log(id);
            const res = await fetch(`https://capstone-debate.herokuapp.com/topics/${id}/for_topic`, {
                method: "PUT",
                body: JSON.stringify({
                    for_topic: payload
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then(res => res.json())
                .then(vote_added => {
                console.log(vote_added);
                //  window.location.reload();
            });
        },
        AddVote1: async (context, payload, id) => {
            const res = await fetch(`https://capstone-debate.herokuapp.com/topics/${id}/Against_topic`, {
                method: "PUT",
                body: JSON.stringify({
                    Against_topic: payload
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then(res => res.json())
                .then(vote1_added => {
                console.log(vote1_added);
                // window.location.reload();
            });
        }
    }
    
}
</script>
<style >
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
        
    @media only screen and (max-width: 900px ){
        .box{
            width: 70vw;
        }
    }

    @media only screen and (max-width: 400px ){
        .box{
            width: auto;
        }
    }
</style>