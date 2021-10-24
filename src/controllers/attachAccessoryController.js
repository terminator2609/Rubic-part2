const express = require("express")

const router = express.Router()

const getAttachAccessoryPage = (req, res) => {
    res.render("accessories/attachAccessory")
}

router.get("/:id", getAttachAccessoryPage)

module.exports = router

