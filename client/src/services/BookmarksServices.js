import API from './API'

export default {
  index (search) {
    return API().get('bookmarks')
  },
  delete (songId) {
    return API().delete(`bookmarks/${songId}`)
  },
  create (songId) {
    return API().post(`bookmarks/${songId}`)
  }
}
