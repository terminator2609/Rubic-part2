const express = require("express")

const router = express.Router()

const getEditPage = (req, res) => {
    res.render("editCubePage")
}

router.get("/editCube", getEditPage)

module.exports = router