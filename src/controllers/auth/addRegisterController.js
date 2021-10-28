const express = require("express")
const allCommand = require("../../services/auth/registerService")

const router = express.Router()

const getRegisterPage = (req, res) => {
    res.render("auth/registerPage")
}

const registerUserTodb = async (req, res) => {
    let { username, password, repeatPassword } = req.body

    if (password === repeatPassword) {

        password = await allCommand.hashOnPass(password)
        
        await allCommand.registerUser(username, password)
        res.redirect("/")

    } else {
        res.status(404).send("The passwords no match!").end()
    }
}

router.get("/register", getRegisterPage)
router.post("/register", registerUserTodb)


module.exports = router