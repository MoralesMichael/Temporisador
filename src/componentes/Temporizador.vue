<template>
    <!-- partial:index.partial.html -->
       <div class="container">
           <div id="timer">
               <div class = "days" >
                   <div class="numbers">{{days}}</div>
                   <br>dias</div>
               <div class="hours">
                   <div class="numbers">{{hours}}</div>
                   <br>horas</div>
               <div class="minutes">
                   <div class="numbers">{{minutes}}</div>
                   <br>minutos</div>
                   <div class="seconds">
                       <div class="numbers">{{seconds}}</div>
                       <br>segundos</div>


           </div>

       </div>


</template>

<script>
    export default {
        name: "Temporizador",
        data: () => ({
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
        }),
        methods: {

            iniciarReloj: function () {
                const anio = parseInt(process.env.VUE_APP_FECHA_LIMITE_ANIO)
                const mes = parseInt(process.env.VUE_APP_FECHA_LIMITE_MES)
                const dia =parseInt(process.env.VUE_APP_FECHA_LIMITE_DIA)
               // console.log(anio)
                const Septiembre19 = new Date(anio, mes, dia).getTime();



// countdown
                setInterval(()=> {
                    // get today's date
                    const today = new Date().getTime();
                    // get the difference
                    const diff = Septiembre19 - today;
                    // math
                    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);

                }, 1000);

            }
        },
        mounted() {
            this.iniciarReloj()
        }
    }
</script>

<style scoped>
    .container {
        position: relative;
        margin: auto;
        overflow: hidden;
        width: 650px;
        height: 480px;
    }

    h1 {
        text-align: center;
        margin-top: 2em;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0px;
        color: #F6F4F3;
    }

    #timer {
        color: #F6F4F3;
        text-align: center;
        text-transform: uppercase;
        font-size: .7em;
        letter-spacing: 1px;
    }

    .days, .hours, .minutes, .seconds {
        display: inline-block;
        padding: 30px;
        width: 100px;
        border-radius: 5px;
        margin-left: 7px;
        margin-right: 7px;

    }

    .days {
        background: #276FBF;
    }

    .hours {
        background: #276FBF;
    }

    .minutes {
        background: #276FBF;
    }

    .seconds {
        background: #276FBF;
    }

    .numbers {
        color: #ffffff;
        font-size: 4em;
    }


    .white .triangle {
        border-bottom: 14px solid #F6F4F3;
    }

    .white .string {
        background: #F6F4F3;
        border: 1px solid #F6F4F3;
    }

    .red .triangle {
        border-bottom: 14px solid #EF2F3C;
    }

    .red .string {
        background: #EF2F3C;
        border: 1px solid #EF2F3C;
    }
    .blue .triangle {
        border-bottom: 14px solid #276FBF;
    }

    .blue .string {
        background: #276FBF;
        border: 1px solid #276FBF;
    }











</style>
