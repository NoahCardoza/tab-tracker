import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ViewSongs from '@/components/ViewSongs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import ViewBookmarks from '@/components/ViewBookmarks'
import EditSong from '@/components/EditSong'
import Logout from '@/components/Logout'
// import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/songs',
      name: 'songs',
      component: ViewSongs
    },
    {
      path: '/songs/create',
      name: 'create-song',
      component: CreateSong
    },
    {
      path: '/songs/:id',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:id/edit',
      name: 'edit-song',
      component: EditSong
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: ViewBookmarks
    },
    {
      path: '*',
      redirect: '/songs'
    }
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // }
  ]
})
