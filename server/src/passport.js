const passport = require('passport');
const config = require('./config/config');
const { User } = require('./models')

const { Strategy, ExtractJwt } = require('passport-jwt')

passport.use(
  new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.secret
  }, function (payload, done) {
    User.findOne({
      where: {
        id: payload.id
      }
    }).then(user => {
      done(null, user)
    }).catch((err) => {
        done(new Error(), null)
      })
  })
)

module.exports = null
