const mongoose = require("mongoose")

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
    questions : [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true
    },],
})

const User = mongoose.model("User", userSchema);
module.exports = User;