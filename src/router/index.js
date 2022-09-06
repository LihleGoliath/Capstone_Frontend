import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Topics',
    name: 'Topics',
    component: () => import('../views/Topics.vue')
  },
  {
    path: '/Topic/:id',
    name: 'TopicOne',
    component: () => import('../views/TopicOne.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  } ,
  {
    path: '/400s',
    name: 'user errors',
    component: () => import('../views/400page.vue')
  },
  {
    path: '/500s',
    name: 'sever errors',
    component: () => import('../views/500page.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
