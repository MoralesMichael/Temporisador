<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <div class="kt-grid  kt-wizard-v1 kt-wizard-v1--white" id="kt_wizard_v1" data-ktwizard-state="first">
        <fade-transition origin="center" mode="out-in" :duration="350">
          <router-view/>
        </fade-transition>
      </div>
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

</style>

