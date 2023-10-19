import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import Home from '@/views/Home'
import AL from '@/views/AI'
import IndustrySolutions from '../components/IndustrySolutions.vue'
import SuccessCases from '../components/SuccessCases.vue'
import AboutUs from '@/components/AboutUs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path:'ai',
        component:AL
      },
      {path: 'industrysolutions', name: 'industrysolutions', component: IndustrySolutions},
      {path: 'successcases', name: 'successcases', component: SuccessCases},
      {path:"aboutus",component:AboutUs}
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
