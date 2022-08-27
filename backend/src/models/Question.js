const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required:true,
    }
})

module.exports = mongoose.model('Question', Schema, 'questions')