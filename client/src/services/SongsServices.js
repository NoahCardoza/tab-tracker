import Api from './Api'

export default {
  index () {
    return Api.get('songs')
  },
  get (id) {
    return Api.get(`songs/${id}`)
  },
  post (song) {
    return Api.post('songs', song)
  },
  put (song) {
    return Api.put(`songs/${song.id}`, song)
  }
}
