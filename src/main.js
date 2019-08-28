import '@babel/polyfill';

import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import dotenv from 'dotenv';
// import store from './store/index';

import estilosT from "./assets/demo5/sass/style.scss";

import VeeValidate, { Validator } from 'vee-validate';
import VueMaterial from 'vue-material';

import es from 'vee-validate/dist/locale/es';
// import { VueReCaptcha } from 'vue-recaptcha-v3';
import moment from 'moment';
import BootstrapVue from 'bootstrap-vue';
import VueIziToast  from "vue-izitoast";
// import GmapCluster from 'vue2-google-maps/dist/components/cluster';
// import * as VueGoogleMaps from 'vue2-google-maps';
// import VueSweetalert2 from 'vue-sweetalert2';
// import VueFacebookPixel from 'vue-analytics-facebook-pixel';
// import VueAnalytics from 'vue-analytics';
import './servicios/configuracion';


moment.locale("es");

// Vue.use(VueFacebookPixel);
Vue.use(VueMaterial);
Vue.use(VueIziToast);
Vue.use(estilosT);
Vue.use(BootstrapVue);

// Vue.component('GmapCluster', GmapCluster);
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: process.env.VUE_APP_GOOGLE_KEY,
//     libraries: 'places',
//     language: 'es'
//   }
// });
Vue.use(VeeValidate,{
  events: 'change|blur'
});
// Vue.analytics.fbq.init(process.env.VUE_APP_PIXEL);
// Vue.use(VueAnalytics, {
//   id: process.env.VUE_APP_ANALITICS_KEY
// });



// Vue.use(VueReCaptcha, { siteKey: process.env.VUE_APP_RECAPTCHA_KEY });
Validator.localize('es', es);
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

dotenv.config();

new Vue({
  router:router,
  // store:store,
  render: h => h(App),
}).$mount('#app');
