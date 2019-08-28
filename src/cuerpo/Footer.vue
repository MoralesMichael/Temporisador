<template>
    <footer>
        <div class="container creditos">

        </div>
        <div class="linea_blanca sombra">
            <div class="container pt-3">
                <img src="@/assets/images/Logo.png" alt="LOGO GEELY" class="img-fluid logo">
                <span class="pl-5">© Copyright {{ano}} Geely Auto </span>
            </div>
        </div>
        <div class="franjas">

        </div>
    </footer>
</template>
<script>
    export default {
        name: "Footer",
        data:()=>({
            ano: new Date().getFullYear()
        })
    }
</script>

<style scoped>
    .logo{
        max-height: 50px;
    }
    .creditos{
        padding-bottom: 70px;
        color: black;
    }
    @media (min-width:320px)  {
        .imagen-pie{
            right: 49px;
        }
    }
    @media (min-width:801px)  {
        .imagen-pie{
            right: 170px;
        }
    }
    .imagen-pie{
        width: 170px;
        position: absolute;
        margin-top: -84px;
        z-index: 3 ;
    }
    .linea_blanca{
        height: 80px;
        margin-top: -28px;
        z-index: 2 ;
        background-color: black;
        color: white;
    }
    .franjas{
        bottom:0;
    }
    .sombra{
        -webkit-box-shadow: 0px -2px 81px -10px rgba(0,0,0,0.8);
        -moz-box-shadow: 0px -2px 81px -10px rgba(0,0,0,0.8);
        box-shadow: 0px -2px 81px -10px rgba(0,0,0,0.8);
    }
    .flotante{
        font-size: 11px;
        padding-bottom: 20px;
    }
    .app-logo{
        max-height: 80px;
    }
    .brand-logo{
        padding-top: 1px;
        padding-bottom: 1px;
        max-height: 30px;
    }
    .centro{
        vertical-align: middle;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .alto{
        height: 200px;
    }
    .borde{
        background-color: white;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-style: dashed;
        border-width: 1px;
        border-color: #f0f0f0;
    }
    ol, ul, dl {
        margin-bottom:0px
    }
</style>
