const mongoose = require("mongoose")
const User = require("./user")
const Reply = require("./reply")

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }]
})

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;