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
    author: User,
    replies: [Reply]
})

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;