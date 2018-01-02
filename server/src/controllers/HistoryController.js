const { Song, History } = require('../models')
const { map } = require('ramda');
var pipeP = require('pipep')

const get = key => o => o[key]

const retrieveSongs = pipeP(
  req => req.user.getHistory({
    order: [
      ['updatedAt', 'DESC']
    ],
    include: [
      {
        model: Song
      }
    ]
  }),
  map(get('song'))
)

module.exports = {
  index (req, res) {
    retrieveSongs(req).then(res.send)
      .catch(res.catch("There was an error fetching your history."))
  },
  log (req, res, next) {
    if (req.user){
      History.upsert({
        userId: req.user.id,
        songId: req.params.id
      })
    }
    next()
  }
}
