import { createRouter, createWebHistory } from 'vue-router'
import login from '@/components/home-page/log-in.vue'
import recoverpassword from '@/components/home-page/recover-password.vue'
import signup from '@/components/home-page/sign-up.vue'
import player from '@/components/hear-page/player.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/home-page.vue'),
    children: [
      {
        path: '',
        name: 'login',
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
    children:[
      {
        path:'/player',
        name:'player',
        component:player
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
