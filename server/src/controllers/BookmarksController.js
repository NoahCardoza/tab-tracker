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
  // Bookmark.create({
  //   UserId:
  // })

  // index (req, res) {
  //   console.log(req.query)
  //   Bookmark.all()
  //   // findOne({
  //   //   where: { songId: req.query.songId }
  //   // })
  //   .then(asyncbookmarks => {
  //     console.log(bookmarks)
  //     res.send(await (bookmarks[0].getSong()))
  //   })
  //   .catch(res.catch("An error occured while fetching your bookmarks."))
  // },
  // get (req, res) {
  //   Bookmark.findAll({
  //     where: { songId: req.query.song }
  //   })
  //   .then(bookmarks => res.send(bookmarks))
  //   .catch(res.catch("An error occured while fetching this bookmark."))
  // }
  // ,
  // async get (req, res) {
  //   try {
  //     const song = await Song.findById(req.params.id)
  //     res.send(song)
  //   } catch (e) {
  //     res.status(500).send({
  //       error: "An error occured while fetching the song."
  //     })
  //   }
  // },
  // async update (req, res) {
  //   try {
  //     const song = await Song.update(req.body, {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     res.send({status: 'ok'})
  //   } catch (e) {
  //     res.status(500).send({
  //       error: "An error occured while updating the song."
  //     })
  //   }
  // },
  // async post (req, res) {
  //   try {
  //     const song = await Song.create(req.body)
  //     res.send(song.toJSON())
  //   } catch (e) {
  //     res.status(500).send({
  //       error: "An error occured while creating the songs."
  //     })
  //   }
  // }
