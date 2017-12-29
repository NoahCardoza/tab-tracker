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
    SongsController.index)
  app.get('/songs/:id',
    SongsController.get)
  app.put('/songs/:id',
    SongsController.update)
  app.post('/songs',
    SongsController.post)

}
