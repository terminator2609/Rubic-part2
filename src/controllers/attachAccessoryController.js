const express = require("express")
const newCube = require("../models/newCube")

const router = express.Router()

const getAttachAccessoryPage = (req, res) => {
    newCube.findById(req.params.id)
        .then((values) => {
            res.render("accessories/attachAccessory", {
                name: values.name,
                imageUrl: values.imageUrl,

            })
        })
        .catch((error) => {
            console.log(error)
        })

}

router.get("/:id", getAttachAccessoryPage)

module.exports = router

