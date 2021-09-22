import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import LoginGroup from '../views/Login/LoginGroup.vue'
import Login from '../views/Login/index.vue'
import RegisterGroup from '../views/Login/RegisterGroup.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'LoginGroup',
    component: LoginGroup,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/register',
    name: 'RegisterGroup',
    component: RegisterGroup,
    meta: {
      requiresVisitor: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
