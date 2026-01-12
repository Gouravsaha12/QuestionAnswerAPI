const mongoose = require("mongoose")
const User = require("./user")

const replySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    author: User
})

const Reply = mongoose.model("Reply", replySchema);
module.exports = Reply;