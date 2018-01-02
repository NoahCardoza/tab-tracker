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
    name: 'songs',
    component: ViewSongs,
    meta: {
      title: 'Songs',
      header: true,
      viewableBy: EVERYONE
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
      header: true,
      viewableBy: LOGGEDOUT
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: 'Register',
      header: true,
      viewableBy: LOGGEDOUT
    }
  },
  {
    path: '/songs/create',
    name: 'create-song',
    component: CreateSong,
    meta: {
      title: 'Create Song',
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/songs/:id',
    name: 'song',
    component: ViewSong,
    meta: {
      title: 'View Song',
      viewableBy: EVERYONE
    }
  },
  {
    path: '/songs/:id/edit',
    name: 'edit-song',
    component: EditSong,
    meta: {
      title: 'Edit Song',
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    component: ViewBookmarks,
    meta: {
      title: 'Bookmarks',
      header: true,
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/history',
    name: 'history',
    component: ViewHistory,
    meta: {
      title: 'History',
      header: true,
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      title: 'Logout',
      header: true,
      viewableBy: LOGGEDIN
    }
  },
  {
    path: '*',
    redirect: '/songs',
    meta: {
      title: '',
      viewableBy: EVERYONE
    }
  }
]
