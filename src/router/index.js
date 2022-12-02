import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
export default router
