import Api from './Api'

export default {
  register: credentials =>
    Api.post('register', credentials),
  login: credentials =>
    Api.post('login', credentials)
}
