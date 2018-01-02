module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tabs: DataTypes.TEXT
  })

  return song
}
