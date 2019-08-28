import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';


import wizard from "./modulos/wizard";


Vue.use(Vuex);
/***
 * guarda la informacion de VUEX en localstorage
**/
const vuexLocalStorage = new VuexPersistence({
    key: 'kia',
    storage: window.localStorage
});
 

const store = new Vuex.Store({
    modules: {
        wizard
    },
    plugins: [vuexLocalStorage.plugin]
});

export default store;
