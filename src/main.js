import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import store from './store'
import { clickOutside } from '@/directives'
import router from '@/router'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['AUTH/authenticated']) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters['AUTH/authenticated']) {
      next({
        name: 'Home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

store.dispatch('AUTH/attempt', localStorage.getItem('token')).then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .directive('click-outside', clickOutside)
    .mount('#app')
})