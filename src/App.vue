<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main class="image" >

        <fade-transition origin="center" mode="out-in" :duration="350">
          <router-view/>
        </fade-transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
  import { FadeTransition } from "vue2-transitions";
  export default {
    components: {
      FadeTransition,
    }
  }
</script>
<style scoped>
  .image{
    height:40em; background-size:cover; width:auto;
    background-image:url('./assets/images/wallpapper.jpg');
    /* background-position:50% 50%; */
  }
</style>

