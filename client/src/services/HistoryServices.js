import API from './API'

export default {
  index () {
    return API().get('history')
  }
}
