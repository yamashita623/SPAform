import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/First.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'First',
      component: Home
    },
    {
      path: '/Second',
      name: 'Second',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Second.vue')
    },
    {
      path: '/First',
      name: 'First',
      component: () => import('./views/First.vue')
    },
    {
      path: '/Third',
      name: 'Third',
      component: () => import('./views/Third.vue')
    },
    {
      path: '/Fourth',
      name: 'Fourth',
      component: () => import('./views/Fourth.vue')
    }
  ]
})