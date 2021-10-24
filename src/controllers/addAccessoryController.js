const newAccessory = require("../models/accessory")
const express = require("express")

const router = express.Router()

const getAddAccessoryPage = (req, res) => {
    res.render("accessories/createAccessory")
}

const addNewAccessory = (req, res) => {
    newAccessory.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
    .catch((error) => {
        if(error) {
            res.send(error.errors.imageUrl.message).end()
        } else {
             res.redirect("/")
        }
     })

    res.redirect("/")
}

router.get("/accessory", getAddAccessoryPage)
router.post("/accessory", addNewAccessory)

module.exports = router