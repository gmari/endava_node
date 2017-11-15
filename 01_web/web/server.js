'use strict'

const http = require('http')
const express = require('express')
const routes = require('./routes')
const { errorHandler } = require('./utils')

const app = express()

app.use(routes)

app.use(errorHandler)

// create a http server from the app (this can be closed properly, unlike the express app)
module.exports = http.createServer(app)
