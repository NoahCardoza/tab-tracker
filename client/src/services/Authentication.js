import Api from './Api'

export default {
  register: credentials =>
    Api.post('register', credentials)
}
