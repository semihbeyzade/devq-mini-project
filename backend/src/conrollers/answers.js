const Answer = require('../models/Answer')
const Question = require('../models/Question')

/** @type {import("express").RequestHandler} */
exports.createAnswer = async (req, res, next) => {
   /*  throw new Error('not implemented') */
   const answer = await new Answer(req.body)
   answer.user = req.user._id

   const question = await Question.findById(answer.question)

   if(!question) {
     const error = new Error('Ungültige Question-ID')
     error.status = 400
     return next(error)
   }

   question.answers.push(answer._id)

   await answer.save()
   await question.save()


   res.status(200).send(answer)
  }
  