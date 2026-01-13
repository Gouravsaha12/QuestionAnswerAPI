const express = require("express");
require('dotenv').config();

const app = express();
const port = 3000;
const URL = process.env.MONGODB_URL;

const authRouter = require("./routes/auth")

const { connect } = require("./db")
connect(URL);

app.use(express.json());

app.use('/auth' , authRouter);

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})