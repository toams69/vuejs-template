// Configuration
const config = require('./conf/config')

const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}))
app.use(cors())

if (config.mode === 'dev') {
  const staticFolder = path.resolve(__dirname, '../webapp/static')
  app.use('/static', express.static(staticFolder))
  app.use(favicon(path.resolve(__dirname, '../webapp/static/favicon.ico')))
} else {
  const staticFolder = path.resolve(__dirname, './webapp/static')
  app.use('/static', express.static(staticFolder))
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './webapp/index.html'))
  })
  app.use(favicon(path.resolve(__dirname, './webapp/static/favicon.ico')))
}

// Controllers
require('./controllers/hello')(app)

server.listen(config.port, '0.0.0.0', function () {
  console.log('Service running on port ' + config.port)
})
