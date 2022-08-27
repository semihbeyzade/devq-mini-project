const express = require('express')
const controller = require('../conrollers/answers')
const validations = require('../lib/validators/answers')

const app = express.Router()

// -> /answers
app.post('/', validations.createAnswer, controller.createAnswer)

module.exports = app