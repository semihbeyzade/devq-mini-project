const express = require('express')
const controller = require('../conrollers/questions')

const app = express.Router()

// -> /questions
app.route('/')
.get(controller.getQuestionList)
.post(controller.createQuestion)

app.get('/:id', controller.getQuestionsById)

module.exports = app