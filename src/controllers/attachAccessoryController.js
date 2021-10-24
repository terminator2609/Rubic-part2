const express = require("express")
const allCommandCube = require("../services/addCubeService")
const allCommandAcc = require("../services/addAccessoryService")

const router = express.Router()

const getAttachAccessoryPage = async (req, res) => {

    const cube = await allCommandCube.getCubeById(req.params.id)
    const accessories = await allCommandAcc.getAllAcc()

    res.render("accessories/attachAccessory", {cube, accessories})

    // newCube.findById(req.params.id)
    //     .then((values) => {
    //         res.render("accessories/attachAccessory", {
    //             name: values.name,
    //             imageUrl: values.imageUrl,

    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

}

router.get("/:id", getAttachAccessoryPage)

module.exports = router

