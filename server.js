const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const port = 3000;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
.then(() => {
    console.log("DB connected !!");
})
.catch(() => {
    console.log("DB connection failed !!");
})

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})