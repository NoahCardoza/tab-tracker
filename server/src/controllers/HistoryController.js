const { map } = require('ramda');
var pipeP = require('pipep')

const getSong = obj => obj.getSong()

const retrieveSongs = pipeP(
  req => req.user.getHistory(),
  map(getSong),
)

module.exports = {
  index (req, res) {
    retrieveSongs(req).then(res.pass)
      .catch(res.catch("There was an error fetching your history."))
  }
}
