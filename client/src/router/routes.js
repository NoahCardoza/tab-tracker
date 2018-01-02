import Register from '@/components/Register'
import Login from '@/components/Login'
import ViewSongs from '@/components/ViewSongs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import ViewBookmarks from '@/components/ViewBookmarks'
import ViewHistory from '@/components/ViewHistory'
import EditSong from '@/components/EditSong'
import Logout from '@/components/Logout'

const EVERYONE = 0
const LOGGEDIN = 1
const LOGGEDOUT = 2

export const viewTags = {
  EVERYONE,
  LOGGEDIN,
  LOGGEDOUT
}

export default [
  {
    path: '/songs',
    name: 'Songs',
    component: ViewSongs,
    meta: {
      header: true,
      viewableBy: EVERYONE
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      header: true,
      viewableBy: LOGGEDOUT
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      header: true,
      viewableBy: LOGGEDOUT
    }
  },
  {
    path: '/songs/create',
    name: 'Create-song',
    component: CreateSong,
    meta: {
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/songs/:id',
    name: 'Song',
    component: ViewSong,
    meta: {
      viewableBy: EVERYONE
    }
  },
  {
    path: '/songs/:id/edit',
    name: 'Edit-song',
    component: EditSong,
    meta: {
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: ViewBookmarks,
    meta: {
      header: true,
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/history',
    name: 'History',
    component: ViewHistory,
    meta: {
      header: true,
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      header: true,
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '*',
    redirect: '/songs',
    meta: {
      viewableBy: EVERYONE
    }
  }
]
