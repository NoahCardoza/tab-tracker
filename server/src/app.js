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
  res.catch = (message, status) => error => {
    if (error.message){
      console.error("Thrown Error:", error.message, error.status)
      res.status(error.status || 500).send({ error: error.message })
    } else {
      console.error("Unknown Error:", message, status, error)
      res.status(status || 500).send({ error: message })
    }

  }

  // Easy status
  res.ok = (status) => res.send({ status: status || 'ok' })

  // Fixes: .then(res.send)
  // Scoping issues prevent: .then(res.send)
  res.send = res.send.bind(res)
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
