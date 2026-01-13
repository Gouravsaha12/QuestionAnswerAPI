const bcrypt = require("bcrypt");
const User = require("../models/User");

const handleRegister = async (name, email, password, res) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name: name, 
            email: email,
            hashed_password: hashedPassword
        });
        res.status(200).send("Registration successful");
    }
    catch (e) {
        res.status(500).send("Error registering user");
    }
};

module.exports = {handleRegister};