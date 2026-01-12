const mongoose = require("mongoose");

const connect = (URL) => {
    mongoose.connect(URL)
    .then(() => {
        console.log("DB connected !!");
    })
    .catch((e) => {
        console.log("DB connection failed !!");
        console.log(e);
    })
};

module.exports = {connect};