import Vue from "vue";
import Router from "vue-router";
import constantes from "./constantes";

import AppHeader from "./cuerpo/Header";
import AppFooter from "./cuerpo/Footer";

import Home from "./vistas/Home";
// import paso2 from "./vistas/Paso2/main-paso2";
// import paso3 from "./vistas/Paso3/resumen";
// import paso4 from "./vistas/Paso4/formulario";
// import paso5 from "./vistas/Paso5/gracias";

// import formulario from "./vistas/Paso4/formulario-generico";

Vue.use(Router);

const router = new Router({
    linkExactActiveClass: "active",
    mode:   "history" ,
    routes: [
        {
            path: "/",
            components: {
               // header: AppHeader,
                default: Home,
              //  footer: AppFooter
            },
            name: "Home",
        },
        {
            path:"*",
            name:"404",
            redirect: { name: 'p1' }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});
const DEFAULT_TITLE = process.env.VUE_APP_TITLE || "Temporizador";
router.afterEach((to) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});
export default router;
