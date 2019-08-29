<template>
    <div class="image">
        <br>
        <div><h2>LA MARCA GLOBAL LÍDER EN INNOVACIÓN Y TECNOLOGÍA</h2></div>
        <div class="divArte" ><img src="../assets/images/arte.png" alt="arte" class="arte"></div>
        <div><h2>21 - 09 - 2019</h2></div>
        <div><h2>FALTAN</h2>
        </div>
        <Temporizador></Temporizador>
    </div>
</template>

<script>
    import Temporizador from "../componentes/Temporizador";
    export default {
        name: "Home",
        components:{
            Temporizador
        }
    }
</script>

<style scoped>
    .arte {
        height:300px; background-size:cover; width:300px; weight:100%;
        /* background-position:50% 50%; */
    }

    .divArte{
        text-align: center;
    }
    h2 {
    text-align: center;
        color: white;
        font-style: italic;
    }
    .image{
        height:65em; background-size:cover; width:auto;
        background-image:url('../assets/images/wallpapper.jpg');
        /* background-position:50% 50%; */
    }

</style>
