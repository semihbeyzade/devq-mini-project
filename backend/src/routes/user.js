const express = require('express')
const controller = require('../conrollers/user')
const validations = require('../lib/validators/user')

const app = express.Router()

// -> /user/logout
app.post('/logout', controller.logout)

// -> /user/register
app.post('/register', validations.register, controller.register)

// -> /user/login
app.post('/login', validations.login, controller.login)

module.exports = app