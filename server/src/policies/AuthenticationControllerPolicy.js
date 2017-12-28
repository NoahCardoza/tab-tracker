const Joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema)
    if (error){
      const _ = {
        email () {
          res.status(400).send({
            error: "You must provide a valid email."
          })
        },
        password () {
          res.status(400).send({
            error: "Your password must be between 8 to 32 characters and contain only alphanumeric characters."
          })
        }
      }[error.details[0].context.key]()
    }
    else
      next()
  }
}
