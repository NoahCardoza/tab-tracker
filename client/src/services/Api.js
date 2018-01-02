import axios from 'axios'
import store from '@/store/store'

const API = () => axios.create({
  // baseURL: 'http://510ed50c.ngrok.io',
  baseURL: 'http://localhost:8081/',
  headers: {
    Authorization: `Bearer ${store.state.token}`
  }
})

window.API = API

export default API
