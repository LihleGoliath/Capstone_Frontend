<template >
    <div class=" w-fit-content">
        <form action="https://formspree.io/f/mrgjrpwl"
        method="POST" >
            <input type="text" class="form-control my-2" placeholder="Username" required>
            <input type="text" class="form-control my-2" placeholder="Email"  required>
            <input type="text" class="form-control my-2" placeholder="Subject"  required>
            <div class="form-floating">
                <textarea name="Message" id="Message" cols="20" rows="10" class="form-control my-2" placeholder="Message" required>
                </textarea>
                <label for="Message">Leave A Message</label>
            </div>

            <button type="submit" class="btn btn-success"> Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container{
        height: fit-content;
    }
    .form-control{
   width:60vw;
   margin: auto;
    }
    .form{
        width: fit-content;
    }
    
</style>