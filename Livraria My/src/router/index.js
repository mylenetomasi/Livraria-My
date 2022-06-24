import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import EditorasView from "@/views/EditorasView.vue";
import CategoriasView from "@/views/CategoriasView.vue";
import AutoresView from "@/views/AutoresView.vue";
import LivrosView from "@/views/LivrosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "editoras",
      component: EditorasView,
    },
    {
      path: "/",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/",
      name: "livros",
      component: LivrosView,
    },
  ],
});

export default router;
