const mongoose = require("mongoose")
const Question = require("./question")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    questions : [Question],
})

const User = mongoose.model("User", userSchema);
module.exports = User;