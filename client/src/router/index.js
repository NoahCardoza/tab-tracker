import Vue from 'vue'
import Router from 'vue-router'
import Routes, { viewTags } from './routes'
import store from '@/store/store'

const { EVERYONE, LOGGEDIN } = viewTags

export const verifyPage = viewableBy => {
  const { isLoggedIn } = store.state
  return viewableBy === EVERYONE ||
  !(isLoggedIn ^ viewableBy === LOGGEDIN)
}

Vue.use(Router)

const router = new Router({ routes: Routes })

router.beforeEach((to, from, next) =>
  next(verifyPage(to.meta.viewableBy, store.state.isLoggedIn)
  ? undefined
  : (store.state.isLoggedIn
    ? '/songs'
    : '/login')))

export default router

export const routes = Routes
