const express = require("express")
const allCommandCube = require("../services/addCubeService")
const allCommandAcc = require("../services/addAccessoryService")

const router = express.Router()

const getAttachAccessoryPage = async (req, res) => {

    const cube = await allCommandCube.getCubeById(req.params.id)
    const accessories = await allCommandAcc.getAllAcc()

    res.render("accessories/attachAccessory", {cube, accessories})
}

const attachAccToCube = async (req, res) => {
    const cubeId = req.params.id

    await allCommandCube.attachAccessory(cubeId, req.body.accessory)

    res.redirect("/")
}

router.get("/:id", getAttachAccessoryPage)
router.post("/:id", attachAccToCube)


module.exports = router

