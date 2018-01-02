module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('history', {}, {
    indexes: [
      {
        unique: true,
        fields: [ 'userId', 'songId' ]
      }
    ]
  })
  History.associate = function (models) {
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
    models.User.hasMany(History, {as: 'history'})
  }
  return History
}
