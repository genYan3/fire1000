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
import Applicationtest from '../components/Applicationtest.vue'
import SmartCommunity from '../components/SmartCommunity.vue'
import SmartPark from '../components/SmartPark.vue'
import SmartStore from '../components/SmartStore.vue'
import SmartFactory from '../components/SmartFactory.vue'

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
      {path:'algorithmtools',name:'algorithmtools',component:Algorithmtools},
      {path:'applicationtest',name:'applicationtest',component:Applicationtest},
      {path:'smartcommunity',name:'smartcommunity',component:SmartCommunity},
      {path:'smartpark',name:'smartpark',component:SmartPark},
      {path:'smartstore',name:'smartstore',component:SmartStore},
      {path:'smartfactory',name:'smartfactory',component:SmartFactory},
      
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
