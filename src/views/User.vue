<template >
    <Profile v-if="user" :user="user" >
  
      
    </Profile>
    <div v-else-if="!user">
      <NotPage></NotPage>
    </div>
    <div v-else>
        Loading...
        </div>




</template>

<script>
import Profile from '@/components/profile.vue';
import NotPage from '@/components/NotPage.vue';
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
      },
    components: { Profile,NotPage }
}
</script>

<style scoped>




</style>