const express = require("express")

const router = express.Router()

const getAddCubePage = (req, res) => {
    res.render("create")
}

router.get("/newCube", getAddCubePage)

module.exports = router