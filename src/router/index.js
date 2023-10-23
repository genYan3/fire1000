import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import Home from '@/views/Home'
import AL from '@/views/AI'
import SuccessCases from '../components/SuccessCases.vue'
import AboutUs from '../components/AboutUs.vue'
import AIEdgeBox from '../components/AIEdgeBox.vue'
import AlgorithmPlatform from '../components/AlgorithmPlatform.vue'
import Algorithmtools from '../components/Algorithmtools.vue'

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
      {path: 'successcases', name: 'successcases', component: SuccessCases},
      {path: 'aboutus',name :'aboutus',component: AboutUs},
      {path: 'aiedgebox',name :'aiedgebox',component: AIEdgeBox},
      {path:'algorithmplatform',name:'algorithmplatform',component:AlgorithmPlatform},
      {path:'algorithmtools',name:'algorithmtools',component:Algorithmtools}
      
      
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
