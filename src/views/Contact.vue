<template >
    <section class="d-flex justify-content-center algin-items-center">
        <div class="container border border-success my-auto" >
            <h1 class="text-white">Get In Touch With Us</h1>
            <div class="bg-success border rounded p-2 h-100 my-auto mb-3">
                <ContactFrom/>
            </div> 
        </div>
    </section>
</template>
<script>
import ContactFrom from '@/components/ContactFrom.vue';
export default {
    components: { ContactFrom }
}
</script>
<style scoped>
    section{
      
        height: 100vh;
    }
    .container{
        width: 100%;
    height: fit-content;
    background-color: black;
    }
</style>