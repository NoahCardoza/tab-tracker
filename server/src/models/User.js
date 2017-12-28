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
  const user = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    }
  })

  user.prototype.comparePassword = function (password){
    return bcrypt.compare(password, this.password)
  }

  return user
}
