import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

Vue.use(Router)

const router = new Router({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue')
    },
    ...pages
  ]
})

// router.beforeEach((to, from, next) => {
//   /*如果需要登录，当前没有登录，直接跳转到登录页*/
//   if (to.meta.Auth && !store.state.loginStatus) {
//     return next({ name: 'Login', query: { path: to.name } })
//   }
//   next()
// })

export default router
