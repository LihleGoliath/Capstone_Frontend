<template >
    <Profile v-if="user" :user="user" >
  
      
    </Profile>
    <div v-else-if="!user">
      Not Login
    </div>
    <div v-else>
        Loading...
        </div>




</template>

<script>
import Profile from '@/components/profile.vue';
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
      },
    components: { Profile }
}
</script>

<style scoped>




</style>