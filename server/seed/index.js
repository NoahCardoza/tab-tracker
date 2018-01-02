const { sequelize, Song, User, Bookmark } = require('../src/models');

const users = require('./users');
const songs = require('./songs');
const bookmarks = require('./bookmarks');

sequelize.sync({ force: true })
  .then(() => {
    Promise.all(
      users.map(user =>
        User.create(user)),
      songs.map(song =>
        Song.create(song))
    ).then(() =>
      bookmarks.map(bookmark =>
        Bookmark.create(bookmark))
      )

  })
