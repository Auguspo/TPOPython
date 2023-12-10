// router/index.js
import { createRouter, createWebHistory } from "vue-router"; // Asegúrate de importar las funciones necesarias
import InicioPage from "@/views/InicioPage.vue";
import VivoPage from "@/views/VivoPage.vue";
import ContactoPage from "@/views/ContactoPage.vue";
import EquiposPage from "@/views/EquiposPage.vue";

const routes = [
  {
    path: "/",
    name: "InicioPage",
    component: InicioPage,
    meta: { title: "Inicio - DeporNET" },
  },
  {
    path: "/vivo",
    name: "VivoPage",
    component: VivoPage,
    meta: { title: "Vivo - DeporNET" },
  },
  {
    path: "/contacto",
    name: "ContactoPage",
    component: ContactoPage,
    meta: { title: "Contacto - DeporNET" },
  },

  {
    path: "/equipos",
    name: "EquiposPage",
    component: EquiposPage,
    meta: { title: "Equipos - DeporNET" },
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "DeporNET";
  next();
});

export default router;
