import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import IndexView from '../views/IndexView.vue'
import LoginView from '@/views/LoginView.vue'
import LogByIdView from '@/views/LogByIdView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/log/:id',
    component: LogByIdView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
