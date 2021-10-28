const express = require("express")
const allCommand = require("../../services/auth/loginService")

const router = express.Router()

const getLoginPage = (req, res) => {
    res.render("auth/loginPage")
}

const loginToPage = async (req, res) => {
    const { username, password } = req.body
    const user = await allCommand.getUser(username)

    try {
        await allCommand.checkPassword(password, user[0].password)

        const token = await allCommand.createToken(user)

        res.redirect("/")

    } catch (error) {
        console.log(error)
        res.status(404).send("Username or password no match!!!").end()
    }
}

router.get("/login", getLoginPage)
router.post("/login", loginToPage)


module.exports = router