const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { sequelize } = require('./models');
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
  // Easy error handling
  res.catch = message => error => {
    console.error(message, error)
    res.status(500).send({ error: message })
  }

  // Easy status
  res.ok = (status) => res.send({ status: status || 'ok' })

  // Sort cut for: .then(data => res.send(data))
  // Scoping issues prevent: .then(res.send)
  res.pass = data => res.send(data)
  next()
})

require('./passport')
require('./routes')(app)

// { force: true }
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log("Server started on port", config.port);
  })
