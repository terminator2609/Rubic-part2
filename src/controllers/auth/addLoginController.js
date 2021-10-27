const express = require("express")

const router = express.Router()

const getLoginPage = (req, res) => {
    res.render("auth/loginPage")
}

router.get("/login", getLoginPage)


module.exports = router