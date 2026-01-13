const express = require("express")
const {handleRegister} = require("../controllers/auth")

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await handleRegister(name, email, password, res);
    } catch (e) {
        if (e.code === 11000) {
            return res.status(409).send("Email already exists");
        }
        return res.status(500).send("Error registering user");
    }
});

module.exports = router;