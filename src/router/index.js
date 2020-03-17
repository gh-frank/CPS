import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/dataPicker',
    name: 'DataPicker',
    component: () => import('../views/DataPicker.vue')
  },
  {
    path: '/zhDataPicker',
    name: 'ZhDataPicker',
    component: () => import('../views/ZhDataPicker.vue')
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import('../views/Tabs.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/testLogin',
    name: 'TestLogin',
    component: () => import('../views/TestLogin.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../views/Notification.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
