const express = require('express')
const { config } = require('./config/index')

// routes
const tutorialsApi = require('./routes/tutorials')

const app = express()

app.use(express.json())


//routes
tutorialsApi(app)


app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`)
})