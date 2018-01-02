import Register from '@/components/Register'
import Login from '@/components/Login'
import ViewSongs from '@/components/ViewSongs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import ViewBookmarks from '@/components/ViewBookmarks'
import ViewHistory from '@/components/ViewHistory'
import EditSong from '@/components/EditSong'
import Logout from '@/components/Logout'

export default [
  {
    openToAll: true,
    path: '/songs',
    name: 'Songs',
    component: ViewSongs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    hidden: true,
    path: '/songs/create',
    name: 'Create-song',
    component: CreateSong
  },
  {
    hidden: true,
    path: '/songs/:id',
    name: 'Song',
    component: ViewSong
  },
  {
    hidden: true,
    path: '/songs/:id/edit',
    name: 'Edit-song',
    component: EditSong
  },
  {
    onlyWhenLoggedIn: true,
    path: '/bookmarks',
    name: 'Bookmarks',
    component: ViewBookmarks
  },
  {
    onlyWhenLoggedIn: true,
    path: '/history',
    name: 'History',
    component: ViewHistory
  },
  {
    onlyWhenLoggedIn: true,
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    hidden: true,
    path: '*',
    redirect: '/songs'
  }
]
