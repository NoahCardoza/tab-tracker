import API from './API'

export default {
  index (search) {
    return API().get('songs', {
      params: {
        search
      }
    })
  },
  get (id) {
    return API().get(`songs/${id}`)
  },
  post (song) {
    return API().post('songs', song)
  },
  put (song) {
    return API().put(`songs/${song.id}`, song)
  }
}
