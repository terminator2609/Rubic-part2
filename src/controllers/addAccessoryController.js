const addNewAccessoryService = require("../services/addAccessoryService")
const express = require("express")

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

router.get("/accessory", getAddAccessoryPage)
router.post("/accessory", addNewAccessory)

module.exports = router