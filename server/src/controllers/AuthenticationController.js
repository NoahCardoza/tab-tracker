var pipeP = require('pipep')

const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const loginError = new Error({
  status: 403,
  message:'Invalid login credentials.'
})

const signUser = user =>
  jwt.sign(
    user,
    config.authentication.secret, {
      expiresIn: 60 * 60 * 24 * 7 // One week
  })

const toJSON = obj => obj.toJSON
const getBody = obj => obj['body']

const findUser = pipeP(
  ({ email, password }) => ([
    User.findOne({
      where: {
        email
      }
    }),
    password
  ]),
  ([user, password]) => {
    if (!user)
      throw loginError
    return [
      user,
      user.comparePassword(password)
    ]
  },
  ([user, match]) => {
    if (!match)
      throw loginError
    return user
  }
)

const packageResponce = pipeP(
  user => ({
    user,
    token: signUser(user)
  })
)

const Register = pipeP(
  getBody,
  User.create.bind(User),
  toJSON,
  packageResponce
)

const Login = pipeP(
  getBody,
  findUser,
  toJSON,
  packageResponce
)

module.exports = {
  register (req, res) {
    Register(req).then(res.pass)
    .catch("This Email in already in use.", 400)
  },
  login (req, res) {
    Login(req).then(res.pass)
    .catch(res.catch('An unknown error occured. Try again.', 403))
  }
}
