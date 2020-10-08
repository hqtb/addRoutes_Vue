import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }
  // , {
  //   path: "*",
  //   name: "NotFund",
  //   component: () =>import('@/views/NotFund.vue')
  // }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router