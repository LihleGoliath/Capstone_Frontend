<template >
      <div class="border border-success d-flex flex-column w-100">
                        <div class="image d-flex ">
                          <img :src="comment.user_image" :alt="comment.user_id" class="img img-fluid ">
                          <span class="text-white text-start ">{{comment.Username}}</span>
                        </div>
                        <div class="comment bg-success w-100 h-100">

                            <p class="text-white">{{comment.comment}}</p>
                        </div>
                    </div>
</template>
<script>
export default {
    props:["comment"]
    
}
</script>
<style  >
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