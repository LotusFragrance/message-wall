import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message')
      },
      {
        path: '/football',
        name: 'football',
        component: () => import('@/views/football')
      },
      {
        path: '/share',
        name: 'share',
        component: () => import('@/views/share')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
export default router
