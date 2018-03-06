const http = require('http')
const express = require('express')

const config = require('./utils/config')

const app = express()

app.use(express.static('build'))

app.get('/data', (request, response) => {
  response.json({data: "data"})
})

const server = http.createServer(app)
server.listen(config.port, () => {
  console.log('Kuunnellaan '+config.port)
})