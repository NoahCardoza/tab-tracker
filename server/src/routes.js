const AuthController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js');

module.exports = app => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthController.register
  )

  app.post('/login',
    AuthController.login
  )
}
