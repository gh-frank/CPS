import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'TestLogin',
    component: () => import('../views/TestLogin.vue')
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
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
    component:Layout
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('../views/Notification.vue')
  },
  {
    path: '/EAM/SmartMeter',
    name: 'EAMsmartMeter',
    component: () => import('../views/equipmentAssetManagement/SmartMeter.vue')
  },
  {
    path: '/EAM/SmartWaterMeter',
    name: 'EAMsmartWaterMeter',
    component: () => import('../views/equipmentAssetManagement/SmartWaterMeter.vue')
  },
  {
    path: '/EAM/EnergyController',
    name: 'EAMenergyController',
    component: () => import('../views/equipmentAssetManagement/EnergyController.vue')
  },
  {
    path: '/EAM/ProtocolConverter',
    name: 'EAMprotocolConverter',
    component: () => import('../views/equipmentAssetManagement/ProtocolConverter.vue')
  },
  {
    path: '/EAM/SensingDevice',
    name: 'EAMsensingDevice',
    component: () => import('../views/equipmentAssetManagement/SensingDevice.vue')
  },
  {
    path: '/EAM/Tmnl',
    name: 'EAMtmnl',
    component: () => import('../views/equipmentAssetManagement/Tmnl.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
