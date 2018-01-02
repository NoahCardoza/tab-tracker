const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const upcaseFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

const db = {
  Sequelize,
  sequelize
}

fs.readdirSync(__dirname)
  .filter(file =>
    file != 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[upcaseFirstChar(model.name)] = model // Makes names uppercase 
  })

Object.keys(db).forEach(model => {
  if (db[model].associate) {
    db[model].associate(db)
  }
})

module.exports = db
