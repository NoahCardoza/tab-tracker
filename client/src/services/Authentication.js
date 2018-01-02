import API from './API'

export default {
  register: credentials =>
    API().post('register', credentials),
  login: credentials =>
    API().post('login', credentials)
}
