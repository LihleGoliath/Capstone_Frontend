<template >
    <span class="line bg-success"></span>
    <div id="footer" class="bg-dark">
        <div class="container w-100 ">
            <div class="row">
                <div class="col-md-4 text-white">
                    <p class="text-white">Relevant Socials</p>
                    <p><a href="https://www.facebook.com/">https://www.facebook.com/</a></p>
                    <p><a href="https://www.instagram.com/">https://www.instagram.com/</a></p>
                    <p><a href="https://laracasts.com/discuss">https://laracasts.com/discuss</a></p>
                </div>
                <div class="col-md-4 text-white">
                    <h1 class="text-center text-success">C.D.S.</h1>
                    <p>Developed and designed</p>
                    <p>by Lihle</p>
                </div>
                <div class="col-md-4 text-white d-flex justify-content-center gap-3">
                    <a href="https://github.com/LihleGoliath">
                        <p><i class="fa-brands fa-square-github   fs-3 bg-success p-1 border rounded-circle"></i></p> 
                    </a>
                    <a href="https://codepen.io/lihlegoliath">
                        <p><i class="fa-brands fa-codepen  fs-3 bg-success p-1 border rounded-circle"></i></p> 
                    </a>
                    <a href="https://www.linkedin.com/in/lihle-goliath-355921244/">
                        <p><i class="fa-brands fa-linkedin  fs-3 bg-success p-1 border rounded-circle"></i></p>
                    </a>
                    <a href="https://testing-aa4e2.firebaseapp.com/">
                        <p><i class="fa-solid fa-diagram-project fs-3 bg-success p-1 border rounded-circle"></i></p> 
                    </a>
                </div>
            </div>
         
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped >
#footer{
    width:100vw;
    height:auto;
}
.line{
      display: block;
      width: 100vw;
      height: 5px;
    }
    i{
        cursor: pointer;
    }
    a{
        color:white;
    }
    a:hover{
        color:rgb(35, 146, 35)
    }
    a i:hover{
        color:black;
    }
    
</style>