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
    comment:null,
    views:[],
    auth:null,
    asc:false
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
     SetUserUpdate(state,user){
      state.user.Username = user.Username,
      state.user.user_image = user.user_image

     },
    SetToken(state,token){
      state.token = token
     },
     SetAuth(state,value){
      state.auth = value
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
     SetComment(state,comment){
      state.comment = comment
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
     },
     AuthReset(state){
      state.auth = null
     },
     sortTopicsByIndex: (state) => {
      state.topics = state.topics.sort((a, b) => {
        if (a.topic_id < b.topic_id) {
          return -1;
        }
        if (a.topic_id > b.topic_id) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.topics.reverse();
      }
      state.asc = !state.asc;
    }
  },
  actions: {   
     ShowUsers:async (context,token)=>{
    const res = await fetch("https://capstone-debate.herokuapp.com/users",{
      method:"GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-auth-token':`${token}`
      },
    })
    const UsersArray = await res.json();
    console.log(UsersArray);
    context.commit("SetUsers",UsersArray);
  },
  UpdateUser:async (context,load)=>{
    console.log(load);
    const res = await fetch("https://capstone-debate.herokuapp.com/users/" + load.id,{
      method:"PUT",
      body:JSON.stringify(load.Updated),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-auth-token':`${load.token}`
      },
    })
    const UpdatedUser = await res.json();
    console.log(UpdatedUser);
    context.commit("SetUserUpdate",load.Updated)
  },
    Login: async (context,payload)=>{
      const res = await fetch("https://capstone-debate.herokuapp.com/users/login",{
        method:"PATCH",
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
     if(tokendata == "Email not found please register"){
      console.log("Email not found");
      context.commit("SetAuth",tokendata)
     }else if(tokendata == "Password incorrect"){
      console.log(tokendata);
      console.log("Password Incorrect");
      context.commit("SetAuth",tokendata)
     }else{
       console.log(tokendata);
       console.log(tokendata.token);
  
      context.commit("SetToken",tokendata.token)
     }
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
      .then(newUserdata=>{
        if(newUserdata == "Email Already Exists In Database"){
          console.log(newUserdata);
          context.commit("SetAuth",newUserdata)
        }else{
          console.log(newUserdata);
        }
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
    delUser:async (context,load)=>{
      console.log(load);
      const res = await fetch("https://capstone-debate.herokuapp.com/users/" + load.id,{
        method:"DELETE",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':`${load.token}`
        },
      }) 
      const deleted_user = await res.json();
      console.log(deleted_user);
      // if(deleted_user){
      //   window.location.reload()
      // }
  },
    AddTopic:async (context,Land,token)=>{
        console.log(Land);
      const res = await fetch("https://capstone-debate.herokuapp.com/topics",{
        method:"POST",
        body:JSON.stringify({
        Topic:Land.Topic
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token':`${token}`
        },
      }) 
      const topic_added = await res.json();
      console.log(topic_added);
    },
    UpdateTopic:async (context,Land)=>{
      console.log(Land);
    const res = await fetch("https://capstone-debate.herokuapp.com/topics/" + Land.id,{
      method:"PATCH",
      body:JSON.stringify({
      Topic:Land.Topic
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-auth-token':`${Land.token}`
      },
    }) 
    const topic_added = await res.json();
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
      delTopic:async (context,load)=>{
          const res = await fetch("https://capstone-debate.herokuapp.com/topics/" + load.id,{
            method:"DELETE",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'x-auth-token':`${load.token}`
            },
          }) 
          const deleted_topic = await res.json();
          console.log(deleted_topic);
          if(deleted_topic){
            window.location.reload()
          }
   
      },
    ShowComments:async (context,id)=>{
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
      ShowComment:async (context,token)=>{
        const res = await fetch("https://capstone-debate.herokuapp.com/comments",{
          method:"GET",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-auth-token':`${token}`
          },
        })
        const comment_Array = await res.json();
        console.log(comment_Array);
        context.commit("SetComment",comment_Array);
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
      delComment:async (context,load)=>{
          const res = await fetch("https://capstone-debate.herokuapp.com/comments/" + load.id,{
            method:"DELETE",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'x-auth-token':`${load.token}`

            },
          }) 
          const deleted_comment = await res.json();
          console.log(deleted_comment);
          if(deleted_comment){
            setTimeout( window.location.reload(),5000)           
          }
        },

  },
  modules: {
  },
  plugins: [createPersistedState()]
})
