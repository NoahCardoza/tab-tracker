const passport = require('passport')

module.exports = {
  hard (req, res, next) {
    passport.authenticate('jwt', function (err, user) {
      if (err || !user) {
        res.status(403).send({
          error: "You do not have access to this resource."
        })
      } else {
        req.user = user
        next()
      }
    })(req, res, next)
  },
  soft (req, res, next) {
    passport.authenticate('jwt', function (err, user) {
        req.user = user
        next()
    })(req, res, next)
  }
}
