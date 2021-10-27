const express = require("express")

const router = express.Router()

const getRegisterPage = (req, res) => {
    res.render("auth/registerPage")
}

router.get("/register", getRegisterPage)


module.exports = router