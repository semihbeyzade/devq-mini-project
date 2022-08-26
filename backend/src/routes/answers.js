const express = require('express')
const controller = require('../conrollers/answers')

const app = express.Router()

app.post('/', controller.createAnswer)

module.exports = app