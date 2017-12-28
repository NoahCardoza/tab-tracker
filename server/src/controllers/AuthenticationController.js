const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const signUser = user =>
  jwt.sign(
    user,
    config.authentication.secret, {
      expiresIn: 60 * 60 * 24 * 7 // One week
  })


module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)

      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: signUser(userJSON)
      })
      // console.log(req.body);
    } catch (e) {
      res.status(400).send({
        error: "Email in use."
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } =  req.body

      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user){
        return res.status(403).send({
          error: "Invalid login credentials."
        })
      }

      // console.log("compareed:", await user.validatePassword(password))
      if (! await user.comparePassword(password)){
        return res.status(403).send({
          error: "Invalid login credentials."
        })
      }
      // Valid User
      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: signUser(userJSON)
      })
    } catch (e) {
      console.error(e);
      res.status(500).send({
        error: "An error occured trying to login."
      })
    }
  }
}
