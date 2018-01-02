import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  strict: true,
  state: {
    // Login / Authentication
    token: null,
    user: null,
    isLoggedIn: false,
    // Other
    songs: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isLoggedIn = !!token
    },
    setUser (state, user) {
      state.user = user
    },
    setSongs (state, songs) {
      state.songs = songs
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setSongs ({ commit }, songs) {
      commit('setSongs', songs)
    }
  }
})
