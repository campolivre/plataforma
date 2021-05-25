import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import LoginRecovery from "../views/LoginRecovery.vue";
import LoginNewPass from "../views/LoginNewPass.vue";
import TwoStepValidation from "../views/TwoStepValidation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/esqueceuSenha",
    name: "LoginRecovery",
    component: LoginRecovery,
  },
  {
    path: "/novaSenha",
    name: "LoginNewPass",
    component: LoginNewPass,
  },
  {
    path: "/validaAcesso",
    name: "TwoStepValidation",
    component: TwoStepValidation,
  },
  {
    path: "/buscaOferta",
    name: "FilterPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FilterPage.vue"),
  },
  {
    path: "/paginaOferta",
    name: "OfferPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OfferPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
