import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'

Vue.use(Router)

// const cleanRoutesForRounter = routes => routes.map(rout => ({ ...rout, protected: undefined }))
// const cleanRoutesForHeader = routes => routes.slice(-1).

export default (new Router({ routes: Routes }))

export const routes = Routes
