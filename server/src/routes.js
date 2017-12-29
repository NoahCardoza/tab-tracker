const AuthController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = app => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthController.register
  )

  app.post('/login',
    AuthController.login
  )

  app.get('/songs',
    SongsController.index
  )

  app.post('/songs',
    SongsController.post
  )
}
