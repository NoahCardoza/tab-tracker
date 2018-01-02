const bcrypt = require('bcrypt')

const hashPassword = (user, options) => {
  const SALT = 8

  if (!user.changed('password')){
    return;
  }

  return bcrypt.genSalt(SALT)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => user.setDataValue('password', hash))
}

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: hashPassword,
    }
  })

  user.prototype.comparePassword = function (password){
    return bcrypt.compare(password, this.password)
  }

  return user
}
