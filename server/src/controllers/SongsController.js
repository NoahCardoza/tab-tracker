const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (e) {
      res.status(500).send({
        error: "An error occured while fetching the songs."
      })
    }
  },
  async get (req, res) {
    try {
      const song = await Song.findById(req.params.id)
      res.send(song)
    } catch (e) {
      res.status(500).send({
        error: "An error occured while fetching the song."
      })
    }
  },
  async update (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.body.id
        }
      })
      res.send({status: 'ok'})
    } catch (e) {
      res.status(500).send({
        error: "An error occured while updating the song."
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song.toJSON())
    } catch (e) {
      res.status(500).send({
        error: "An error occured while creating the songs."
      })
    }
  }
}
