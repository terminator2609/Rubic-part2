const addNewAccessoryService = require("../services/addAccessoryService")
const express = require("express")
const allCommand = require("../middleware/auth")

const router = express.Router()

const getAddAccessoryPage = (req, res) => {
    res.render("accessories/createAccessory")
}

const addNewAccessory = async (req, res) => {

    try {
        await addNewAccessoryService.addNewAccessoryToDb(req, res)
        res.redirect("/")
    } catch (error) {
        res.send(errors.imageUrl.message).end()
    }
}

router.get("/accessory", allCommand.checkForToken, getAddAccessoryPage)
router.post("/accessory", allCommand.checkForToken, addNewAccessory)

module.exports = router