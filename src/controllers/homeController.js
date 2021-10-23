const express = require("express")

const router = express.Router()

let getHomePage = (req, res) => {
    res.render("index")
}

router.get("/", getHomePage)

module.exports = router