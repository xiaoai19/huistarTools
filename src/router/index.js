import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/publicheader',
    name: 'publicheader',
    component: () => import('../views/PublicHeader'),
    meta: { show: false }
  },

  {
    path: '/clouddisk',
    name: 'clouddisk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DiskView.vue'),
  },
  {
    path: '/candv',
    name: 'candv',
    component: () => import('../views/CandVView.vue'),
  },


  {
    path: '/pwdval',
    name: 'pwdval',
    component: () => import('../views/PwdValView.vue'),
  },
  {
    path: '/diskcontent',
    name: 'diskcontent',
    component: () => import('../views/DiskContent.vue'),
  },

  {
    path: '/candvcontent',
    name: 'candvcontent',
    component: () => import('../views/CandVContent.vue'),
  },
  {
    path: '/searchview',
    name: 'searchview',
    component: () => import('../views/SearchView.vue'),
    show:false
  },

  
  {
    path: '/pdftranword',
    name: 'pdftranword',
    component: () => import('../views/PdfTranWord.vue'),
  },
  
  {
    path: '/Timerview',
    name: 'TimerView',
    component: () => import('../views/TimerView.vue'),
  },
  
  {
    path: '/RandomText',
    name: 'RandomText',
    component: () => import('../views/RandomText.vue'),
  },
  {
    path: '/TodoListContent',
    name: 'TodoListContent',
    component: () => import('../views/TodoListContent.vue'),
  },
  {
    path: '/RandomName',
    name: 'RandomName',
    component: () => import('../views/RandomName.vue'),
  },
  
  {
    path:'/',
    redirect:'/home'
  },

]

const router = new VueRouter({
  routes
})

export default router
