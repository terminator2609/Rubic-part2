const express = require("express")

const router = express.Router()

const getEditPage = (req, res) => {
    res.render("deleteCubePage")
}

router.get("/deleteCube", getEditPage)

module.exports = router