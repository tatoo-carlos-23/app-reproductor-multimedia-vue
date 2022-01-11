import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/components/home-page/log-in.vue'
import recoverpassword from '@/components/home-page/recover-password.vue'
import signup from '@/components/home-page/sign-up.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/home-page.vue'),
    children: [
      {
        path: '/',
        name: '',
        component: login,
      },
      {
        path: '/recover-password',
        name: 'recover',
        component: recoverpassword
      },
      {
        path: '/sign-up',
        name: 'signup',
        component: signup
      }
    ]
  },
  {
    path: '/hear',
    name: 'hear',
    component: () => import('../views/hear-page.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
