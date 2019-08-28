<template>
    <header class="cabecera linea">
        <div class="container">
            <div class="row">
                <div class="col barra">
                    <div class="float-left der-icon">
                        <div class="centro kia align-middle" v-on:click="irHome">
                            <img src="@/assets/images/Logo.png" alt="LOGO KIA" class="img-fluid logo-main">
                        </div>
                    </div>
                    <div class="float-right der-icon">
                        <div class="centro align-middle ">
                            <div class="col">
                                <button class="btn btn-primary" v-on:click="irKia"><span class="fa fa-home"></span> Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            irKia:function(){
                window.open(process.env.VUE_APP_URL_COMPANY, '_blank');
            },
            irHome:function(){
                this.$router.push({ name: 'p1'});
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: white;
        font-size: 10px;
    }
    .kia{
        cursor: pointer;
    }
    .barra{
        margin-top: 10px;
        margin-bottom: 10px;

    }
    .der-icon{
        height: 100%;
    }
    .centro{
        margin-top: auto;
        margin-bottom: auto;
    }
    .logo-main{
        max-height: 50px;
    }
    .linea{
        -webkit-box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.75);
    }
</style>
