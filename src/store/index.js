import router from '@/router'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    users:null,
    user:null,
    token:null,
    topics:null,
    topic:null,
    comments:null,
    views:[]
  },
  getters: {
  },
  mutations: {
    SetUsers(state,users){
      state.users = users
     },
    SetUser(state,user){
     state.user = user
    },
    SetToken(state,token){
      state.token = token
     },
     SetTopics(state,topics){
      state.topics = topics
     },
     SetTopic(state,topic){
      state.topic = topic
     },
     SetComments(state,comments){
      state.comments = comments
     },
     addView(state,value){
      console.log(value);
      state.views.push(value); 
     },
     DelView(state,view){
      state.views.splice(view,1) 
     },
     LogOut(state){
      state.user = null,
      state.token = null
     }
  },
  actions: {   
     ShowUsers:async (context)=>{
    const res = await fetch("https://capstone-debate.herokuapp.com/users",{
      method:"GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const UsersArray = await res.json();
    console.log(UsersArray);
    context.commit("SetUsers",UsersArray);
  },
  UpdateUser:async (context,id,Update)=>{
    console.log(id,Update);
    const res = await fetch("https://capstone-debate.herokuapp.com/users/" + id,{
      method:"PATCH",
      body:JSON.stringify(Update),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const UpdatedUser = await res.json();
    console.log(UpdatedUser);
  },
    Login: async (context,payload)=>{
      const res = await fetch("https://capstone-debate.herokuapp.com/users/login",{
        method:"POST",
        body:JSON.stringify({
          email:payload.email,
          password:payload.password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(tokendata=>{
        console.log(tokendata);
        console.log(tokendata.token);
  
       context.commit("SetToken",tokendata.token)
      })

    },
    Register: async (context,payload)=>{
      const res = await fetch("https://capstone-debate.herokuapp.com/users/register",{
        method:"POST",
        body:JSON.stringify({
          Username:payload.Username,
          email:payload.email,
          password:payload.password,
          user_type:payload.user_type
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(newUserdata =>{
        const User = await newUserdata
        console.log(User);
      })
    },
    Verify:async (context,token)=>{
      const res = await fetch("https://capstone-debate.herokuapp.com/users/verify",{
        method:"GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':`${token}`
        },
      })
      .then(res => res.json())
      .then(userDetails =>{
        console.log(userDetails.user);
       context.commit("SetUser",userDetails.user)
      } )
   
      router.push({
        name:"Topics"
      })
    },
    AddTopic:async (context,Land)=>{
        console.log(Land);
      const res = await fetch("https://capstone-debate.herokuapp.com/topics",{
        method:"POST",
        body:JSON.stringify({
        Topic:Land.Topic
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }) 
      const topic_added = res.json();
      console.log(topic_added);
    },
    ShowTopics:async (context)=>{
      const res = await fetch("https://capstone-debate.herokuapp.com/topics",{
        method:"GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const topicsArray = await res.json();
      console.log(topicsArray);
      context.commit("SetTopics",topicsArray);
    },
    GetTopic:async (context,id)=>{
      const res = await fetch("https://capstone-debate.herokuapp.com/topics/" + id,{
        method:"GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const topicArray = await res.json();
      console.log(topicArray);
      context.commit("SetTopic",topicArray);
    },
      DeleteTopic:async (id)=>{
          const res = await fetch("https://capstone-debate.herokuapp.com/topics/" + id,{
            method:"DELETE",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }) 
          const deleted_topic = res.json();
          console.log(deleted_topic);
   
      },
    ShowComment:async (context,id)=>{
        const res = await fetch("https://capstone-debate.herokuapp.com/comments/topic/" + id,{
          method:"GET",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const comments_Array =await res.json();
        console.log(comments_Array);
        context.commit("SetComments",comments_Array);
      },
      AddComment:async (content,payload)=>{
        const res = await fetch("https://capstone-debate.herokuapp.com/comments",{
          method:"POST",
          body:JSON.stringify({
           user_id:payload.user_id,
           topic_id:payload.topic_id,
           comment:payload.comment,
           date:payload.date
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }) 
        const comment_added = res.json();
        console.log(comment_added);
      },
      DeleteComment:async (id)=>{
          const res = await fetch("https://capstone-debate.herokuapp.com/comments/" + id,{
            method:"DELETE",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }) 
          const deleted_comment = res.json();
          console.log(deleted_comment);
        },

  },
  modules: {
  },
  plugins: [createPersistedState()]
})
