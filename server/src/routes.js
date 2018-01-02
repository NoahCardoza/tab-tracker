const AuthController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');
const HistoryController = require('./controllers/HistoryController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const IsAuthenticated = require('./policies/IsAuthenticated');

module.exports = app => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)

  app.get('/songs',
    SongsController.index)
  app.get('/songs/:id',
    IsAuthenticated.soft,
    SongsController.get)
  app.put('/songs/:id',
    SongsController.update)
  app.post('/songs',
    SongsController.post)

  app.get('/bookmarks',
    IsAuthenticated.hard,
    BookmarksController.index)
  app.delete('/bookmarks/:songId',
    IsAuthenticated.hard,
    BookmarksController.delete)
  app.post('/bookmarks/:songId',
    IsAuthenticated.hard,
    BookmarksController.create)

  app.get('/history',
    IsAuthenticated.hard,
    HistoryController.index)

  // app.get('/isAuth',
  //   IsAuthenticated.hard,
  //   (req, res) => {
  //     res.send(req.user)
  //   })

}
