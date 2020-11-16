import { createRouter, createWebHashHistory } from 'vue-router'
import Practice from '../components/Practice.vue'

const routes = [
  {
    path: '/',
    name: 'Practice',
    component: Practice
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../components/List.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
