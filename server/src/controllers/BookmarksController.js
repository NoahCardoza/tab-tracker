const { Bookmark } = require('../models')

module.exports = {
  index (req, res) {
    req.user.getBookmarks({
      order: [
        ['createdAt', 'DESC']
      ]
    })
      .then(bookmarks => Promise.all(bookmarks.map(bookmark => bookmark.getSong())))
      .then(res.pass)
      .catch(res.catch("An error occured while accessing your bookmarks."))
  },
  create (req, res) {
    Bookmark.findOrCreate({
      where: {
        songId: req.params.songId,
        userId: req.user.id
      }
    }).spread((bookmark, created) => {
      if (!created)
        return res.status(400).send('You already have this bookmark.')
      res.ok()
    })
    .catch(res.catch("An error occured while creating your bookmark."))
  },
  delete (req, res) {
    Bookmark.destroy({
      where: {
        songId: req.params.songId,
        UserId: req.user.id
      }
    }).then(res.ok)
    .catch(res.catch("An error occured while deleting your bookmark."))
  }
}
