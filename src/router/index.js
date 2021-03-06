import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Daftar from "../views/Daftar.vue";
import Dashboard from "../views/Dashboard.vue";
import Resep from "../views/Resep.vue";
import Masakan from "../views/Masakan.vue";
import AddResep from "../views/AddResep.vue";
import EditResep from "../views/EditResep.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/daftar",
    name: "Daftar",
    component: Daftar,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/tambahresep",
    name: "AddResep",
    component: AddResep,
  },
  {
    path: "/dashboard/editresep",
    name: "EditResep",
    component: EditResep,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/resep/:namaresep",
    name: "Resep",
    component: Resep,
    props: true,
  },
  {
    path: "/masakan",
    name: "Masakan",
    component: Masakan,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
